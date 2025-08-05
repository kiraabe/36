# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Enter your email: `kirubel1496@gmail.com`
   - Follow the OAuth setup to connect your Gmail account
5. Note down your **Service ID** (e.g., `service_xyz123`)

## 3. Create Email Templates

### Contact Form Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Set the "To Email" field to: `kirubel1496@gmail.com`
5. Note down your **Template ID** (e.g., `template_vff07o4`)

### Newsletter Subscription Template
1. Create another new template for newsletter subscriptions
2. Use this template structure:

```
Subject: New Newsletter Subscription - {{subscriber_email}}

🎉 New Newsletter Subscription!

Email: {{subscriber_email}}
Subscription Date: {{subscription_date}}
Subscription Time: {{subscription_time}}

The subscriber has signed up to receive:
- Cleaning tips and tricks
- Special offers and discounts
- Company updates

---
This notification was sent from your website newsletter subscription form.
```

3. Set the "To Email" field to: `kirubel1496@gmail.com`
4. Note down your **Newsletter Template ID** (e.g., `template_newsletter`)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `xyz123abc`)

## 5. Update Your Code

### Contact Form Configuration
Replace the placeholder values in `src/forms/contact-us-form.jsx`:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_5i5l5qr', // Your actual service ID
  TEMPLATE_ID: 'template_vff07o4', // Your actual contact template ID
  PUBLIC_KEY: 'sI0FlhGAlA9_-4v9x' // Your actual public key
};
```

### Newsletter Subscription Configuration
Update the template ID in `src/components/ui/NewsletterSubscription.jsx`:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_5i5l5qr', // Same service ID
  TEMPLATE_ID: 'template_newsletter', // Your actual newsletter template ID
  PUBLIC_KEY: 'sI0FlhGAlA9_-4v9x' // Same public key
};
```

## 6. Test Your Form
1. Fill out the contact form on your website
2. Check your email (`kirubel1496@gmail.com`) for the message
3. Check EmailJS dashboard for delivery status

## Free Plan Limits
- 200 emails per month
- Perfect for contact forms
- Upgrade available for higher limits

## Template Variables Available

### Contact Form Variables
The contact form sends these variables to your email template:
- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{phone}}` - User's phone number
- `{{inquiry_type}}` - Selected service type
- `{{message}}` - User's message
- `{{to_email}}` - Your email (kirubel1496@gmail.com)

### Newsletter Subscription Variables
The newsletter form sends these variables:
- `{{subscriber_email}}` - Subscriber's email address
- `{{subscription_date}}` - Date of subscription
- `{{subscription_time}}` - Time of subscription
- `{{from_name}}` - Default: "Newsletter Subscriber"
- `{{subject}}` - Email subject line
- `{{to_email}}` - Your email (kirubel1496@gmail.com)

## Troubleshooting
- Check browser console for errors
- Verify all IDs are correct
- Ensure Gmail account is properly connected
- Check EmailJS dashboard for failed sends
