# Domain Setup Guide for sharonspa.my

## Prerequisites
- [ ] Domain registered (sharonspa.my)
- [ ] Access to domain registrar's DNS management panel
- [ ] Vercel/Netlify account created
- [ ] Project deployed to hosting provider

## Step-by-Step Domain Configuration

### Step 1: Deploy to Hosting Provider

#### Option A: Vercel (Recommended)
1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy the project:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to existing project or create new
   - Confirm project settings
   - Deploy to production

4. Note your deployment URL (e.g., `spa-website-abc123.vercel.app`)

#### Option B: Netlify
1. Push code to GitHub
2. Log in to Netlify
3. Click "New site from Git"
4. Connect GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy site

### Step 2: Add Custom Domain in Hosting Provider

#### Vercel:
1. Go to your project dashboard
2. Navigate to Settings → Domains
3. Add domain: `sharonspa.my`
4. Add domain: `www.sharonspa.my`
5. Copy the DNS records provided

#### Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Enter `sharonspa.my`
4. Copy DNS configuration

### Step 3: Configure DNS Records

Log into your domain registrar (e.g., GoDaddy, Namecheap, etc.) and add:

#### For Vercel:
```
Type    Name    Value                   TTL
A       @       76.76.21.21            Auto
CNAME   www     cname.vercel-dns.com   Auto
```

#### For Netlify:
```
Type    Name    Value                          TTL
A       @       75.2.60.5                     Auto
CNAME   www     [your-site].netlify.app       Auto
```

#### Alternative: Using Nameservers
Instead of individual records, you can use Vercel/Netlify nameservers:

**Vercel Nameservers:**
- ns1.vercel-dns.com
- ns2.vercel-dns.com

**Netlify Nameservers:**
- dns1.p05.nsone.net
- dns2.p05.nsone.net
- dns3.p05.nsone.net
- dns4.p05.nsone.net

### Step 4: Wait for DNS Propagation
- DNS changes can take 5 minutes to 48 hours to propagate
- Check propagation status: https://www.whatsmydns.net/
- Enter your domain and check A/CNAME records

### Step 5: Verify SSL Certificate
Once DNS propagates:
1. Visit https://sharonspa.my
2. Check for the padlock icon in the browser
3. Verify certificate details
4. Test both www and non-www versions

### Step 6: Configure Redirects

Ensure proper redirects are working:
- `http://sharonspa.my` → `https://sharonspa.my`
- `http://www.sharonspa.my` → `https://sharonspa.my`
- `https://www.sharonspa.my` → `https://sharonspa.my`

### Step 7: Update Environment Variables

In your hosting provider dashboard, update:
```
NEXT_PUBLIC_SITE_URL=https://sharonspa.my
```

### Step 8: Post-Deployment Testing

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images load properly
- [ ] Videos play correctly
- [ ] Booking form submits successfully
- [ ] Contact form works
- [ ] Mobile responsive design functions
- [ ] PWA installation prompt appears
- [ ] Analytics tracking active

### Step 9: Submit to Search Engines

1. **Google Search Console**:
   - Go to https://search.google.com/search-console
   - Add property: `sharonspa.my`
   - Verify ownership (HTML tag or DNS)
   - Submit sitemap: `https://sharonspa.my/sitemap.xml`

2. **Bing Webmaster Tools**:
   - Go to https://www.bing.com/webmasters
   - Add site
   - Verify ownership
   - Submit sitemap

### Step 10: Configure Email Service

Choose and configure email provider:

1. **SendGrid**:
   - Create account at sendgrid.com
   - Verify sender domain
   - Generate API key
   - Add to environment variables

2. **Configure SPF/DKIM**:
   Add to DNS records:
   ```
   TXT  @  v=spf1 include:sendgrid.net ~all
   ```

## Troubleshooting

### Domain Not Resolving
- Check DNS propagation status
- Verify DNS records are correct
- Clear browser cache
- Try different DNS servers (8.8.8.8)

### SSL Certificate Issues
- Ensure DNS has fully propagated
- Check if forcing HTTPS in hosting settings
- Re-provision certificate in hosting dashboard

### Email Not Sending
- Verify API keys are correct
- Check sender domain verification
- Review email service logs
- Test with different recipient addresses

## Monitoring

After launch, set up monitoring:

1. **Uptime Monitoring**:
   - UptimeRobot: https://uptimerobot.com
   - Pingdom: https://www.pingdom.com

2. **Error Tracking**:
   - Sentry: https://sentry.io

3. **Analytics**:
   - Google Analytics dashboard
   - Set up custom alerts

## Maintenance

Regular maintenance tasks:
- Weekly: Check analytics and errors
- Monthly: Update dependencies
- Quarterly: Security audit
- Yearly: SSL certificate renewal (auto with most providers)

---

## Quick Checklist

- [ ] Domain registered
- [ ] Site deployed to hosting
- [ ] Custom domain added in hosting
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] Redirects working
- [ ] Environment variables updated
- [ ] All features tested
- [ ] Search engines notified
- [ ] Email service configured
- [ ] Monitoring set up

---

Last Updated: 2025-07-03
For Support: Refer to hosting provider documentation