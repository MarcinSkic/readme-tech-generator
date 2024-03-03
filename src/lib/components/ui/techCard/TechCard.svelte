<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { TechInList } from '$lib/tech';
	import { mode } from 'mode-watcher';
	import { Button } from '../button';
	import { ArrowRightToLine } from 'lucide-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';

	export let tech: TechInList;
	export let handleTechSelection: (tech: TechInList) => void;
	export let welpFunction: () => void;

	let img: HTMLImageElement;
	let height = 4;
	let width = 4;

	if (tech.dimensions) {
		height *= tech.dimensions.heightRatio;
		width *= tech.dimensions.widthRatio;
	}

	$: src =
		typeof tech.image === 'string'
			? tech.image
			: $mode === 'light'
				? tech.image.dark
				: tech.image.light;
</script>

<div
	tabindex="0"
	role="gridcell"
	on:click={() => {
		handleTechSelection(tech);
	}}
	on:keydown={(e) => {
		if (e.key === 'Enter') {
			handleTechSelection(tech);
		}
	}}
>
	<Card.Root class="cursor-pointer select-none transition-colors hover:border-primary">
		<Card.Header>
			<Card.Title>{tech.name}</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="flex items-end justify-between">
				<img
					{src}
					alt={tech.name}
					style:--width="{width}rem"
					style:--height="{height}rem"
					class="h-[--height] w-[--width] object-contain"
					bind:this={img}
				/>
				{#if tech.selected}
					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button
								variant="ghost"
								size="icon"
								class={tech.lastInGroup ? '' : 'text-muted' + ' hover:text-background'}
								on:click={(event) => {
									event.stopPropagation();
									welpFunction();
									tech.lastInGroup = !tech.lastInGroup;
								}}
							>
								<ArrowRightToLine />
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content>
							<p>Toggle end of row</p>
						</Tooltip.Content>
					</Tooltip.Root>
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</div>
