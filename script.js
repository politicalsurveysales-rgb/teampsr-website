const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


// EmailJS contact form integration
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const EMAILJS_PUBLIC_KEY = "8aQWfmFLzHRZmcOyc";
  const EMAILJS_SERVICE_ID = "service_zrg6mca";
  const EMAILJS_TEMPLATE_ID = "template_f7v2wb7";
  const statusEl = document.getElementById("formStatus");
  const submitButton = document.getElementById("submitButton");

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.emailjs) {
      if (statusEl) statusEl.textContent = "The enquiry service is temporarily unavailable. Please email sales@teampsr.com directly.";
      return;
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
    if (statusEl) statusEl.textContent = "Sending your enquiry...";
    const formData = new FormData(contactForm);
    const params = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      organisation: formData.get("organisation") || "Not provided"
    };
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
      contactForm.reset();
      if (statusEl) statusEl.textContent = "Thank you. Your enquiry has been sent successfully to Team PSR.";
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      if (statusEl) statusEl.textContent = "Sorry, your enquiry could not be sent. Please email sales@teampsr.com directly.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send enquiry <span>↗</span>';
      }
    }
  });
}
