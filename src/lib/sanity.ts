import { createClient } from 'next-sanity'

const projectId = '1akz7vu2'
const dataset = 'production'
const apiVersion = '2024-03-18'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale data
}) 