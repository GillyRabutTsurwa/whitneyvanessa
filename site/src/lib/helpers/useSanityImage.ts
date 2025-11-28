// NOTE: in the src folder, this file is properly loaded
// hors du fichier, ca marche pas
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity.client";
// import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const useSanityImage = () => {
	const builder = createImageUrlBuilder(client);
	const urlFor = (source: string) => {
		return builder.image(source);
	};
	return {
		urlFor: urlFor
	};
};
