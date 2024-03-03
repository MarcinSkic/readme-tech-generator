<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import markdown from 'highlight.js/lib/languages/markdown';
	import 'highlight.js/styles/atom-one-dark-reasonable.css';
	import { Button } from '../button';
	import { Copy } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import * as Tooltip from '$lib/components/ui/tooltip';

	export let code: string;
	let highlighted = '';

	hljs.registerLanguage('markdown', markdown);
	$: if (code) {
		highlighted = hljs.highlight(code, {
			language: 'markdown'
		}).value;
	}

	function onCopy() {
		navigator.clipboard.writeText(code);
		toast('Copied to clipboard');
	}
</script>

<div class="relative m-4 rounded-xl bg-stone-900">
	<div class="absolute right-3 top-3">
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button
					variant="ghost"
					size="icon"
					class="box-content p-1 text-stone-50 hover:bg-stone-700 hover:text-stone-50"
					on:click={onCopy}
				>
					<Copy />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Copy to clipboard</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>

	<pre class="curstom-scrollbar h-72 overflow-auto p-4 text-zinc-50"><code>{@html highlighted}</code
		></pre>
</div>

<style lang="postcss">
	.curstom-scrollbar::-webkit-scrollbar {
		@apply w-2.5;
		@apply h-2.5;
	}

	.curstom-scrollbar::-webkit-scrollbar-thumb {
		@apply bg-muted-foreground;
		@apply rounded-md;
	}

	.curstom-scrollbar::-webkit-scrollbar-track {
		@apply bg-muted;
		@apply rounded-es-md;
		@apply rounded-ee-md;
	}
</style>
