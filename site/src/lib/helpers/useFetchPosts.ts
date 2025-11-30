import groq from "groq";
import { client } from "../../sanity.client";

export const useFetchPosts = () => {
	async function fetchPosts() {
		const query = groq`*[_type == "post"] {
			_id,
			title,
			slug,
			author->,
			postGenre,
			categories,
			thumbnail,
			mainImage,
			publishedAt,
			_updatedAt,
			// "slug": slug.current,
			excerpt,
			body,
			colourPrimary,
            colourSecondary,
			_type
    	}`;
		const posts = await client.fetch(query);
		return posts;
	}

	async function filterPosts(category: string) {
		const posts = await fetchPosts();
		return posts.filter((currentPost: object) => currentPost.categories.includes(category));
	}

	async function fetchPost(url: string) {
		const query = groq`*[_type == "post" && slug.current == "${url}"][0] {
        _id,
        title,
        slug,
        categories,
        author->,
        postGenre,
        thumbnail,
        mainImage,
        publishedAt,
        _updatedAt,
        // "slug": slug.current,
        excerpt,
        body,
        colourPrimary,
            colourSecondary,
        _type
    }`;
		const post = await client.fetch(query);
		return post;
	}

	async function fetchRandomPost() {
		const posts = await fetchPosts();
		return posts[Math.floor(Math.random() * posts.length)];
	}

	return {
		fetchPosts: fetchPosts,
		fetchPost: fetchPost,
		filterPosts: filterPosts,
		fetchRandomPost: fetchRandomPost
	};
};
