import { SOCIAL_LINKS, STATIC_SLUG } from "./consts";
import { nav } from "./nav";

export const footerSocials = [
  {
    name: "Instagram",
    url: SOCIAL_LINKS.instagram,
    icon: "mdi:instagram",
  },
  {
    name: "Facebook",
    url: SOCIAL_LINKS.facebook,
    icon: "mdi:facebook",
  },
  {
    name: "Email",
    url: SOCIAL_LINKS.email,
    icon: "mdi:email",
  },
];

export const footerLists = [
  {
    title: "Home Galleria",
    items: [
      {
        title: "About",
        slug: STATIC_SLUG.about,
      },
      {
        title: "Contact",
        slug: STATIC_SLUG.contact,
      },
    ],
  },
  {
    title: "Showcase",
    items: nav.filter(navItem => navItem.slug.includes("showcase")),
  },
];
