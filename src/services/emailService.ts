// Email Service - Handles contact form submissions
// In production, this would send to your backend which then sends emails

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

// Function to send email via FormSubmit.co (free service)
export const sendEmail = async (data: ContactMessage): Promise<boolean> => {
  try {
    const response = await fetch("https://formsubmit.co/ajax/subssems336@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        _captcha: false,
        _autoresponse: "Thank you for reaching out! I'll get back to you soon.",
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};

// Alternative: Using EmailJS library (requires account)
// Configure EmailJS and use this function instead:
/*
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

export const sendEmailWithJS = async (data: ContactMessage): Promise<boolean> => {
  try {
    const response = await emailjs.send('service_id', 'template_id', {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: RECIPIENT_EMAIL,
    });
    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
*/
