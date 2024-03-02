import type { TechInList } from './tech';

const WIDTH_PER_ICON_MULTIPLIER = 0.3;
const WIDTH_BASE_MULTIPLIER = 0.6;

function generateBadge(text: string, iconSize: number) {
	return `<img src="https://img.shields.io/badge/${encodeURIComponent(text)}-%232378ab" width="${WIDTH_PER_ICON_MULTIPLIER*text.length*iconSize+WIDTH_BASE_MULTIPLIER*iconSize}" height="${iconSize}" alt="${text}" align="left" style="padding: 0 20px 16px 0">\n\n`
}

export function getCode(selectedTechList: TechInList[], iconSize: number, header: string, generateBadges: boolean) {
	let nextBadgeNumber = 1;
	let result = header+(header.length ? "\n\n" : "");
	for (let i=0; i<selectedTechList.length; i++) {
		let tech = selectedTechList[i];
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

		let badgeOrNothing="";
		if (generateBadges && (i==0 || selectedTechList[i-1].lastInGroup)) {
			badgeOrNothing = generateBadge("badge"+nextBadgeNumber, iconSize);
			nextBadgeNumber++;
		}

		result += `${badgeOrNothing}[${picture}](${tech.webLink} "${tech.name}")${lineSpacing}`;
	}
	return result;
}
