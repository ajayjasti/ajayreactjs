import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import blogPosts from '../data/blog_post_example.xml';


export default function getBlogPosts() {
    return new Promise((resolve, reject) => {
        axios.get(blogPosts, {
            "Content-Type": "application/xml; charset=utf-8"
        }).then(({ data }) => {
            const result = new XMLParser().parse(data);
            const posts = result?.blog?.post;
            resolve(posts);
        }).catch(reject);
    });
}

export function getBlogPost(id) {
    return new Promise((resolve, reject) => {
        getBlogPosts().then(posts => {
            resolve(posts[id - 1]);
        }).catch(reject);
    });
}