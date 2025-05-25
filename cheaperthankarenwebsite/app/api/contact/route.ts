import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, role, subject, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <contact@cheaperthankaren.com>', // Replace with your verified domain
      to: ['jason@tangentsolutions.net'], // Replace with your actual email
      subject: `New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #10b981, #3b82f6);
              color: white;
              padding: 30px 20px;
              border-radius: 10px;
              text-align: center;
              margin-bottom: 30px;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border-radius: 10px;
              border: 1px solid #e2e8f0;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: white;
              border-radius: 8px;
              border-left: 4px solid #10b981;
            }
            .field-label {
              font-weight: 600;
              color: #374151;
              margin-bottom: 5px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field-value {
              color: #111827;
              font-size: 16px;
            }
            .message-field {
              border-left-color: #3b82f6;
            }
            .message-value {
              white-space: pre-wrap;
              line-height: 1.8;
            }
            .footer {
              margin-top: 30px;
              padding: 20px;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
              border-top: 1px solid #e5e7eb;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">💬 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to connect with CheaperThanKaren!</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">👤 Name</div>
              <div class="field-value">${firstName} ${lastName}</div>
            </div>
            
            <div class="field">
              <div class="field-label">📧 Email</div>
              <div class="field-value">${email}</div>
            </div>
            
            ${role ? `
            <div class="field">
              <div class="field-label">💼 Role</div>
              <div class="field-value">${role}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="field-label">📋 Subject</div>
              <div class="field-value">${subject}</div>
            </div>
            
            <div class="field message-field">
              <div class="field-label">💭 Message</div>
              <div class="field-value message-value">${message}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>Submitted at ${new Date().toLocaleString('en-US', {
              timeZone: 'America/New_York',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
              timeZoneName: 'short'
            })}</p>
            <p style="margin: 10px 0 0 0;">
              <strong>Quick Reply:</strong> <a href="mailto:${email}?subject=Re: ${subject}" style="color: #10b981; text-decoration: none;">Reply to ${firstName}</a>
            </p>
          </div>
        </body>
        </html>
      `,
      // Also send a plain text version for email clients that don't support HTML
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Role: ${role || 'Not specified'}
Subject: ${subject}

Message:
${message}

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
      `
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'CheaperThanKaren <contact@cheaperthankaren.com>', // Replace with your verified domain
      to: [email],
      subject: 'Thanks for reaching out to CheaperThanKaren!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thanks for contacting us!</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #10b981, #3b82f6);
              color: white;
              padding: 40px 20px;
              border-radius: 10px;
              text-align: center;
              margin-bottom: 30px;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border-radius: 10px;
              border: 1px solid #e2e8f0;
            }
            .highlight-box {
              background: #fef3c7;
              border: 1px solid #f59e0b;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .cta-button {
              display: inline-block;
              background: #10b981;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 32px;">🎉 Thanks for Reaching Out!</h1>
            <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">We've received your message and are excited to connect.</p>
          </div>
          
          <div class="content">
            <p>Hi ${firstName},</p>
            
            <p>Thanks for taking the time to reach out to us about "<strong>${subject}</strong>". We really appreciate your interest in CheaperThanKaren!</p>
            
            <div class="highlight-box">
              <p style="margin: 0;"><strong>⏰ What happens next?</strong></p>
              <p style="margin: 10px 0 0 0;">We typically respond within 24-48 hours (usually much faster). ${role ? `Since you mentioned you're ${role.toLowerCase().includes('a ') ? role : 'a ' + role}, we'll make sure to tailor our response to your specific situation.` : 'We\'ll make sure to address your specific questions.'}</p>
            </div>
            
            <p>In the meantime, feel free to explore more about our story and how we're helping people automate their email workflows:</p>
            
            <p style="text-align: center;">
              <a href="https://cheaperthankaren.com/our-story" class="cta-button">Read Our Story</a>
            </p>
            
            <p>And as we mentioned on the contact form - there's a fair chance Catalina will use the AI to draft her initial response to you, but she'll definitely review it personally before hitting send!</p>
            
            <p>Thanks again for your interest,<br>
            <strong>The CheaperThanKaren Team</strong></p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb;">
            <p>Questions? Just reply to this email or reach out at hello@cheaperthankaren.com</p>
          </div>
        </body>
        </html>
      `,
      text: `Hi ${firstName},

Thanks for reaching out to us about "${subject}". We've received your message and will get back to you within 24-48 hours (usually much faster).

${role ? `Since you mentioned you're ${role.toLowerCase().includes('a ') ? role : 'a ' + role}, we'll make sure to tailor our response to your specific situation.` : 'We\'ll make sure to address your specific questions.'}

In the meantime, feel free to check out our story at https://cheaperthankaren.com/our-story

Thanks again for your interest!

The CheaperThanKaren Team
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}