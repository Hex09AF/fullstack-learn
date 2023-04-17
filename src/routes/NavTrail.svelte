<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { LightSwitch, ProgressRadial, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { LL } from '$lib/i18n/i18n-svelte';

	const goSettings = () => goto('/settings');
	const goUserProfile = () => goto('/me');
	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'combobox',
		placement: 'bottom',
	};

	let loading = false;

	const signOutClick = (event: { currentTarget: EventTarget & HTMLButtonElement }) => {
		event.currentTarget.disabled = true;
		loading = true;
		signOut();
	};
</script>

{#if $page.data.session?.user}
	<div class="flex items-center gap-2">
		<img
			class="h-7 w-7 rounded-full"
			referrerpolicy="no-referrer"
			src={$page.data.session?.user?.image}
			alt={$page.data.session?.user?.name}
		/>
		<p class="hidden font-bold md:block">{$page.data.session?.user?.name}</p>
	</div>
{/if}

<button class="btn-icon variant-glass-primary p-0" use:popup={popupCombobox}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		<path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		<path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
	</svg>
</button>

<nav class="card w-48 px-4 py-2 shadow-xl" data-popup="combobox">
	<ul>
		{#if $page.data.session?.user}
			<li class="my-2">
				<button on:click={goUserProfile} class="option w-full">Profile</button>
			</li>
			<hr class="opacity-20" />
		{/if}
		<li class="my-2"><a href="/">Home</a></li>
		<li class="my-2"><a href="/">About</a></li>
		<li class="my-2"><a href="/">Blog</a></li>
		<li class="my-2 flex">
			Mode:
			<span class="pl-4"><LightSwitch /></span>
		</li>
		{#if $page.data.session?.user}
			<li class="my-2">
				<button on:click={goSettings} class="option w-full">Settings</button>
			</li>
			<li class="my-2">
				<button on:click|once={signOutClick} class="btn variant-filled-primary">
					{#if loading}
						{$LL.pleaseWait()} <ProgressRadial class="ml-2 h-6 w-6" stroke={100} />
					{:else}
						{$LL.logOut()}
					{/if}
				</button>
			</li>
		{/if}
	</ul>
</nav>
