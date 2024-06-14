import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "y8gn2piz",
  dataset: "production",

  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  apiVersion: "2022-08-12",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlForImg = (source) => builder.image(source);
