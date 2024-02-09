<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { TechInList } from '$lib/tech';

	export let tech: TechInList;
	let img: HTMLImageElement;
	let height = 4;
	let width = 4;

	function toggleSelection() {
		tech.selected = !tech.selected;
	}

	if (tech.dimensions) {
		height *= tech.dimensions.heightRatio;
		width *= tech.dimensions.widthRatio;
	}
</script>

<div
	tabindex="0"
	role="gridcell"
	on:click={toggleSelection}
	on:keydown={(e) => {
		if (e.key === 'Enter') {
			toggleSelection();
		}
	}}
>
	<Card.Root class="cursor-pointer transition-colors hover:border-primary">
		<Card.Header>
			<Card.Title>{tech.name}</Card.Title>
		</Card.Header>
		<Card.Content>
			{#if typeof tech.image === 'string'}
				<img
					src={tech.image}
					alt={tech.name}
					style:--width="{width}rem"
					style:--height="{height}rem"
					class="h-[--height] w-[--width] object-contain"
					bind:this={img}
				/>
			{:else}
				<picture>
					<source media="(prefers-color-scheme: light)" srcset={tech.image.dark} />
					<img
						src={tech.image.light}
						alt={tech.name}
						style:--width="{width}rem"
						style:--height="{height}rem"
						class="h-[--height] w-[--width] object-contain"
						bind:this={img}
					/>
				</picture>
			{/if}
		</Card.Content>
	</Card.Root>
</div>
