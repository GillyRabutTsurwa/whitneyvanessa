<script>
	let { categories, featuredPost, newsletter } = $props();
</script>

<aside>
	{@render categories()}
	{@render featuredPost()}
	{@render newsletter()}
	<div style="margin-top: 2rem;">
		<h4 style="text-align: center; font-size: 3rem; margin-bottom: 1.5rem;">Other Resources</h4>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequatur odio, sequi reprehenderit illum necessitatibus itaque deleniti nisi beatae. Tenetur doloremque quos rem molestias sapiente ex exercitationem et saepe nam fugit, similique natus tempore, voluptatibus nesciunt ut eligendi in blanditiis ea molestiae harum ullam maiores voluptas. Doloremque porro dolor ipsam delectus. Corrupti ipsam quasi consequatur reprehenderit odio, veritatis voluptatibus repellat a ut maxime nemo architecto ipsa ratione labore praesentium, temporibus consectetur est et sunt atque?</p>
		<p>Similique sed tenetur esse obcaecati sit. Excepturi, commodi animi? Mollitia deserunt placeat, quasi repudiandae unde ea delectus quam cumque voluptatem minima obcaecati quidem temporibus ducimus cupiditate dolor voluptate at nulla! Reprehenderit accusamus aliquam, dolore ipsa illum dolor nobis nesciunt nulla, quidem enim mollitia?</p>
	</div>
</aside>

<style lang="scss">
	aside {
		display: flex;
		flex-direction: column;
		margin: 4rem;
	}
</style>
