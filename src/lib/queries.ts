// Optimized query for blog listing - only fetch essential data
export const GET_POSTS = `
  query AllPosts {
    posts(first: 12, where: { status: PUBLISH }) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        seo {
          title
          metaDesc
        }
      }
    }
  }
`;

// Optimized query for individual post - fetch only what's needed for rendering
export const GET_POST_BY_SLUG = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage {
          sourceUrl
        }
        twitterTitle
        twitterDescription
        twitterImage {
          sourceUrl
        }
        canonical
        focuskw
        metaRobotsNoindex
        metaRobotsNofollow
      }
    }
  }
`;

// Lightweight query for generating static paths
export const GET_POST_SLUGS = `
  query PostSlugs {
    posts(first: 50, where: { status: PUBLISH }) {
      nodes { 
        slug 
      }
    }
  }
`;

// Optimized SEO query - only fetch SEO data
export const GET_POST_SEO_BY_SLUG = `
  query PostSeoBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage { sourceUrl }
        twitterTitle
        twitterDescription
        twitterImage { sourceUrl }
        canonical
      }
    }
  }
`;

// New: Lightweight query for blog listing with minimal data
export const GET_POSTS_MINIMAL = `
  query AllPostsMinimal {
    posts(first: 12, where: { status: PUBLISH }) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;