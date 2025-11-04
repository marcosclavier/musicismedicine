import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Get Mailchimp credentials from environment variables
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_SERVER = process.env.MAILCHIMP_API_SERVER

    // Check if environment variables are set
    if (!API_KEY || !AUDIENCE_ID || !API_SERVER) {
      console.error('Mailchimp environment variables are not set')
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    // Mailchimp API endpoint
    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    // Prepare the data for Mailchimp
    const data = {
      email_address: email,
      status: 'subscribed', // Use 'pending' for double opt-in (recommended for Canada)
      tags: ['Website Signup', 'Music Is Medicine'], // Tag subscribers
      merge_fields: {
        SOURCE: 'Music Is Medicine Website',
      },
    }

    // Make request to Mailchimp API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    // Handle Mailchimp response
    if (response.ok) {
      return NextResponse.json(
        { message: 'Successfully subscribed to newsletter!' },
        { status: 200 }
      )
    } else if (responseData.title === 'Member Exists') {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter.' },
        { status: 400 }
      )
    } else {
      console.error('Mailchimp API error:', responseData)
      return NextResponse.json(
        { error: responseData.detail || 'Failed to subscribe. Please try again.' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
