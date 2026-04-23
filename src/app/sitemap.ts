import type { MetadataRoute } from "next";
import { myBio } from "../data/bio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: myBio.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
