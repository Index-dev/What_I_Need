<style lang="scss">
@import '../scss/common.scss';

.search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $search-color;
    flex-wrap: wrap;
    gap: 32px;
    padding: 14px 0;
}

.card-board {
    background-color: $card-board-color;
    font-size: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: MIN(40px, calc(6px + 2vw));
    grid-gap: MIN(20px, calc(3px + 1vw));
}

.title {
    color: #fff;
    padding: 0;
    margin: 0;
    font-size: 4.3em;
    font-style: oblique;
}

.searchText {
    width: 50%;
    height: 38px;
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2) inset, -1px -1px rgba(0, 0, 0, 0.2) inset;
    border: none;
    outline: none;
    padding: 0 14px;
}
</style>

<script>
import { onDestroy, onMount } from 'svelte';
import { backgroundColorStyle } from '~/store/header';
import Card from '~/components/Card.svelte';
import { cardList } from '~/store/home';

let cardBoardEl;

// 헤더 배경 색깔 선택
const getBackgroundColorStyle = () => {
    const header = document.querySelector('.header');

    if (cardBoardEl.getBoundingClientRect().top >= header.clientHeight) {
        backgroundColorStyle.change('search-style');
    } else {
        backgroundColorStyle.change('card-board-style');
    }
};

onMount(() => {
    getBackgroundColorStyle();
    window.addEventListener('scroll', getBackgroundColorStyle);
});

onDestroy(() => {
    window.removeEventListener('scroll', getBackgroundColorStyle);
});
</script>

<div class="base-width">
    <div class="search">
        <h1 class="title">select a card ...</h1>
        <input class="searchText" type="text" placeholder="검색어를 입력해주세요." />
    </div>
    <div class="card-board" bind:this={cardBoardEl}>
        {#each $cardList as card (card.id)}
            <Card {card} />
        {/each}
    </div>
</div>
