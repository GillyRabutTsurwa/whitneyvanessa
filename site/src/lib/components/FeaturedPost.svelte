<script lang="ts">
	import Button from "./Button.svelte";
	import { useSanityImage } from "../helpers/useSanityImage";
	let { post } = $props();

	console.log(post);

	const { urlFor } = useSanityImage();

	let snippetLength = 300; //NOTE: me faut pas l'écrire ainsi $state car ce ne sera pas réactif

	function getSnippet(text: string) {
		return text.slice(0, snippetLength) + "...";
	}
</script>

<section>
	<h2 style="text-align: center;">Featured Post</h2>
	<figure>
		<img src={urlFor(post.mainImage)} alt="" />
	</figure>
	<h3>{post.title}</h3>
	<p>{getSnippet(post.excerpt)}</p>
	<Button isLink path={`/posts/${post.slug.current}`} colourPrimary="#171717" colourSecondary="#dedede" />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: start;
	}
	figure {
		width: 90%;
		height: 40rem;
		margin: 3rem auto;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			-o-object-fit: cover;
		}
	}
	p {
		margin-bottom: 4rem;
	}
</style>
