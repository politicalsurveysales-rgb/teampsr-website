# Team PSR website

A responsive static website for Team PSR, built with HTML, CSS and JavaScript.

## Files
- `index.html` — website content
- `styles.css` — layout and responsive design
- `script.js` — mobile navigation and email enquiry form
- `CNAME` — custom domain for GitHub Pages
- `assets/favicon.svg` — browser tab icon

## Publish free with GitHub Pages
1. Create/sign in to a GitHub account at https://github.com/signup
2. Create a new **public** repository named `teampsr-website`.
3. Upload all files and the `assets` folder from this ZIP. Keep the folder structure.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. In the Custom domain field, enter `www.teampsr.com` and save. The included `CNAME` file contains the same domain.
7. In Zoho domain DNS management, add the GitHub Pages DNS records described at:
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
8. Enable **Enforce HTTPS** in GitHub Pages after DNS verification.

## Important: keep Zoho Mail working
Do not delete or replace existing MX, SPF, DKIM or DMARC records. Add only the website records GitHub instructs you to add. If you are unsure, take a screenshot/export of the current DNS records before editing.

## Contact form
The enquiry form opens the visitor's default email application and prepares a message addressed to `sales@teampsr.com`. It does not store submissions or send mail from the website server. To receive enquiries without requiring the visitor's email app, connect a form service later.

## Before publishing
- Confirm that `sales@teampsr.com` is an active mailbox or alias in Zoho Mail.
- Replace the text logo with your official Team PSR logo if desired.
- Add verified phone number, office address, client references or project statistics only when you want them public.


## Contact form email delivery (FormSubmit)
The contact form is configured to send submissions to:
- politicalsurveysales@gmail.com (primary recipient)
- sales@teampsr.com (CC recipient)

**One-time activation required:** After the website is published, submit a test enquiry. FormSubmit will send an activation/confirmation email to `politicalsurveysales@gmail.com`. Open that email and approve the form. After activation, submissions will be delivered to both addresses. Check Spam if the activation email is not in Inbox. FormSubmit is a third-party service; its availability and limits are subject to its terms.
