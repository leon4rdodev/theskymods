import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Configurar el transporter de Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Sky Mods Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #87CEEB;">New Contact Message</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #666; font-size: 12px;">
            This message was sent from the Sky Mods contact form
          </p>
        </div>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Enviar email de confirmación al usuario
    const confirmationMailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: email,
      subject: "Thank you for contacting Sky Mods",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Confirmation - Sky Mods</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #E8F4F8 0%, #ffffff 100%);">
          <table role="presentation" style="width: 100%; border-collapse: collapse; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(44, 62, 80, 0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #87CEEB 0%, #98D8C8 100%); padding: 48px 32px; text-align: center;">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 16px;">
                        <path d="M6.5 19.5C4.567 19.5 3 17.933 3 16C3 14.067 4.567 12.5 6.5 12.5C6.804 12.5 7.098 12.54 7.377 12.615C7.131 11.802 7 10.935 7 10C7 5.582 10.582 2 15 2C19.418 2 23 5.582 23 10C23 10.711 22.919 11.403 22.767 12.07C24.128 12.533 25 13.875 25 15.5C25 17.433 23.433 19 21.5 19H6.5Z" fill="white" fill-opacity="0.95"/>
                      </svg>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Sky Mods</h1>
                      <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase;">Canvas Modloader</p>
                    </td>
                  </tr>
                  
                  <!-- Success Icon -->
                  <tr>
                    <td style="padding: 40px 32px 24px; text-align: center;">
                      <h2 style="margin: 0 0 12px 0; color: #2C3E50; font-size: 22px; font-weight: 600;">Message Received</h2>
                      <p style="margin: 0; color: #5a6a7a; font-size: 15px; line-height: 1.6;">
                        Hello <strong style="color: #2C3E50;">${name}</strong>, thank you for reaching out to us.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Message Details -->
                  <tr>
                    <td style="padding: 0 32px 32px;">
                      <div style="background: linear-gradient(135deg, rgba(135, 206, 235, 0.05) 0%, rgba(152, 216, 200, 0.05) 100%); border: 1px solid rgba(135, 206, 235, 0.15); border-radius: 12px; padding: 24px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 0 0 16px 0;">
                              <div style="display: flex; align-items: flex-start;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px; flex-shrink: 0; margin-top: 2px;">
                                  <path d="M7 8H17M7 12H17M7 16H13" stroke="#87CEEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="#87CEEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div>
                                  <p style="margin: 0 0 4px 0; color: #87CEEB; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                                  <p style="margin: 0; color: #2C3E50; font-size: 14px; font-weight: 500;">${subject}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 16px 0 0 0; border-top: 1px solid rgba(135, 206, 235, 0.1);">
                              <div style="display: flex; align-items: flex-start;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px; flex-shrink: 0; margin-top: 2px;">
                                  <circle cx="12" cy="12" r="10" stroke="#98D8C8" stroke-width="2"/>
                                  <path d="M12 6V12L16 14" stroke="#98D8C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div>
                                  <p style="margin: 0 0 4px 0; color: #98D8C8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Received</p>
                                  <p style="margin: 0; color: #5a6a7a; font-size: 13px;">${new Date().toLocaleDateString(
                                    "en-US",
                                    {
                                      weekday: "long",
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Response Info -->
                  <tr>
                    <td style="padding: 0 32px 40px;">
                      <div style="background: rgba(152, 216, 200, 0.08); border-left: 3px solid #98D8C8; border-radius: 6px; padding: 16px 20px;">
                        <p style="margin: 0; color: #2C3E50; font-size: 14px; line-height: 1.5;">
                          Our team will review your message and respond within <strong>24-48 hours</strong>.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #f8fafb; padding: 32px; text-align: center; border-top: 1px solid rgba(135, 206, 235, 0.1);">
                      <p style="margin: 0 0 8px 0; color: #2C3E50; font-size: 16px; font-weight: 600;">Sky Mods</p>
                      <p style="margin: 0 0 16px 0; color: #5a6a7a; font-size: 12px;">Canvas Modloader & LibTSM for Sky: Children of the Light</p>
                      <p style="margin: 0 0 20px 0; color: #87CEEB; font-size: 11px;">© ${new Date().getFullYear()} Sky Mods. All rights reserved.</p>
                      <div style="padding-top: 20px; border-top: 1px solid rgba(135, 206, 235, 0.1);">
                        <p style="margin: 0; color: #9ca3af; font-size: 11px; line-height: 1.6;">
                          This is an automated confirmation. Please do not reply to this email.<br/>
                          If you did not send this message, you can safely ignore this email.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Enviar email de confirmación
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending message. Please try again later." },
      { status: 500 }
    );
  }
}
