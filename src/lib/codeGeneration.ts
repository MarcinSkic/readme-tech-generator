import type { TechInList } from './tech';

const WIDTH_PER_ICON_MULTIPLIER = 0.3;
const WIDTH_BASE_MULTIPLIER = 0.6;

function generateBadge(text: string, iconSize: number, generateTable: boolean = false) {
	return `<img src="https://img.shields.io/badge/${encodeURIComponent(text)}-%232378ab" width="${WIDTH_PER_ICON_MULTIPLIER * text.length * iconSize + WIDTH_BASE_MULTIPLIER * iconSize}" height="${iconSize}" alt="${text}" ${generateTable ? '' : 'align="left"'} style="padding: 0 20px 16px 0">\n\n`;
}

export function getCode(
	selectedTechList: TechInList[],
	iconSize: number,
	header: string,
	layoutFlags: string[]
) {
	const generateTable = layoutFlags.includes('table');
	const generateBadges = layoutFlags.includes('badges');

	let nextGroupNumber = 1;
	let result = header + (header.length ? '\n\n' : '');
	if (generateTable) {
		result += '<table>';
	}
	for (let i = 0; i < selectedTechList.length; i++) {
		const startsRow = i == 0 || selectedTechList[i - 1].lastInGroup;
		const endsRow = i == selectedTechList.length - 1 || selectedTechList[i].lastInGroup;

		const tech = selectedTechList[i];
		const width = iconSize * (tech.dimensions?.widthRatio ?? 1);
		const height = iconSize * (tech.dimensions?.heightRatio ?? 1);
		const alignment = endsRow && !generateTable ? '' : ' align="left"';
		const lineSpacing = tech.lastInGroup ? '\n\n' : '\n';

		let picture = '';
		if (typeof tech.image === 'string') {
			picture = `<img${alignment} width="${width}" height="${height}" alt="${tech.name}" src="${tech.image}" style="padding: 0 20px 16px 0">`;
		} else {
			picture = `<picture><source media="(prefers-color-scheme: light)" srcset="${tech.image.dark}" /><img${alignment} width="${width}" height="${height}" alt="${tech.name}" src="${tech.image.light}" style="padding: 0 20px 16px 0"/></picture>`;
		}

		if (startsRow) {
			if (generateTable) {
				let groupName = tech.nameOfStartedGroup ?? `row ${nextGroupNumber}`;
				if (generateBadges) {
					groupName = generateBadge(groupName, iconSize, true);
				}
				result += `<tr><td>${groupName}</td><td>\n\n`;
			} else if (generateBadges) {
				result += generateBadge('badge' + nextGroupNumber, iconSize);
			}
			nextGroupNumber++;
		}
		result += `[${picture}](${tech.webLink} "${tech.name}")${lineSpacing}`;
		if (endsRow && generateTable) {
			result += '</td></tr>';
		}
	}
	if (generateTable) {
		result += '</table>';
	}
	return result;
}
