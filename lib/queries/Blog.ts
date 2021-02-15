import { gql } from '@apollo/client';

export const BLOG_POST_SLUGS = gql`
  query {
    blogPosts(sort: "publishedAt:desc") {
      id
      slug
    }
  }
`;

export const BLOG_POSTS = gql`
  query {
    latestBlogPost: blogPosts(sort: "publishedAt:desc", limit: 1) {
      image {
        url
        alternativeText
      }
      title
      subtitle
      slug
      blog_tags {
        name
        slug
      }
    }

    blogPosts(sort: "publishedAt:desc", start: 1) {
      image {
        url
        alternativeText
      }
      title
      subtitle
      slug
      blog_tags {
        name
        slug
      }
    }

    footer {
      byline
    }
  }
`;

export const FIND_BLOG_POST = gql`
  query BlogPost($slug: String) {
    blogPost: blogPosts(limit: 1, where: { slug: $slug }) {
      image {
        url
        alternativeText
      }
      title
      subtitle
      content
      slug
      blog_tags {
        name
        slug
      }
    }

    footer {
      byline
    }
  }
`;
