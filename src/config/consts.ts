export const STATIC_SLUG = {
  home: "/",
  about: "/about",
  contact: "/contact",
  contact_success: "/contact/success",
  theme_rooms: "/showcase/theme_rooms",
  clocks: "/showcase/clocks",
  murals: "/showcase/murals",
  artwork: "/artwork", // sub pages are dynamic
} as const;

export const SITE_SETTINGS = {
  title: ``,
  description: ``,
  theme: "earth", // check theme.css for valid data-theme attributes
  name: `Home Galleria`, // The short name of the business or brand name. Used for things like the copyright in the footer.
  brandName: `Home Galleria`,
  faviconImage: `/to-do`,
  email: "shanna@homegalleria.com", // update with real email
} as const;

// TODO: Expose this in CMS
export const SOCIAL_LINKS = {
  instagram: "",
  facebook: "",
  email: `mailto:${SITE_SETTINGS.email}`,
} as const;
