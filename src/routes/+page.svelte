<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { tech as importedTech, type Tech } from '$lib/tech';
	import * as Card from '$lib/components/ui/card';
	import TechCard from '$lib/components/ui/techCard/TechCard.svelte';

	const techList: (Tech & { selected?: boolean })[] = importedTech.toSorted((a, b) => {
		const aN = a.name.toUpperCase();
		const bN = b.name.toUpperCase();

		if (aN < bN) {
			return -1;
		} else if (aN > bN) {
			return 1;
		} else {
			return 0;
		}
	});

	let searchQuery = '';
</script>

<Input bind:value={searchQuery} placeholder="Search" class="h-fit text-2xl" />
<div
	role="grid"
	class="row- grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4"
>
	{#each techList.filter((t) => t.selected) as tech}
		<TechCard bind:tech />
	{/each}
</div>
<div
	role="grid"
	class="row- grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4"
>
	{#each techList.filter((t) => !t.selected) as tech}
		<TechCard bind:tech />
	{/each}
</div>
