<script>
	import Main from "@/lib/components/Main.svelte";
	import Aside from "@/lib/components/Aside.svelte";
	import Categories from "@/lib/components/Categories.svelte";
	import FeaturedPost from "@/lib/components/FeaturedPost.svelte";
	import Newsletter from "@/lib/components/Newsletter.svelte";
	import { posts, filteredPosts } from "@/lib/store/posts";
	import { useFetchPosts } from "@/lib/helpers/useFetchPosts";
	const { fetchPosts, fetchRandomPost } = useFetchPosts();

	(async () => {
		posts.set(await fetchPosts());
		filteredPosts.set(await fetchPosts());
	})();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#snippet categories()}
	{#await fetchPosts()}
		<h2>fetching post categories</h2>
	{:then posts}
		<Categories {posts} />
	{:catch}
		<h2>could not fetch post categories</h2>
	{/await}
{/snippet}

{#snippet featuredPost()}
	{#await fetchRandomPost()}
		<h2>retrieving featured post</h2>
	{:then post}
		<FeaturedPost {post} />
	{:catch}
		<h2>could not retrieve featured post</h2>
	{/await}
{/snippet}

{#snippet newsletter()}
	<Newsletter />
{/snippet}

<div class="body-tings">
	<Main />
	<Aside {categories} {featuredPost} {newsletter} />
</div>

<style lang="scss">
	@use "../../lib/assets/sass/abstracts" as abstracts;

	:global(.body-tings) {
		// --left-background-colour: rgb(170, 0, 0);
		// --right-background-colour: rgb(218, 165, 32);
		--left-background-colour: rgb(23, 23, 23);
		--right-background-colour: rgb(240, 240, 240);
	}

	.body-tings {
		display: grid;
		grid-template-columns: 70% 1fr;
		background-image: linear-gradient(to right, var(--left-background-colour) 0%, var(--left-background-colour) 70%, var(--right-background-colour) 70%, var(--right-background-colour) 100%);

		@include abstracts.breakpoint(1023) {
			display: flex;
			flex-direction: column;
			background-image: linear-gradient(to bottom, var(--right-background-colour) 0%, var(--right-background-colour) 70%, var(--right-background-colour) 70%, var(--right-background-colour) 100%);
		}
		border-bottom: 5px solid rgb(240, 240, 240);
	}
</style>
