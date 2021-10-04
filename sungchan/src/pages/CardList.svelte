<style lang="scss">
@import '../scss/common.scss';

.base-width {
    overflow-x: hidden;
}

.card-list {
    display: flex;
    // transition: 0.3s ease-out;
}
</style>

<script>
import { onDestroy, onMount } from 'svelte';
import { cardId, cardList, cardWheel } from '~/store/card';
import { backgroundColorStyle, colorStyle } from '~/store/header';
import Icons from '~/components/Icons.svelte';
import { touchSlide } from '~/actions/slide';
import { iconId } from '../store/card';
import App from '../App.svelte';
import Card from '../components/Card.svelte';
import Footer from '../components/Footer.svelte';

let cardListEl;
let cardIndex = 0;
let baseWidthClientWidth = 0;
let touchGab = 0;

onMount(() => {
    // 값이 없을 경우 초기 화면
    if (!$cardId) {
        location.href = '/';
    }

    // 헤더 색깔 변경
    backgroundColorStyle.change('other-style');
    colorStyle.change('card-board-style');

    // 선택된 카드 인덱스 구하기
    cardList.forEach((card, index) => {
        if (card.id === $cardId) {
            cardIndex = index;
            return false;
        }
    });

    window.addEventListener('wheel', onWheel);

    // 아이콘 아이디값 초기화
    iconId.change('');

    // 마운트되자마자 transition 적용되지 않게 하기
    cardListEl.style.transition = '';
    setTimeout(() => {
        cardListEl.style.transition = '0.3s ease-out';
    }, 0);
});

onDestroy(() => {
    window.removeEventListener('wheel', onWheel);
});

const onWheel = (e) => {
    // 휠을 하면 페이지 넘어가기
    if ($cardWheel.down && e.deltaY > 0) {
        cardIndex++;

        if (cardIndex >= cardList.length) {
            cardIndex = cardList.length - 1;
        } else {
            cardWheel.init();
        }

        // store 변경
        cardId.changeIndex(cardIndex);
    } else if ($cardWheel.up && e.deltaY < 0) {
        cardIndex--;

        if (cardIndex < 0) {
            cardIndex = 0;
        } else {
            cardWheel.init();
        }

        // store 변경
        cardId.changeIndex(cardIndex);
    }
};

// 화면 터치시 페이지 넘어가기
const nodeTouchMove = (e) => {
    touchGab = e.detail.touchGab;

    // 마지막 카드에서 터치로 밀시 빈 화면 나오는 것 방지
    if (cardIndex >= cardList.length - 1 && touchGab > 0) {
        touchGab = 0;
    }
};

const nodeTouchEnd = () => {
    if (touchGab >= 80) {
        cardIndex++;
    } else if (touchGab <= -80) {
        cardIndex--;
    }

    cardIndex = cardIndex < 0 ? 0 : cardIndex;
    cardIndex = cardIndex >= cardList.length ? cardList.length - 1 : cardIndex;

    // store 변경
    cardId.changeIndex(cardIndex);
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
        class="card-list"
        bind:this={cardListEl}
        use:touchSlide={nodeTouchEnd}
        on:nodeTouchMove={nodeTouchMove}
        style="width: {baseWidthClientWidth * cardList.length}px; 
               margin-left:-{baseWidthClientWidth * cardIndex + touchGab}px">
        {#each cardList as card (card.id)}
            <Icons {card} {baseWidthClientWidth} />
        {/each}
    </div>
</div>
