<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { type TechInList } from '$lib/tech';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import TechCard from '$lib/components/ui/techCard/TechCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronUp } from 'lucide-svelte';
	import { Table } from 'lucide-svelte';
	import { RectangleHorizontal } from 'lucide-svelte';
	import Fuse from 'fuse.js';
	import { Separator } from '$lib/components/ui/separator';
	import CodeBlock from '$lib/components/ui/codeBlock/CodeBlock.svelte';
	import { getCode } from '$lib/codeGeneration';
	import { tech as importedTech } from '$lib/stores';
	import { Trash2 } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import * as Tooltip from '$lib/components/ui/tooltip';

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
	let headerText = ` ---

### Used technologies`;
	let selectedOpen = false;

	let layoutFlags: string[] = [];

	$: code = getCode(selectedTechList, iconSize, headerText, layoutFlags);
</script>

<CodeBlock {code} />
<Separator />
<Collapsible.Root bind:open={selectedOpen} class="mx-4 mt-2 space-y-4">
	<div class="ml-4">
		<Label for="headerTextInput">Header</Label>
		<Textarea
			class="mt-2 h-20"
			id="headerTextInput"
			bind:value={headerText}
			placeholder="Header text"
		/>
	</div>

	<div class="flex items-center gap-4">
		<div class="ml-4 flex w-fit items-center">
			<Label class="mr-4">Layout</Label>
			<ToggleGroup.Root type="multiple" bind:value={layoutFlags}>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<ToggleGroup.Item value="badges"
							><RectangleHorizontal></RectangleHorizontal></ToggleGroup.Item
						>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Generate badges</p>
					</Tooltip.Content>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<ToggleGroup.Item value="table"><Table></Table></ToggleGroup.Item>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Generate as table</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</ToggleGroup.Root>
		</div>
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
	</div>

	<div class="flex gap-4">
		<Collapsible.Trigger>
			<Button variant="outline" class="gap-1">
				<h4 class="text-base font-semibold">Selected</h4>
				<div class:selected-open={selectedOpen}>
					<ChevronUp />
				</div>
			</Button>
		</Collapsible.Trigger>

		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button
					on:click={() => {
						selectedTechList.forEach((e) => (e.selected = false));
						selectedTechList = [];
						availableTechnologies = availableTechnologies; // ¯\_(ツ)_/¯
					}}
					variant="destructive"
					size="icon"><Trash2 /></Button
				>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Deselect all</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
	<Collapsible.Content transitionConfig={{ duration: 500 }}>
		<div
			role="grid"
			class="grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
		>
			<div class="col-span-full"></div>
			{#each selectedTechList as tech, i}
				{#if i == 0 || selectedTechList[i - 1].lastInGroup}
					<div class="col-span-full"></div>
					<Input
						class="col-span-full w-96 text-xl"
						id={'groupInput' + tech.name}
						bind:value={selectedTechList[i].nameOfStartedGroup}
						placeholder={`${selectedTechList[i].name}'s group`}
					/>
				{/if}
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
