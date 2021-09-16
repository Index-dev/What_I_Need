<style lang="scss">
@import '../scss/common.scss';

.base-width {
    overflow-x: hidden;
}

.cardList {
    display: flex;
    transition: 0.3s ease-out;
}
</style>

<script>
import { onDestroy, onMount } from 'svelte';
import { cardId, cardList } from '~/store/card';
import { backgroundColorStyle, colorStyle } from '~/store/header';
import IconList from '~/components/IconList.svelte';

let cardListEl;
let cardIndex = 0;
let baseWidthClientWidth = 0;
let touchStartX = 0;
let touchGab = 0;
let isTouch = false;

onMount(() => {
    // 헤더 색깔 변경
    backgroundColorStyle.change('other-style');
    colorStyle.change('card-board-style');

    // 선택된 카드 인덱스 구하기
    cardList.forEach((storeCard, index) => {
        if (storeCard.id === $cardId) {
            cardIndex = index;
            return false;
        }
    });

    window.addEventListener('wheel', onWheel);
});

onDestroy(() => {
    window.removeEventListener('wheel', onWheel);
});

const onWheel = (e) => {
    // 휠을 하면 페이지 넘어가기
    cardIndex = e.deltaY > 0 ? cardIndex + 1 : cardIndex - 1;
    cardIndex = cardIndex < 0 ? 0 : cardIndex;
    cardIndex = cardIndex >= cardList.length ? cardList.length - 1 : cardIndex;
};

// 화면 터치시 페이지 넘어가기
const onTouchStartCardList = (e) => {
    touchStartX = e.changedTouches[0].clientX;
    isTouch = true;
    cardListEl.style.transition = 'initial';
};

const onTouchMoveCardList = (e) => {
    if (isTouch) {
        touchGab = touchStartX - e.changedTouches[0].clientX;
    }
};

const onTouchEndCardList = () => {
    isTouch = false;
    touchStartX = 0;
    cardListEl.style.transition = '0.3s ease-out';

    if (touchGab >= 80) {
        cardIndex++;
    } else if (touchGab <= -80) {
        cardIndex--;
    }

    cardIndex = cardIndex < 0 ? 0 : cardIndex;
    cardIndex = cardIndex >= cardList.length ? cardList.length - 1 : cardIndex;
    touchGab = 0;
};
</script>

<svelte:head>
    <style>
    body {
        overflow-y: hidden;
    }
    </style>
</svelte:head>

<div class="base-width" bind:clientWidth={baseWidthClientWidth}>
    <div
        class="cardList"
        bind:this={cardListEl}
        on:touchstart={onTouchStartCardList}
        on:touchmove={onTouchMoveCardList}
        on:touchend={onTouchEndCardList}
        style="width: {baseWidthClientWidth * cardList.length}px; margin-left:-{baseWidthClientWidth * cardIndex +
            touchGab}px">
        {#each cardList as card (card.id)}
            <IconList {card} {baseWidthClientWidth} />
        {/each}
    </div>
</div>
