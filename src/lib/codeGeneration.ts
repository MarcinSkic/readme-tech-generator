import type { TechInList } from './tech';

const defaultSize_px = 26;
const header = `---

### Used technologies

`;

export function getCode(techList: TechInList[]) {
	return techList
		.filter((t) => t.selected)
		.reduce((text, tech) => {
			const width = defaultSize_px * (tech.dimensions?.widthRatio ?? 1);
			const height = defaultSize_px * (tech.dimensions?.heightRatio ?? 1);
			let picture = '';

			if (typeof tech.image === 'string') {
				picture = `<img align="left" width="${width}" height="${height}" alt="${tech.name}" src="${tech.image}" style="padding: 0 20px 16px 0">`;
			} else {
				picture = `<picture align="left" style="padding: 0 20px 16px 0"><source media="(prefers-color-scheme: light)" srcset="${tech.image.dark}" /><img align="left" width="${width}" height="${height}" alt="${tech.name}" src="${tech.image.light}" /></picture>`;
			}

			return (text += `[${picture}](${tech.webLink})\n`);
		}, header);
}
