export interface Tech {
	name: string;
	image: string | { light: string; dark: string };
	webLink: string;
	dimensions?: {
		widthRatio: number;
		heightRatio: number;
	};
	tags?: string[];
}

export type TechInList = Tech & {
	selected?: boolean;
	lastInGroup?: boolean;
};
