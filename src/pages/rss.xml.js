import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const exps = await getCollection('expsItList');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: exps.map((exp) => ({
			...exp.data,
			link: `/blog/${exp.id}/`,
		})),
	});
}
