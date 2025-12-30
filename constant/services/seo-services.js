// seobannerData
export const seoservicesData = {
  title: "Search Engine Optimization Services",
  description:
    "Build your website’s authority with promising results following our proven SEO strategy.",
  breadcrumb: [
    { text: "Home", link: "/" },
    { text: "Services", link: "/service" },
    { text: "Search Engine Optimization" },
  ],
  button: [
    {
      text: "Request a Quote",
      link: "/contact",
    },
  ],
  form: {
    title: "Book a Free",
    titleHighlight: "Consultation",
    fields: [
      {
        type: "text",
        name: "name",
        placeholder: "Full Name",
        required: true,
      },
      {
        type: "email",
        name: "email",
        placeholder: "Email",
        required: true,
      },
      {
        type: "tel",
        name: "phone",
        placeholder: "Number",
        required: true,
      },
      {
        type: "textarea",
        name: "description",
        placeholder: "Describe Your Project Need.",
        required: true,
        rows: 4,
      },
    ],
    privacyText: "By submitting this form, you agree to our",
    privacyLink: "/privacy-policy",
    privacyLinkText: "Privacy Policy",
    submitButtonText: "Get In Touch",
  },
  featured: {
    title: "Featured In",
    logos: [
      {
        src: "/images/clients/web-client/inc-logo.webp",
        alt: "digitalmindson",
        width: 94,
        height: 34,
      },
      {
        src: "/images/clients/web-client/forbes-logo.webp",
        alt: "digitalmindson",
        width: 114,
        height: 34,
      },
      {
        src: "/images/clients/web-client/yec-logo.webp",
        alt: "digitalmindson",
        width: 64,
        height: 34,
      },
      {
        src: "/images/clients/web-client/entrepreneur-logo.webp",
        alt: "digitalmindson",
        width: 180,
        height: 34,
      },
      {
        src: "/images/clients/web-client/yahoo-logo.webp",
        alt: "digitalmindson",
        width: 115,
        height: 34,
      },
      {
        src: "/images/clients/web-client/cms-logo.webp",
        alt: "digitalmindson",
        width: 157,
        height: 31,
      },
    ],
  },
};