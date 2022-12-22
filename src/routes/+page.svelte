<script lang="ts">
    import { page } from '$app/stores'
    import Account from '../components/Account.svelte'
    import Auth from '../components/Auth.svelte'
</script>
<svelte:head>
    <title>vtFood - Home</title>
    <meta name="description" content="Sistema de pedidos delivery" />
</svelte:head>

{#if !$page.data.session}
<Auth />
{:else}
<Account session="{$page.data.session}" />
{/if}

<style>
	
</style>
