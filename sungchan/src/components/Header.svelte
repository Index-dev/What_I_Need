<style lang="scss">
@import '../scss/common.scss';

.base-width {
    position: sticky;
    top: 0;
    z-index: 10;
}

.header {
    box-sizing: border-box;
    padding: 10px 16px;
    margin-bottom: 2px;
    background-color: $search-color;
    box-shadow: 0 2px darken($search-color, 5%);
    display: flex;
    justify-content: space-between;

    :global(&.search-style) {
        background-color: $search-color;
        box-shadow: 0 2px darken($search-color, 5%);
    }

    :global(&.card-board-style) {
        background-color: $card-board-color;
        box-shadow: 0 2px darken($card-board-color, 5%);
    }

    :global(&.other-style) {
        background-color: #fff;
        box-shadow: 0 2px darken(#fff, 10%);
    }
}

.title {
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: 'Courgette', cursive;
    font-size: MIN(2.4em, calc(1em + 2vw));
    cursor: pointer;
    display: inline-block;

    :global(&.card-board-style) {
        color: $card-board-color;
        text-shadow: 2px 2px darken(#fff, 20%);
    }

    :global(&.other-style) {
        color: #fff;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
    }
}
</style>

<script>
import { push } from 'svelte-spa-router';
import { backgroundColorStyle, colorStyle } from '~/store/header';
import { cardId, iconId } from '~/store/card';

let headerEl;
let mainTitleEl;
let subTitleEl;

$: backgroundColorStyle,
    (() => {
        if (headerEl) {
            headerEl.classList.remove('search-style');
            headerEl.classList.remove('card-board-style');
            headerEl.classList.remove('other-style');
            headerEl.style.transitionDuration = '';

            if ($backgroundColorStyle) {
                if ($backgroundColorStyle !== 'other-style') {
                    headerEl.style.transitionDuration = '0.6s';
                }
                headerEl.classList.add($backgroundColorStyle);
            }
        }
    })();

$: colorStyle,
    (() => {
        if (mainTitleEl) {
            mainTitleEl.classList.remove('card-board-style');
            mainTitleEl.classList.remove('other-style');

            if ($colorStyle) {
                mainTitleEl.classList.add($colorStyle);
            }
        }

        if (subTitleEl) {
            subTitleEl.classList.remove('card-board-style');
            subTitleEl.classList.remove('other-style');

            if ($colorStyle) {
                subTitleEl.classList.add($colorStyle);
            }
        }
    })();

const onClickMainTitle = () => {
    location.href = '/';
};

const onClickSubTitle = () => {
    push('/cardList');
};
</script>

<div class="base-width">
    <header class="header" bind:this={headerEl}>
        <h1 class="main-title title" bind:this={mainTitleEl} on:click={onClickMainTitle}>D.Collection.</h1>
        {#if $iconId}
            <h1 class="sub-title title" bind:this={subTitleEl} on:click={onClickSubTitle}>{cardId.getCard().title}</h1>
        {/if}
    </header>
</div>
