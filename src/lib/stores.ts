import { writable, type Readable, readable } from 'svelte/store';
import type { Tech } from './tech';
import rawJSONTech from '$lib/tech.json?raw';
import { browser } from '$app/environment';

export const tech: Readable<Tech[]> = techStore();

function techStore() {
	if (!browser) return readable([]);

	let rawLocalStorageTech = localStorage.getItem('TECH');
	if (!rawLocalStorageTech) {
		localStorage.setItem('TECH', rawJSONTech);
		rawLocalStorageTech = rawJSONTech;
	}

	const tech = JSON.parse(rawLocalStorageTech) as Tech[];

	const { subscribe } = writable(tech);

	return {
		subscribe
	};
}
