<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Tech } from '$lib/tech';

	export let tech: Tech & { selected?: boolean };

	function toggleSelection() {
		tech.selected = !tech.selected;
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
	<Card.Root class="transition-colors hover:border-primary">
		<Card.Header>
			<Card.Title>{tech.name}</Card.Title>
		</Card.Header>
		<Card.Content>
			{#if typeof tech.image === 'string'}
				<img src={tech.image} alt={tech.name} class="aspect-square w-12" />
			{:else}
				<picture>
					<source media="(prefers-color-scheme: light)" srcset={tech.image.dark} />
					<img src={tech.image.light} alt={tech.name} class="aspect-square w-12" />
				</picture>
			{/if}
		</Card.Content>
	</Card.Root>
</div>
