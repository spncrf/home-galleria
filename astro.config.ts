import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import DecapCMS from "@sickfob/astro-decap-cms";
import DecapConfig from "./decap-cms/config";

// https://astro.build/config
export default defineConfig({
  site: "https://odyssey-theme.sapling.supply/",
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  integrations: [sitemap(), mdx(), lit(), icon(), DecapCMS({
    config: DecapConfig
  })] // Add renderers to the config
});