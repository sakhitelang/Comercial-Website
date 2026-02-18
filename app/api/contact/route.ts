/**
 * Contact API routes
 * POST /api/contact - Submit inquiry
 */
import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Enter a valid phone number').max(15),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

// Submit a contact inquiry
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // Log the inquiry
    console.log('========================================');
    console.log('📧 NEW INQUIRY RECEIVED');
    console.log('========================================');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
    console.log('========================================');

    // Try to send email (optional - won't fail if email is not configured)
    try {
      const emailPass = process.env.EMAIL_PASS;
      if (emailPass && emailPass.length >= 10 && !emailPass.includes('your-')) {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER || 'sakhit.135@gmail.com',
            pass: emailPass,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER || 'telangsakhi09@gmail.com',
          to: 'telangsakhi09@gmail.com',
          subject: `New Inquiry from ${name} - Shreesha Engineering`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f97316;">New Inquiry Received</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        });
        console.log('✅ Email sent successfully!');
      } else {
        console.log('⚠️ Email not configured - inquiry logged only');
      }
    } catch (emailError) {
      console.log('⚠️ Email could not be sent - inquiry logged only');
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully! We will contact you soon.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact POST error:', error);
    return NextResponse.json({ error: 'Failed to submit inquiry. Please try again.' }, { status: 500 });
  }
}
