<style lang="scss">
:global(body) {
    margin: 0;
    padding: 0;
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

:global(body::-webkit-scrollbar) {
    display: none; /* Chrome, Safari, Opera */
}

main {
    background-color: #ad896f;
}

.not-support {
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #ad896f;

    & > span {
        margin: 40px 0;
        font-weight: bold;
        color: #fff;
        text-shadow: 2px 2px 2px darken(#fff, 50%);
    }
}
</style>

<script>
import Router from 'svelte-spa-router';
import Header from '~/components/Header.svelte';
import Home from '~/pages/Home.svelte';
import CardList from '~/pages/CardList.svelte';
import IconList from '~/pages/IconList.svelte';
import Mail from '~/components/Mail.svelte';
import { onDestroy, onMount } from 'svelte';

const routes = {
    '/': Home,
    '/cardList': CardList,
    '/iconList': IconList,
};

let innerWidth = 0;

onMount(() => {
    setInnerWidth();
    window.addEventListener('resize', setInnerWidth);
});

onDestroy(() => {
    window.removeEventListener('resize', setInnerWidth);
});

const setInnerWidth = () => {
    innerWidth = window.innerWidth;
};
</script>

{#if innerWidth >= 360}
    <main>
        <Header />
        <Router {routes} />
        <Mail />
    </main>
{:else}
    <div class="not-support">
        <span>지원하지 않는 화면 크기 ...</span>
    </div>
{/if}
