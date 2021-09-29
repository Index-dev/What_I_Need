<style lang="scss">
@import '../scss/common.scss';
.card {
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    overflow: auto;
}

.card-title {
    font-size: MIN(2.8em, calc(1.7em + 2.2vw));
    margin: MIN(1em, calc(0.3em + 0.7vw)) 0 MIN(1.4em, calc(0.5em + 0.9vw)) 0;
    color: $search-color;
    text-shadow: 2px 2px darken(#fff, 20%);
}

.icon {
    display: inline-block;
    margin: 22px MIN(32px, calc(4px + 2.2vw));
    cursor: pointer;

    & > .icon-title {
        font-size: MIN(1.5em, calc(0.8em + 1.2vw));
        margin: MIN(0.7em, calc(0.2em + 0.6vw));
    }

    & > .icon-image {
        width: MiN(9.6em, calc(3.1em + 8.8vw));
        border-radius: 6px;
    }
}
</style>

<script>
import { onDestroy, onMount } from 'svelte';
import { push } from 'svelte-spa-router';
import { cardId, iconId } from '~/store/card';
import { cardWheel } from '../store/card';

export let card;
export let baseWidthClientWidth;

let cardEl;

// 반응형으로 iconList 높이 구하기
onMount(() => {
    window.addEventListener('resize', getHeight);
    getHeight();
});

onDestroy(() => {
    window.removeEventListener('resize', getHeight);
});

const getHeight = () => {
    const header = document.querySelector('.header');
    cardEl.style.height = `calc(100vh - ${header.clientHeight}px)`;
};

// 아이콘을 클릭 액션
const onClickIcon = (id) => {
    iconId.change(id);
    push('/iconList');
};

$: $cardId,
    (() => {
        if (cardEl) {
            if ($cardId === card.id) {
                cardEl.scrollTo(0, 0);
                cardEl.addEventListener('wheel', onWheelCardEl);
                onWheelCardEl();
            } else {
                cardEl.removeEventListener('wheel', onWheelCardEl);
            }
        }
    })();

const onWheelCardEl = (e) => {
    if (e) {
        // 아래로 휠
        if (e.deltaY > 0 && cardEl.scrollTop + cardEl.clientHeight >= cardEl.scrollHeight) {
            cardWheel.changeDown(true);
        }

        // 위로 휠
        if (e.deltaY < 0 && cardEl.scrollTop === 0) {
            cardWheel.changeUp(true);
        }
    }
};
</script>

<div class="card" bind:this={cardEl} style="width: {baseWidthClientWidth}px">
    <div class="icons">
        <h1 class="card-title">{card.title}</h1>
        {#each card.iconList as icon}
            <div class="icon" on:click={() => onClickIcon(icon.id)}>
                <img class="icon-image" src={icon.imagePath} alt={icon.title} />
                <h3 class="icon-title">{icon.title}</h3>
            </div>
        {/each}
    </div>
</div>
