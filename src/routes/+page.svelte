<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { tech as importedTech, type Tech, type TechInList } from '$lib/tech';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import TechCard from '$lib/components/ui/techCard/TechCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronUp } from 'lucide-svelte';
	import Fuse from 'fuse.js';
	import { Separator } from '$lib/components/ui/separator';
	import CodeBlock from '$lib/components/ui/codeBlock/CodeBlock.svelte';
	import { getCode } from '$lib/codeGeneration';

	const techList: TechInList[] = importedTech.toSorted((a, b) => {
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

	let availableTechnologies = techList.filter((t) => !t.selected);
	$: {
		availableTechnologies = techList.filter((t) => !t.selected);
		if (searchQuery !== '') {
			const fuse = new Fuse(availableTechnologies, {
				keys: [
					{
						name: 'name',
						weight: 3
					},
					{
						name: 'tags',
						weight: 1
					}
				],
				threshold: 0.4
			});

			availableTechnologies = fuse.search(searchQuery).map((i) => i.item);
		}
	}

	let searchQuery = '';
	let selectedOpen = false;
	$: code = getCode(techList);
</script>

<CodeBlock {code} />
<Separator />
<Collapsible.Root bind:open={selectedOpen} class="mx-4 mt-2 space-y-4">
	<Collapsible.Trigger>
		<Button variant="ghost" class="gap-1">
			<h4 class="text-base font-semibold">Selected</h4>
			<div class:selected-open={selectedOpen}>
				<ChevronUp />
			</div>
		</Button>
	</Collapsible.Trigger>
	<Collapsible.Content transitionConfig={{ duration: 500 }}>
		<div
			role="grid"
			class="grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
		>
			{#each techList.filter((t) => t.selected) as tech}
				<TechCard bind:tech />
			{/each}
		</div>
	</Collapsible.Content>
</Collapsible.Root>
<div class="mx-4 pb-4">
	<h4 class="p-4 text-base font-semibold">Technologies</h4>
	<Input bind:value={searchQuery} placeholder="Search" class="mb-4 h-fit text-2xl" />
	<div
		role="grid"
		class="grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
	>
		{#each availableTechnologies as tech}
			<TechCard bind:tech />
		{/each}
	</div>
</div>

<style lang="postcss">
	.selected-open {
		@apply rotate-180;
	}
</style>
