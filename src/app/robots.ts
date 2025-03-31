import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/thank-you",
    },
    sitemap: "https://www.ompdas.com/sitemap.xml",
  };
}
