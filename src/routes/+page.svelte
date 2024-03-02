<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { type TechInList } from '$lib/tech';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import TechCard from '$lib/components/ui/techCard/TechCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronUp } from 'lucide-svelte';
	import Fuse from 'fuse.js';
	import { Separator } from '$lib/components/ui/separator';
	import CodeBlock from '$lib/components/ui/codeBlock/CodeBlock.svelte';
	import { getCode } from '$lib/codeGeneration';
	import { tech as importedTech } from '$lib/stores';
	import { Trash2 } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Switch } from '$lib/components/ui/switch';

	function handleTechSelection(tech: TechInList) {
		tech.selected = !tech.selected;

		if (tech.selected) {
			tech.lastInGroup = false;
			selectedTechList = [...selectedTechList, tech];
		} else {
			selectedTechList = selectedTechList.filter((t) => t.name !== tech.name);
		}

		techList = techList;
	}

	function welpFunction() {
		selectedTechList = selectedTechList; // ¯\_(ツ)_/¯
	}

	let techList: TechInList[] = [...$importedTech].sort((a, b) => {
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

	let selectedTechList: TechInList[] = [];
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

	let iconSize = 26;
	let searchQuery = '';
	let generateBadges = false;
	let headerText = `---

### Used technologies`;
	let selectedOpen = false;
	$: code = getCode(selectedTechList, iconSize, headerText, generateBadges);
</script>

<CodeBlock {code} />
<Separator />
<Collapsible.Root bind:open={selectedOpen} class="mx-4 mt-2 space-y-4">
	<div class="ml-4 flex items-center gap-2">
		<Label for="iconSizeInput">Icon size</Label>
		<Input
			class="w-28 text-xl"
			id="iconSizeInput"
			bind:value={iconSize}
			placeholder="Icon size"
			type="number"
		/>
	</div>
	<div class="ml-4 flex items-center gap-2">
		<Label for="toggleBadgesSwitch">Display badges</Label>
		<Switch id="toggleBadgesSwitch" bind:checked={generateBadges} />
	</div>
	<div class="ml-4">
		<Label for="headerTextInput">Header</Label>
		<Textarea
			class="mt-2 h-20"
			id="headerTextInput"
			bind:value={headerText}
			placeholder="Header text"
		/>
	</div>
	<div class="flex gap-4">
		<Collapsible.Trigger>
			<Button variant="ghost" class="gap-1">
				<h4 class="text-base font-semibold">Selected</h4>
				<div class:selected-open={selectedOpen}>
					<ChevronUp />
				</div>
			</Button>
		</Collapsible.Trigger>
		<Button
			on:click={() => {
				selectedTechList.forEach((e) => (e.selected = false));
				selectedTechList = [];
				availableTechnologies = availableTechnologies; // ¯\_(ツ)_/¯
			}}
			variant="destructive"
			size="icon"><Trash2 /></Button
		>
	</div>
	<Collapsible.Content transitionConfig={{ duration: 500 }}>
		<div
			role="grid"
			class="grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
		>
			{#each selectedTechList as tech}
				<TechCard {tech} {handleTechSelection} {welpFunction} />
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
			<TechCard {tech} {handleTechSelection} {welpFunction} />
		{/each}
	</div>
</div>

<style lang="postcss">
	.selected-open {
		@apply rotate-180;
	}
</style>
