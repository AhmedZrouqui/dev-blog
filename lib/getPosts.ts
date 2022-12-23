import React from "react";
import { contentful } from "./contentful";

export async function _getAllPosts() {
  const items = contentful
    .getEntries({
      content_type: "blog",
    })
    .then((response) => response.items);

  return items;
}

export async function getPostsCount() {
  const query = `
  query {
    blogCollection {
      total
    }
  }
  `;
}

export async function getBySlug(slug: string) {
  const post = contentful
    .getEntries({
      content_type: "blog",
      "fields.slug[in]": slug,
    })
    .then((response) => response.items);

  return post;
}
