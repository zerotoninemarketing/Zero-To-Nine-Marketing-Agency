import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "1akz7vu2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-18",
};

export const client = createClient(config); 