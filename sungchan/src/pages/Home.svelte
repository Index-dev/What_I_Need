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
    padding: MIN(82px, calc(34px + 2.2vw)) 0;
}

.card-board {
    background-color: $card-board-color;
    font-size: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: MIN(40px, calc(6px + 2vw));
    grid-gap: MIN(20px, calc(3px + 1vw));
    min-height: 100vh;
}

.title {
    color: #fff;
    padding: 0;
    margin: 0;
    font-size: MIN(4.3em, calc(1.9em + 2.2vw));
    font-style: oblique;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);

    & > .title-empha {
        color: $card-board-color;
    }
}

.searchText {
    width: MIN(30.4em, calc(14.4em + 20.2vw));
    height: 38px;
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2) inset, -1px -1px rgba(0, 0, 0, 0.2) inset;
    border: none;
    outline: none;
    padding: 0 14px;
}
</style>

<script>
import { onDestroy, onMount, tick } from 'svelte';
import { backgroundColorStyle, colorStyle } from '~/store/header';
import Card from '~/components/Card.svelte';
import { filterCardList } from '~/store/card';

let cardBoardEl;
let searchTextEl;
let searchText = '';

// 헤더 배경 색깔 선택
const getBackgroundColorStyle = () => {
    const header = document.querySelector('.header');

    if (cardBoardEl.getBoundingClientRect().top >= header.clientHeight) {
        backgroundColorStyle.change('search-style');
    } else {
        backgroundColorStyle.change('card-board-style');
    }

    colorStyle.change('other-style');
};

onMount(() => {
    getBackgroundColorStyle();
    window.addEventListener('scroll', getBackgroundColorStyle);

    tick();
    searchTextEl.focus();
});

onDestroy(() => {
    window.removeEventListener('scroll', getBackgroundColorStyle);
});

// 카드 리스트 입력된 값으로 필터하기
$: searchText, filterCardList.filter(searchText);
</script>

<div class="base-width">
    <div class="search">
        <h1 class="title"><span class="title-empha">s</span>elect a <span class="title-empha">c</span>ard ...</h1>
        <input
            class="searchText"
            type="text"
            placeholder="검색어를 입력해주세요."
            bind:this={searchTextEl}
            bind:value={searchText} />
    </div>
    <div class="card-board" bind:this={cardBoardEl}>
        {#each $filterCardList as card, index (card.id)}
            <Card {card} {index} />
        {/each}
    </div>
</div>
