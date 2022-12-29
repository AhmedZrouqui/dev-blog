import React from 'react';
import PostType from '../interfaces/post';
import { _getAllPosts } from '../lib/getPosts';

const BASEURL = 'https://az-devblog.com';

function generateSiteMap(paths: any) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!--We manually set the two URLs we know already-->
    <url>
        <loc>${BASEURL}</loc>
    </url>
    ${paths
        .map((slug: string) => {
            return `
        <url>
            <loc>${`${BASEURL}/posts/${slug}`}</loc>
        </url>
    `;
        })
        .join('')}
    </urlset>
`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
    const posts = await _getAllPosts();
    const paths = posts.map((post) => {
        return {
            params: {
            slug: (post as PostType).fields.slug,
            },
        };
    })
    const sitemap = generateSiteMap(paths);
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
