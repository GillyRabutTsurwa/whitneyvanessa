<script lang="ts">
	import Button from "./Button.svelte";
	import { onMount } from "svelte";
	import { useFormatDate } from "@/lib/helpers/useFormatDate";
	import { useSanityImage } from "@/lib/helpers/useSanityImage";

	const { formatDate } = useFormatDate();
	const { urlFor } = useSanityImage();

	let { posts } = $props();
	let snippetLength = 300;

	function getSnippet(text: string) {
		return text.slice(0, snippetLength) + "...";
	}
</script>

<div>
	<h2 style="text-align: center; font-size: 6rem; margin: 3.5rem 0; color: #fefefe">Posts</h2>
	<section class="picture-category">
		{#each posts as currentPost, index}
			<div class="picture-category__caption blog">
				<div class="picture-category__picture">
					<img src={urlFor(currentPost.mainImage)} alt="" />
				</div>

				<h3 class="picture-category__caption--title">{currentPost.title}</h3>
				<h5 class="picture-category__caption--published" style="font-weight: 500;">{formatDate(currentPost.publishedAt)}</h5>
				<div class="picture-category__caption--paragraph">
					<p>{getSnippet(currentPost.excerpt)}</p>
				</div>
				<Button isLink path={`/posts/${currentPost.slug.current}`} colourPrimary="#FEFEFE" colourSecondary="#171717" />
			</div>
		{/each}
	</section>
</div>

<style lang="scss">
	@use "../assets/sass/abstracts" as abstracts;

	// NEW
	.picture-category {
		margin: 3rem 0;
		padding: 5rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8rem 7rem;

		@include abstracts.breakpoint(1023) {
			grid-template-columns: 1fr;
			width: 80%;
			margin: 0 auto;
		}

		&.second {
			grid-template-rows: 54rem -webkit-min-content;
			grid-template-rows: 54rem min-content;
		}

		&__picture {
			// WORKS....
			width: 100%;

			img {
				// LIKE GOD!
				width: 100%;
				height: 100%;
				-o-object-fit: cover;
				object-fit: cover;
			}
		}
		&__category {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 4rem;
			width: 100%; //TESTING

			&--title {
				align-self: center;
			}

			&--list {
				list-style-type: none;
				width: 70%;
				margin-top: 1.5rem;

				li {
					margin-bottom: 2rem;
					background-color: abstracts.$colour-primary;
					color: abstracts.$whitish;
					font-weight: bold;
					padding: 1.1rem 1.5rem;
					border-radius: 1rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					cursor: pointer;
				}
			}
		}

		&__caption {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 35rem repeat(4, -webkit-min-content);
			grid-template-rows: 35rem repeat(4, min-content);
			-moz-row-gap: 1.25rem;
			row-gap: 1.25rem;
			justify-items: start;
			color: #fefefe;

			@include abstracts.breakpoint(480) {
				grid-template-rows: 20rem repeat(4, -webkit-min-content);
				grid-template-rows: 20rem repeat(4, min-content);
			}

			&--paragraph {
				margin-bottom: 0;
				font-weight: 300;
				line-height: 1.5;
				font-size: 1.7rem;
			}
		}

		&__popular-post {
			display: grid;
			grid-template-rows: -webkit-min-content 20rem -webkit-min-content;
			grid-template-rows: min-content 20rem min-content;

			&--thumbnail {
				-o-object-fit: cover;
				object-fit: cover;

				img {
					width: 100%;
					height: 100%;
				}
			}

			&--paragraph {
				font-size: 1.4rem;
			}
		}
	}
	h4 {
		position: relative;
		left: 80%;
	}
</style>
