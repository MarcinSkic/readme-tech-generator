import type { TechInList } from './tech';

export function getCode(selectedTechList: TechInList[], iconSize: number, header: string) {
	return selectedTechList.reduce((text, tech) => {
		const width = iconSize * (tech.dimensions?.widthRatio ?? 1);
		const height = iconSize * (tech.dimensions?.heightRatio ?? 1);
		let picture = '';

		let alignment = tech.lastInGroup ? '' : ' align="left"';
		let lineSpacing = tech.lastInGroup ? '\n\n' : '\n';

		if (typeof tech.image === 'string') {
			picture = `<img${alignment} width="${width}" height="${height}" alt="${tech.name}" src="${tech.image}" style="padding: 0 20px 16px 0">`;
		} else {
			picture = `<picture><source media="(prefers-color-scheme: light)" srcset="${tech.image.dark}" /><img${alignment} width="${width}" height="${height}" alt="${tech.name}" src="${tech.image.light}" style="padding: 0 20px 16px 0"/></picture>`;
		}

		return (text += `[${picture}](${tech.webLink} "${tech.name}")${lineSpacing}`);
	}, header+(header.length ? "\n\n" : ""));
}
