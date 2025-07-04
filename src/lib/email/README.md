# Email Configuration Guide

## Overview
This directory contains email templates and services for the Sharon Spa booking system. Currently, it includes a mock implementation that needs to be connected to a real email service provider for production use.

## Current Implementation

### Email Templates
1. **Booking Confirmation Email** - Sent immediately after a booking is made
2. **Booking Reminder Email** - Can be scheduled 24 hours before the appointment

### Files
- `email-service.ts` - Email service with template generation and sending logic
- `/app/api/send-booking-confirmation/route.ts` - API endpoint for sending emails

## Production Setup

### Step 1: Choose an Email Service Provider

#### Option A: SendGrid (Recommended)
```bash
npm install @sendgrid/mail
```

#### Option B: Nodemailer with SMTP
```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

#### Option C: Resend
```bash
npm install resend
```

### Step 2: Add Environment Variables

Add to `.env.local`:

```env
# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@sharonspa.my
SENDGRID_VERIFIED_SENDER=bookings@sharonspa.my

# OR Nodemailer SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=Sharon Spa <noreply@sharonspa.my>

# OR Resend
RESEND_API_KEY=your_resend_api_key
```

### Step 3: Update email-service.ts

Replace the mock `sendEmail` function with actual implementation:

#### SendGrid Example:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function sendEmail(options: EmailOptions) {
  try {
    await sgMail.send({
      to: options.to,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: options.subject,
      html: options.html,
    })
    return { success: true }
  } catch (error) {
    console.error('SendGrid error:', error)
    return { success: false, error: error.message }
  }
}
```

#### Nodemailer Example:
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendEmail(options: EmailOptions) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: options.to,
      subject: options.subject,
      html: options.html,
    })
    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: error.message }
  }
}
```

### Step 4: Update Booking Form Integration

In `/src/components/Booking/BookingSection.tsx`, update the `handleConfirmBooking` function:

```typescript
const handleConfirmBooking = async () => {
  try {
    const bookingData = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      serviceName: selectedService?.name || '',
      servicePrice: selectedService?.price || 0,
      date: format(selectedDate!, 'MMMM d, yyyy'),
      time: selectedTime || '',
      duration: selectedService?.duration || '',
      bookingId: `BK-${Date.now()}`,
      specialRequests: formData.specialRequests
    }

    const response = await fetch('/api/send-booking-confirmation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    })

    if (response.ok) {
      // Show success message
      setShowConfirmationModal(true)
    } else {
      // Handle error
      console.error('Failed to send confirmation')
    }
  } catch (error) {
    console.error('Booking error:', error)
  }
}
```

## Testing

1. **Development Testing**: The current mock implementation logs emails to console
2. **Production Testing**: 
   - Use email service provider's test mode
   - Send test emails to verified addresses first
   - Check spam folders
   - Verify all links work correctly

## Email Best Practices

1. **SPF/DKIM/DMARC**: Configure domain authentication to improve deliverability
2. **Responsive Design**: Emails are already mobile-responsive
3. **Plain Text Alternative**: Consider adding plain text versions
4. **Unsubscribe Links**: Add for marketing emails (not needed for transactional)
5. **Rate Limiting**: Implement to prevent abuse

## Troubleshooting

### Common Issues:
1. **Emails going to spam**: Check domain authentication and sender reputation
2. **Slow delivery**: Consider using a dedicated IP for high volume
3. **Bounce handling**: Implement webhook handlers for bounce notifications
4. **Template rendering**: Test across different email clients

## Future Enhancements

1. **Email Queue**: Implement with Redis/Bull for reliability
2. **Templates**: Add more templates (welcome, password reset, promotions)
3. **Localization**: Support multiple languages
4. **A/B Testing**: Test different subject lines and content