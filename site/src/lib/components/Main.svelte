<script>
	import PostList from "./PostList.svelte";
	import Pagination from "./Pagination.svelte";
	import { useFetchPosts } from "../helpers/useFetchPosts";

	// import { posts } from "../store/posts";

	const { fetchPosts } = useFetchPosts();
	const post_promesse = fetchPosts();

	let currentPage = $state(1);
	let postsPerPage = $state(8);

	let indexOfLastPost = $derived(currentPage * postsPerPage);
	let indexOfFirstPost = $derived(indexOfLastPost - postsPerPage);
	// let currentPosts = $derived($posts.slice(indexOfFirstPost, indexOfLastPost));
</script>

<main>
	{#await post_promesse}
		<h2>Fetching posts...</h2>
	{:then posts}
		<PostList {posts} />
	{:catch}
		<h4>Trouble retrieving posts</h4>
	{/await}
</main>
