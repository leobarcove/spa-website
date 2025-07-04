// Email service configuration
// This is a placeholder implementation - in production, you would:
// 1. Install an email service package (e.g., npm install nodemailer or @sendgrid/mail)
// 2. Configure environment variables for your email service
// 3. Replace the mock implementation with actual email sending logic

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

interface BookingDetails {
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceName: string
  servicePrice: number
  date: string
  time: string
  duration: string
  therapist?: string
  bookingId: string
  specialRequests?: string
}

// Email template functions
export function generateBookingConfirmationEmail(
  booking: BookingDetails
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation - Sharon Spa</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header {
            background-color: #1a2e1a;
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
            letter-spacing: 2px;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 18px;
            color: #1a2e1a;
            margin-bottom: 20px;
        }
        .booking-details {
            background-color: #f8f8f8;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
        }
        .booking-details h2 {
            color: #1a2e1a;
            font-size: 20px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #C9A961;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e0e0e0;
        }
        .detail-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .detail-label {
            font-weight: 600;
            color: #666;
        }
        .detail-value {
            color: #1a2e1a;
            font-weight: 500;
        }
        .cta-section {
            text-align: center;
            margin: 30px 0;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #C9A961;
            color: #ffffff;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 600;
            font-size: 16px;
        }
        .info-section {
            background-color: #f0f4f0;
            padding: 25px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .info-section h3 {
            color: #1a2e1a;
            margin-bottom: 15px;
        }
        .info-section ul {
            margin: 0;
            padding-left: 20px;
        }
        .info-section li {
            margin-bottom: 10px;
            color: #666;
        }
        .footer {
            background-color: #1a2e1a;
            color: #ffffff;
            text-align: center;
            padding: 30px 20px;
        }
        .footer p {
            margin: 5px 0;
            font-size: 14px;
        }
        .footer a {
            color: #C9A961;
            text-decoration: none;
        }
        @media (max-width: 600px) {
            .content {
                padding: 30px 20px;
            }
            .detail-row {
                flex-direction: column;
            }
            .detail-label {
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SHARON SPA</h1>
            <p style="margin: 10px 0 0; font-size: 14px; letter-spacing: 1px;">LUXURY WELLNESS & BEAUTY</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                Dear ${booking.customerName},
            </div>
            
            <p>Thank you for choosing Sharon Spa. We are delighted to confirm your booking and look forward to providing you with an exceptional spa experience.</p>
            
            <div class="booking-details">
                <h2>Booking Confirmation #${booking.bookingId}</h2>
                
                <div class="detail-row">
                    <span class="detail-label">Service:</span>
                    <span class="detail-value">${booking.serviceName}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span class="detail-value">${booking.date}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Time:</span>
                    <span class="detail-value">${booking.time}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">${booking.duration}</span>
                </div>
                
                ${
                  booking.therapist
                    ? `
                <div class="detail-row">
                    <span class="detail-label">Therapist:</span>
                    <span class="detail-value">${booking.therapist}</span>
                </div>
                `
                    : ''
                }
                
                <div class="detail-row">
                    <span class="detail-label">Total Amount:</span>
                    <span class="detail-value" style="font-size: 18px; color: #C9A961;">RM ${
                      booking.servicePrice
                    }</span>
                </div>
                
                ${
                  booking.specialRequests
                    ? `
                <div class="detail-row">
                    <span class="detail-label">Special Requests:</span>
                    <span class="detail-value">${booking.specialRequests}</span>
                </div>
                `
                    : ''
                }
            </div>
            
            <div class="info-section">
                <h3>Before Your Visit</h3>
                <ul>
                    <li>Please arrive 15 minutes before your appointment time</li>
                    <li>Bring this confirmation email or provide your booking reference</li>
                    <li>Inform us of any health conditions or allergies</li>
                    <li>Wear comfortable clothing</li>
                    <li>Consider avoiding heavy meals 2 hours before treatment</li>
                </ul>
            </div>
            
            <div class="cta-section">
                <a href="https://sharonspa.my/booking" class="cta-button">Manage Your Booking</a>
            </div>
            
            <div class="info-section">
                <h3>Cancellation Policy</h3>
                <p style="margin: 0; color: #666;">Please note that cancellations must be made at least 24 hours in advance. Late cancellations may incur a charge of 50% of the service cost.</p>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Sharon Spa</strong></p>
            <p>📍 181 Tingkat 1, Lot B, Lebuh Melaka, 10400 Georgetown, Pulau Pinang</p>
            <p>📞 601112914118 | ✉️ <a href="mailto:info@sharonsparelax.my">info@sharonsparelax.my</a></p>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
                This email was sent to ${
                  booking.customerEmail
                } regarding booking #${booking.bookingId}
            </p>
        </div>
    </div>
</body>
</html>
  `
}

export function generateBookingReminderEmail(booking: BookingDetails): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointment Reminder - Sharon Spa</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header {
            background-color: #1a2e1a;
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
            letter-spacing: 2px;
        }
        .content {
            padding: 40px 30px;
        }
        .reminder-box {
            background-color: #f0f4f0;
            border-left: 4px solid #C9A961;
            padding: 20px;
            margin: 20px 0;
        }
        .appointment-details {
            background-color: #f8f8f8;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
            text-align: center;
        }
        .appointment-details h2 {
            color: #1a2e1a;
            font-size: 24px;
            margin-bottom: 15px;
        }
        .appointment-details p {
            font-size: 18px;
            margin: 10px 0;
            color: #666;
        }
        .appointment-details .time {
            font-size: 28px;
            color: #C9A961;
            font-weight: bold;
        }
        .cta-section {
            text-align: center;
            margin: 30px 0;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #C9A961;
            color: #ffffff;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 600;
            font-size: 16px;
            margin: 0 10px;
        }
        .cta-button.secondary {
            background-color: #666;
        }
        .footer {
            background-color: #1a2e1a;
            color: #ffffff;
            text-align: center;
            padding: 30px 20px;
        }
        .footer p {
            margin: 5px 0;
            font-size: 14px;
        }
        .footer a {
            color: #C9A961;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SHARON SPA</h1>
            <p style="margin: 10px 0 0; font-size: 14px; letter-spacing: 1px;">APPOINTMENT REMINDER</p>
        </div>
        
        <div class="content">
            <div class="reminder-box">
                <h2 style="margin: 0 0 10px; color: #1a2e1a;">Hello ${
                  booking.customerName
                },</h2>
                <p style="margin: 0;">This is a friendly reminder about your upcoming appointment at Sharon Spa.</p>
            </div>
            
            <div class="appointment-details">
                <h2>${booking.serviceName}</h2>
                <p>📅 ${booking.date}</p>
                <p class="time">🕐 ${booking.time}</p>
                <p>⏱️ Duration: ${booking.duration}</p>
                ${
                  booking.therapist
                    ? `<p>👤 Therapist: ${booking.therapist}</p>`
                    : ''
                }
            </div>
            
            <div class="cta-section">
                <a href="https://sharonspa.my/booking" class="cta-button">Confirm Attendance</a>
                <a href="tel:601112914118" class="cta-button secondary">Call to Reschedule</a>
            </div>
            
            <div style="background-color: #fff5e6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1a2e1a; margin-top: 0;">Quick Reminders:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #666;">
                    <li>Please arrive 15 minutes early</li>
                    <li>Bring your booking confirmation</li>
                    <li>Wear comfortable clothing</li>
                    <li>Cancellations must be made 24 hours in advance</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Sharon Spa</strong></p>
            <p>📍 181 Tingkat 1, Lot B, Lebuh Melaka, 10400 Georgetown, Pulau Pinang</p>
            <p>📞 601112914118 | ✉️ <a href="mailto:info@sharonsparelax.my">info@sharonsparelax.my</a></p>
        </div>
    </div>
</body>
</html>
  `
}

// Mock email sending function - replace with actual implementation
export async function sendEmail(
  options: EmailOptions
): Promise<{ success: boolean; error?: string }> {
  // In production, you would:
  // 1. Use a real email service (SendGrid, Nodemailer with SMTP, etc.)
  // 2. Add proper error handling
  // 3. Include retry logic
  // 4. Add email validation

  console.log('Email would be sent:', {
    to: options.to,
    subject: options.subject,
    from: options.from || 'noreply@sharonspa.my',
  })

  // Mock successful response
  return { success: true }
}

// Convenience function for sending booking confirmation
export async function sendBookingConfirmation(booking: BookingDetails) {
  const html = generateBookingConfirmationEmail(booking)

  return sendEmail({
    to: booking.customerEmail,
    subject: `Booking Confirmation #${booking.bookingId} - Sharon Spa`,
    html,
    from: 'bookings@sharonspa.my',
  })
}

// Convenience function for sending booking reminder
export async function sendBookingReminder(booking: BookingDetails) {
  const html = generateBookingReminderEmail(booking)

  return sendEmail({
    to: booking.customerEmail,
    subject: `Appointment Reminder - ${booking.date} at ${booking.time}`,
    html,
    from: 'reminders@sharonspa.my',
  })
}
