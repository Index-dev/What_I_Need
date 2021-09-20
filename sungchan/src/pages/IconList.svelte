<style lang="scss">
@import '../scss/common.scss';

.base-width {
    overflow-x: hidden;
}

.icon-list {
    display: flex;
    transition: 0.3s ease-out;
}
</style>

<script>
import { cardList, cardId, iconId, iconWheel } from '~/store/card';
import { touchSlide } from '~/actions/slide';
import { backgroundColorStyle, colorStyle } from '~/store/header';
import { onDestroy, onMount } from 'svelte';
import Infos from '~/components/Infos.svelte';

let baseWidthClientWidth = 0;
let iconListEl;
let touchGab = 0;
let iconIndex = 0;
let card;

onMount(() => {
    // 헤더 색깔 변경
    backgroundColorStyle.change('other-style');
    colorStyle.change('card-board-style');

    card = cardList.find((card) => card.id === $cardId);
    // 선택된 아이콘 인덱스 구하기
    card.iconList.forEach((icon, index) => {
        if (icon.id === $iconId) {
            iconIndex = index;
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
    if ($iconWheel.down && e.deltaY > 0) {
        iconIndex++;

        if (iconIndex >= card.iconList.length) {
            iconIndex = card.iconList.length - 1;
        } else {
            iconWheel.init();
        }

        // store 변경
        iconId.changeIndex(iconIndex);
    } else if ($iconWheel.up && e.deltaY < 0) {
        iconIndex--;

        if (iconIndex < 0) {
            iconIndex = 0;
        } else {
            iconWheel.init();
        }

        // store 변경
        iconId.changeIndex(iconIndex);
    }
};

// 화면 터치시 페이지 넘어가기
const nodeTouchMove = (e) => {
    touchGab = e.detail.touchGab;
};

const nodeTouchEnd = () => {
    if (touchGab >= 80) {
        iconIndex++;
    } else if (touchGab <= -80) {
        iconIndex--;
    }

    iconIndex = iconIndex < 0 ? 0 : iconIndex;
    iconIndex = iconIndex >= card.iconList.length ? card.iconList.length - 1 : iconIndex;

    // store 변경
    iconId.changeIndex(iconIndex);
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
    {#if card}
        <div
            class="icon-list"
            bind:this={iconListEl}
            use:touchSlide={nodeTouchEnd}
            on:nodeTouchMove={nodeTouchMove}
            style="width: {baseWidthClientWidth * card.iconList.length}px; margin-left:-{baseWidthClientWidth *
                iconIndex +
                touchGab}px">
            {#each card.iconList as icon (icon.id)}
                <Infos {icon} {baseWidthClientWidth} />
            {/each}
        </div>
    {/if}
</div>
