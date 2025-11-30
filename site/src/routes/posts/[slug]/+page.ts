import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { useFetchPosts } from "@/lib/helpers/useFetchPosts";

const { fetchPost } = useFetchPosts();

export const load: PageLoad = async ({ params: { slug } }) => {
	const post = await fetchPost(slug);
	if (!post) error(404, "post is not found");
	return post;
};
