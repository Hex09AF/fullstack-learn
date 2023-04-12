<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="p-4 hero-container flex flex-col justify-center items-center">
	<p class="my-4 text-center">{$LL.tagline()}</p>
	<a href="/onboarding" class="btn variant-filled-primary" data-sveltekit-preload-data="hover">
		{$LL.signUp()}
	</a>
</div>
