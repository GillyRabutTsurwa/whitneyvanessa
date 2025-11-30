<script lang="ts">
	import { posts, filteredPosts } from "../store/posts";
	let { posts: posts_prop } = $props();

	const getNumOfPostsByCategory = (category: any): number => {
		return posts_prop.filter((currentPost: any) => currentPost.categories.includes(category)).length;
	};

	const populatePosts = () => {
		posts.set(posts_prop);
		filteredPosts.set(posts_prop);
	};

	let categories = $derived(posts_prop.map((current_post: any) => current_post.categories));
	let categories_list = $derived([...new Set(categories.flat())].filter((currentValue) => Boolean(currentValue)));
	let categories_ui = $derived(categories_list.filter((current_category) => getNumOfPostsByCategory(current_category) >= 1));
</script>

<div class="category">
	<h4 class="category__title">Top Categories</h4>
	<ul class="category__list">
		{#each categories_ui as current_category (current_category)}
			<li>
				<input type="checkbox" value={current_category} />
				<label for={current_category}>
					<span>{current_category}</span>
					<span>{getNumOfPostsByCategory(current_category)}</span>
				</label>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use "../assets/sass/abstracts/" as abstracts;

	.category {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin: 4rem 0;
		width: 100%;

		&__title {
			align-self: center;
		}

		&__list {
			list-style-type: none;
			width: 70%;
			margin-top: 1.5rem;

			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 2rem;

				input[type="checkbox"] {
					display: none;

					&:checked ~ label {
						background-color: #fefefe;
						color: rgb(23, 23, 23);
						border: 1px solid rgb(23, 23, 23);
					}
				}

				label {
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					cursor: pointer;
					background-color: rgb(23, 23, 23);
					color: #fefefe;
					padding: 1.5rem;
					border: 1px solid transparent;
					border-radius: 1rem;
					transition: all 0.25s ease-in;

					// @include breakpoint(767) {
					// 	padding: 1rem;
					// }

					span {
						font-size: 1.75rem;

						&:first-child {
							margin-right: 0.5rem;

							// @include breakpoint(767) {
							// 	margin-right: 0.75rem;
							// }
						}
					}
				}
			}
		}
	}
</style>
