import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "6kqgsbl2",
  dataset: "production",
  apiVersion: "2022-05-06",
  token: process.env.NEXT_PUBLIC_SANITY_TOKENM || undefined,
  ignoreBrowserTokenWarning: true,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlForImg = (source) => builder.image(source);
