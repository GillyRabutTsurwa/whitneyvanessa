<script>
	import img from "@/lib/assets/img/logo.svg";
	let { size = 8 } = $props();
</script>

<figure style:width={`${size}rem`} style:height={`${size}rem`}>
	<a href="/" aria-label="go-home">
		<img src={img} alt="logo" />
	</a>
</figure>

<style lang="scss">
	figure {
		display: inline-block;
		// width: 8rem;
		// height: 8rem;
		z-index: 1000;

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
