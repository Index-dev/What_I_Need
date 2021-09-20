<style lang="scss">
:global(body) {
    margin: 0;
    padding: 0;
}

main {
    background-color: #ad896f;
}
</style>

<script>
import Router from 'svelte-spa-router';
import Header from '~/components/Header.svelte';
import Home from '~/pages/Home.svelte';
import CardList from '~/pages/CardList.svelte';
import IconList from '~/pages/IconList.svelte';

const routes = {
    '/': Home,
    '/cardList': CardList,
    '/iconList': IconList,
};
</script>

<main>
    <Header />
    <Router {routes} />
</main>
