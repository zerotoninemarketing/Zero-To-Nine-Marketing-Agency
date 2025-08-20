export const GET_POSTS = `
  query AllPosts {
    posts {
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
          opengraphTitle
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

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

export const GET_POST_SLUGS = `
  query PostSlugs {
    posts(first: 50, where: { status: PUBLISH }) {
      nodes { slug }
    }
  }
`;

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