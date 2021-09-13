<style lang="scss">
:global(body) {
    margin: 0;
    padding: 0;
}

main {
    border: 8px solid blueviolet;
}
</style>

<script>
import Router from 'svelte-spa-router';
import Header from '~/components/Header.svelte';
import Home from '~/components/Home.svelte';

const routes = {
    '/': Home,
};
</script>

<main>
    <Header />
    <Router {routes} />
</main>
