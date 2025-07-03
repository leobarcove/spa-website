import { NextRequest, NextResponse } from 'next/server'
import { sendBookingConfirmation, sendBookingReminder } from '@/lib/email/email-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['customerName', 'customerEmail', 'customerPhone', 'serviceName', 'servicePrice', 'date', 'time', 'duration', 'bookingId']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    // Send confirmation email
    const result = await sendBookingConfirmation(body)
    
    if (result.success) {
      // In production, you might also want to:
      // 1. Save the booking to a database
      // 2. Send a notification to staff
      // 3. Update availability calendar
      // 4. Schedule a reminder email
      
      return NextResponse.json({
        success: true,
        message: 'Booking confirmation sent successfully',
        bookingId: body.bookingId
      })
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to send confirmation email' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error sending booking confirmation:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Example request body:
/*
{
  "customerName": "Sarah Lim",
  "customerEmail": "sarah@example.com",
  "customerPhone": "+60123456789",
  "serviceName": "Royal Malaysian Ritual",
  "servicePrice": 280,
  "date": "July 15, 2025",
  "time": "2:00 PM",
  "duration": "90 minutes",
  "therapist": "Maya",
  "bookingId": "BK-2025-0715-001",
  "specialRequests": "Prefer lavender essential oil"
}
*/