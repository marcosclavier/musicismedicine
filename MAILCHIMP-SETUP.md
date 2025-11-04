# Mailchimp Newsletter Setup Guide

## Overview

The Music Is Medicine website now has a fully integrated newsletter signup system powered by Mailchimp. This guide will help you complete the setup and start collecting subscribers.

---

## ✅ What's Already Done

1. **API Integration** - Next.js API route created at `/app/api/newsletter/route.ts`
2. **Form Component** - Newsletter form updated in `components/Footer.tsx` with full functionality
3. **Environment Variables** - `.env.local` file created for secure API key storage
4. **Security** - `.env.local` is excluded from Git commits
5. **User Experience** - Loading states, success/error messages, form validation

---

## 🔧 Required: Complete Your Mailchimp Setup

### Step 1: Find Your Audience ID

Your API key is already configured. Now you need to add your **Audience ID** (also called List ID).

1. Log in to Mailchimp at https://mailchimp.com
2. Click **Audience** in the left sidebar
3. If you have multiple audiences, select the one for Music Is Medicine
4. Click **Settings** > **Audience name and defaults**
5. Look for **Audience ID** - it will be a string like `a1b2c3d4e5`

### Step 2: Update Your .env.local File

1. Open `.env.local` in your project root
2. Replace `your_audience_id_here` with your actual Audience ID:

```bash
MAILCHIMP_AUDIENCE_ID=a1b2c3d4e5
```

3. Save the file
4. Restart your development server:

```bash
npm run dev
```

---

## 🧪 Testing the Integration

### Test on Localhost

1. Start your development server: `npm run dev`
2. Navigate to http://localhost:3000
3. Scroll to the footer
4. Enter a test email address
5. Click "Subscribe"
6. You should see:
   - Loading spinner during submission
   - Success message: "Successfully subscribed to newsletter!"
   - Email cleared from input field

### Verify in Mailchimp

1. Go to Mailchimp > **Audience** > **All contacts**
2. Your test email should appear in the list
3. Check the **Tags** column - should show "Website Signup" and "Music Is Medicine"
4. Check the **Source** field - should show "Music Is Medicine Website"

---

## 📋 Subscriber Management

### View Subscribers

- **Mailchimp Dashboard** > **Audience** > **All contacts**
- Filter by tags: "Website Signup", "Music Is Medicine"

### Subscriber Details

Each subscriber will have:
- **Email address**
- **Subscription date**
- **Tags**: "Website Signup", "Music Is Medicine"
- **Source**: "Music Is Medicine Website"
- **Status**: "Subscribed"

### Export Subscribers

1. Go to **Audience** > **All contacts**
2. Click **Export audience**
3. Choose **Export as CSV**
4. Use this for analytics or backup

---

## 📧 Creating Email Campaigns

### Welcome Email (Recommended)

Set up an automated welcome email for new subscribers:

1. Go to **Automations** > **Create** > **Welcome new subscribers**
2. Design your email with:
   - Thank you message
   - Link to first single "Radio"
   - Information about upcoming releases
   - Link to donate page
   - Social media links

**Template Suggestions**:
```
Subject: Welcome to Music Is Medicine 🎵

Hi there,

Thank you for joining the Music Is Medicine community!

You're now part of a movement using the healing power of music to support brain cancer research. Here's what to expect:

🎵 First Single "Radio" - Available now on all platforms
📅 New releases monthly through February 2026
💜 Impact updates on brain cancer research
❤️ Stories from families and researchers

Listen to "Radio" now: [Spotify Link]
Support the cause: [Donation Link]

Every listen, every share, every donation makes a difference.

With gratitude,
The Music Is Medicine Team

P.S. Net proceeds go to the Brain Tumour Foundation of Canada
```

### Single Release Announcements

Create campaigns for each single release:

**Campaign Schedule**:
- **Radio**: November 4, 2025 (Available now)
- **You & I**: November 30, 2025
- **Courage**: December 30, 2025
- **Where to Go**: February 28, 2026

**Email Template for Releases**:
1. Announce the new single
2. Include album artwork
3. Add streaming platform links
4. Share the story behind the song
5. Remind about the charitable cause
6. Include donation CTA

---

## 🏷️ Subscriber Segmentation

Tags are automatically added to all subscribers. You can create additional segments:

### Create a Segment

1. Go to **Audience** > **Segments**
2. Click **Create Segment**
3. Set conditions based on:
   - **Tags**: Website Signup, Music Is Medicine
   - **Signup date**: Recent subscribers vs. longtime supporters
   - **Engagement**: Opened last email, clicked links

### Recommended Segments

1. **Engaged Supporters** - Opened 3+ emails in last 30 days
2. **New Subscribers** - Joined in last 7 days
3. **Inactive** - Haven't opened in 90 days (re-engagement campaign)
4. **Donors** - Tag manually when someone donates

---

## 📊 Analytics & Reporting

### Track Performance

Monitor these metrics in Mailchimp:
- **Subscriber growth rate**
- **Email open rates** (industry average: 21.5% for non-profits)
- **Click-through rates** (industry average: 2.6%)
- **Unsubscribe rate** (keep below 0.5%)

### Key Reports

1. **Audience Dashboard**: Total subscribers, growth trends
2. **Campaign Reports**: Individual email performance
3. **Engagement**: Most engaged subscribers
4. **Growth**: New vs. unsubscribed over time

---

## 🎯 Best Practices

### Email Frequency

**Recommended Schedule**:
- **Weekly**: During single release months (Nov-Feb)
- **Bi-weekly**: Other months
- **Ad-hoc**: Major announcements, donation drives

### Content Mix

Balance your emails:
- 40% - Music updates (new singles, behind-the-scenes)
- 30% - Impact stories (research updates, testimonials)
- 20% - Calls to action (donate, share, attend events)
- 10% - Community (thank yous, milestones)

### Compliance

✅ **Already Handled**:
- Subscribers opt-in via website form
- Mailchimp includes unsubscribe link automatically
- Privacy-compliant with CASL (Canada's Anti-Spam Legislation)

**CASL Requirements** (Canada):
- ✅ Express consent obtained through form submission
- ✅ Clear identification of sender (Music Is Medicine / PEAK)
- ✅ Unsubscribe mechanism (Mailchimp automatic)
- ✅ Valid physical address (add to email footer in Mailchimp)

**Action Required**: Add your physical address in Mailchimp
1. Go to **Settings** > **Audience** > **Audience name and defaults**
2. Add PEAK Financial Group's address in "Default 'From' email address" section

---

## 🔒 Security & Privacy

### API Key Security

✅ **Current Status**: Secure
- API key stored in `.env.local` (not committed to Git)
- Only accessible server-side (Next.js API routes)
- Never exposed to browser/client

### Privacy Policy

Update your privacy policy to include:
- Email collection and usage
- Integration with Mailchimp
- User rights (unsubscribe, data deletion)
- CASL compliance statement

**Sample Privacy Text**:
```
Email Newsletter: When you subscribe to our newsletter, we collect your email
address and store it securely using Mailchimp. We send updates about new music
releases and our charitable impact. You can unsubscribe anytime using the link
in every email. We never sell or share your email with third parties.
```

---

## 🚨 Troubleshooting

### "Server configuration error"

**Cause**: Environment variables not set correctly

**Fix**:
1. Check `.env.local` exists in project root
2. Verify `MAILCHIMP_AUDIENCE_ID` is filled in (not `your_audience_id_here`)
3. Restart dev server: `npm run dev`

### "Failed to subscribe"

**Possible Causes**:
1. Invalid email format → User receives error message automatically
2. Email already subscribed → User receives "already subscribed" message
3. Network error → User receives "network error" message
4. Invalid Audience ID → Check Mailchimp dashboard for correct ID

**Debug Steps**:
1. Check browser console (F12) for errors
2. Check terminal for API route errors
3. Verify Audience ID is correct
4. Test with a different email address

### "Member Exists" Error

**This is normal!** If someone tries to subscribe twice:
- They receive: "This email is already subscribed to our newsletter."
- No error in logs
- They remain subscribed

---

## 🚀 Advanced Features (Optional)

### Double Opt-In

For stricter consent (recommended for EU/international):

Edit `/app/api/newsletter/route.ts` line 35:
```typescript
status: 'pending', // Change from 'subscribed' to 'pending'
```

Users will receive a confirmation email before being added.

### Custom Tags

Add subscriber-specific tags:

Edit `/app/api/newsletter/route.ts` line 36:
```typescript
tags: [
  'Website Signup',
  'Music Is Medicine',
  'Single Release Interest', // Add custom tags
],
```

### Additional Fields

Collect more than just email:

1. Add fields to Mailchimp audience (Settings > Audience fields)
2. Update form in `components/Footer.tsx` to include name, interests
3. Update API route to send additional `merge_fields`

**Example**:
```typescript
merge_fields: {
  FNAME: firstName,      // First name
  LNAME: lastName,       // Last name
  SOURCE: 'Website',
  INTERESTS: 'Singles',  // Custom field
},
```

---

## 📈 Growth Strategies

### Promote Newsletter Signup

**On Website**:
- ✅ Footer form (already implemented)
- Consider adding:
  - Pop-up after 30 seconds on page
  - Exit-intent pop-up
  - Banner at top of page during release weeks

**On Social Media**:
- Share signup link: `https://musicismedicine.ca/#footer` (scroll to form)
- Create QR code linking to website
- Include in Instagram/Facebook bio
- Post about exclusive email-only content

**At Events**:
- Collect emails at benefit concerts
- Import to Mailchimp with tag "Event Signup"
- QR code on event materials

### Incentives

Encourage signups with:
- Early access to new singles (24 hours before public release)
- Exclusive behind-the-scenes content
- Monthly research impact updates
- First to know about events

---

## 📞 Support

### Mailchimp Support
- Help Center: https://mailchimp.com/help/
- Email: support@mailchimp.com
- Live chat available in dashboard

### Website Technical Issues
- Check `/app/api/newsletter/route.ts` for API logic
- Check `components/Footer.tsx` for form logic
- Verify `.env.local` has correct credentials

---

## ✅ Launch Checklist

Before going live:

- [ ] Audience ID added to `.env.local`
- [ ] Test subscription on localhost
- [ ] Verify subscriber appears in Mailchimp
- [ ] Check tags are applied correctly
- [ ] Create welcome email automation
- [ ] Set up email templates for single releases
- [ ] Add physical address to Mailchimp settings (CASL compliance)
- [ ] Update privacy policy on website
- [ ] Test on production domain after deployment
- [ ] Set up analytics tracking (Google Analytics events for signups)

---

## 🎉 You're Ready!

Your Mailchimp newsletter integration is complete! Once you add your Audience ID and restart the server, subscribers will start flowing in.

**Next Steps**:
1. Add your Audience ID to `.env.local`
2. Restart server: `npm run dev`
3. Test a signup
4. Create your welcome email
5. Plan your first campaign

**Questions?** Check the Troubleshooting section or contact Mailchimp support.

---

**Document Version**: 1.0
**Last Updated**: November 4, 2025
**Integration Status**: ✅ Complete (pending Audience ID)
