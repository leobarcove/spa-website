# Deployment Guide for Serenity Spa Website

## Overview
This guide provides step-by-step instructions for deploying the Serenity Spa website to production.

## Pre-Deployment Checklist

- [x] All features implemented and tested locally
- [x] Build runs without errors (`npm run build`)
- [x] Environment variables documented
- [x] Email templates configured
- [ ] Domain name registered (serenityspa.my)
- [ ] Email service provider account created
- [ ] Analytics accounts verified

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering:
- Automatic SSL certificates
- Global CDN
- Automatic deployments from Git
- Built-in analytics
- Serverless functions support

#### Steps:

1. **Create Vercel Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Import Project**
   - Click "New Project"
   - Import Git repository
   - Select the spa-website repository

3. **Configure Environment Variables**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_SITE_URL=https://serenityspa.my
   
   # Add email service credentials when ready:
   SENDGRID_API_KEY=your_api_key
   SENDGRID_FROM_EMAIL=noreply@serenityspa.my
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Test deployment on provided URL

5. **Configure Custom Domain**
   - Go to Settings → Domains
   - Add `serenityspa.my` and `www.serenityspa.my`
   - Update DNS records at your domain registrar:
     ```
     A     @      76.76.21.21
     CNAME www    cname.vercel-dns.com
     ```

### Option 2: Netlify

#### Steps:

1. **Create Netlify Account**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"
   ```

3. **Deploy from Git**
   - New site from Git
   - Connect to GitHub
   - Configure build settings
   - Add environment variables
   - Deploy site

4. **Configure Domain**
   - Domain settings
   - Add custom domain
   - Update DNS records

### Option 3: AWS Amplify

#### Steps:

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   amplify add hosting
   ```

3. **Deploy**
   ```bash
   amplify publish
   ```

## Post-Deployment Tasks

### 1. SSL Certificate Verification
- [ ] Verify HTTPS is working
- [ ] Check for mixed content warnings
- [ ] Test SSL certificate grade at [SSL Labs](https://www.ssllabs.com/ssltest/)

### 2. Domain Configuration
- [ ] Verify both www and non-www versions work
- [ ] Set up proper redirects (www → non-www or vice versa)
- [ ] Update sitemap with production URL
- [ ] Submit sitemap to Google Search Console

### 3. Email Service Integration
- [ ] Add production email API keys
- [ ] Update email sender addresses
- [ ] Test booking confirmation emails
- [ ] Verify SPF/DKIM records

### 4. Performance Testing
- [ ] Run PageSpeed Insights
- [ ] Test Core Web Vitals
- [ ] Verify image optimization
- [ ] Check mobile performance

### 5. SEO Verification
- [ ] Submit to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Check meta tags on all pages
- [ ] Test Open Graph preview

### 6. Analytics Setup
- [ ] Verify Google Analytics is tracking
- [ ] Set up conversion goals
- [ ] Configure event tracking
- [ ] Create custom dashboards

### 7. Monitoring Setup
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Set up performance monitoring
- [ ] Create alerting rules

## Environment Variables Reference

### Required for Production
```env
# Public Variables (exposed to client)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://serenityspa.my

# Server Variables (private)
# Email Service (choose one)
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=noreply@serenityspa.my

# OR
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# OR
RESEND_API_KEY=your_resend_key
```

## Troubleshooting

### Build Failures
- Check Node.js version (requires 18.x or higher)
- Clear cache: `rm -rf .next node_modules`
- Reinstall dependencies: `npm install`
- Check for TypeScript errors: `npm run type-check`

### Domain Not Working
- DNS propagation can take up to 48 hours
- Verify DNS records with `dig` or `nslookup`
- Check domain registrar settings
- Ensure SSL certificate is issued

### Email Not Sending
- Verify API keys are correct
- Check email service dashboard for errors
- Test with email service's test mode first
- Verify sender domain is authenticated

### Performance Issues
- Enable caching headers (already configured in vercel.json)
- Optimize images further if needed
- Consider CDN for media files
- Review and optimize bundle size

## Rollback Strategy

If issues occur after deployment:

1. **Vercel**: Use instant rollback feature in dashboard
2. **Netlify**: Rollback to previous deploy from deploys page
3. **AWS**: Use Amplify console to revert to previous build

## Security Checklist

- [x] Security headers configured
- [x] No sensitive data in client code
- [ ] API routes have proper validation
- [ ] Rate limiting implemented for forms
- [ ] Regular dependency updates scheduled

## Maintenance

### Weekly
- Check analytics for anomalies
- Review error logs
- Test booking flow
- Update content as needed

### Monthly
- Update dependencies
- Review performance metrics
- Check for security updates
- Backup any user-generated content

### Quarterly
- Full site audit
- SEO review
- Performance optimization
- Security audit

## Support

For deployment issues:
1. Check deployment logs
2. Review error messages
3. Consult platform documentation
4. Contact platform support if needed

---

Last Updated: 2025-07-03
Ready for Production Deployment