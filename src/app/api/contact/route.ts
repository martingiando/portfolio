import { Resend } from "resend";
import { NextResponse } from "next/server";

// Simple in-memory rate limiter (resets on deploy/restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // max requests
const RATE_WINDOW = 60 * 60 * 1000; // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const name = sanitize(String(body.name || ""));
    const email = sanitize(String(body.email || ""));
    const message = sanitize(String(body.message || ""));

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum length." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error: sendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "martingiando@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background-color:#F7F7F8;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F7F8;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding-bottom:24px;">
              <span style="font-size:11px;font-family:'Courier New',monospace;text-transform:uppercase;letter-spacing:3px;color:#6B7280;">Portfolio Contact</span>
            </td>
          </tr>
          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff;border:2px solid #0A0E17;box-shadow:8px 8px 0px 0px #0A0E17;">
              <!-- Card Header -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:24px 32px;border-bottom:2px solid #0A0E17;background-color:#0A0E17;">
                    <h1 style="margin:0;font-size:20px;font-weight:800;text-transform:uppercase;letter-spacing:-0.5px;color:#ffffff;">New Message</h1>
                  </td>
                </tr>
              </table>
              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:24px 32px 0;">
                    <p style="margin:0 0 4px;font-size:11px;font-family:'Courier New',monospace;text-transform:uppercase;letter-spacing:2px;color:#6B7280;">Name</p>
                    <p style="margin:0;font-size:16px;color:#0A0E17;font-weight:600;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px 0;">
                    <p style="margin:0 0 4px;font-size:11px;font-family:'Courier New',monospace;text-transform:uppercase;letter-spacing:2px;color:#6B7280;">Email</p>
                    <p style="margin:0;font-size:16px;"><a href="mailto:${email}" style="color:#0055FF;text-decoration:none;">${email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px;">
                    <p style="margin:0 0 4px;font-size:11px;font-family:'Courier New',monospace;text-transform:uppercase;letter-spacing:2px;color:#6B7280;">Message</p>
                    <p style="margin:0;font-size:15px;color:#0A0E17;line-height:1.6;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
              <!-- Reply button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 32px 28px;">
                    <a href="mailto:${email}" style="display:inline-block;background-color:#0055FF;color:#ffffff;font-family:'Courier New',monospace;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;text-decoration:none;padding:12px 24px;box-shadow:4px 4px 0px 0px #0A0E17;">Reply</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0;font-size:11px;font-family:'Courier New',monospace;text-transform:uppercase;letter-spacing:2px;color:#6B7280;">Sent from martingiando.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json(
        { error: sendError.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
