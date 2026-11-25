# Team PSR website (multi-page)

Static website for GitHub Pages. Existing logo, visual style and domain CNAME are retained.

## Pages
- `index.html` — homepage
- `about.html` — about Team PSR and its operating structure
- `services.html` — research services
- `data-solutions.html` — data solutions and permission safeguards
- `contact.html` — enquiry form and contact details
- `privacy-policy.html` — public privacy notice
- `thank-you.html` — form return page

## Publish on GitHub Pages
1. Unzip this package.
2. In the existing `teampsr-website` repository, upload/replace the files in the repository root and the `assets` folder. Keep the `CNAME` file.
3. Commit the changes to the `main` branch. GitHub Pages should redeploy automatically.
4. Check `https://www.teampsr.com/` and `https://www.teampsr.com/privacy-policy.html`.

## Contact form setup — important
The form uses FormSubmit and sends to `sales@teampsr.com`. FormSubmit requires a one-time activation: after the first test submission, open the activation email sent to `sales@teampsr.com` and confirm it. Check Spam/Junk. Until activated, the form will not deliver messages. After activation, test again and confirm receipt. FormSubmit is a third-party service; its availability and processing are governed by its own terms and privacy notice.

If FormSubmit is not acceptable or activation mail does not arrive, replace it with another form backend before advertising the form as operational. Do not claim the form works until a real test email is received.

## Email / DNS
Do not alter Zoho MX, SPF, DKIM or other mail DNS records when publishing website changes. The `CNAME` file should remain `www.teampsr.com`.

## Privacy notice review
The privacy notice is a careful draft based on the collection process described by Team PSR. Before treating it as final, review it against actual collection scripts, client contracts, retention/security practices, participant rights handling and applicable Indian law. It does not replace project-specific notices, consents or client permissions.
