// lib/sanityImage.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "1akz7vu2",
  dataset: "production",
  apiVersion: "2024-03-18",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source);
}
