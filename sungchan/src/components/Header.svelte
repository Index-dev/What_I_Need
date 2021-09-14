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
    box-shadow: 0 2px rgba(0, 0, 0, 0.5);
    transition-duration: 0.6s;

    :global(&.search-style) {
        background-color: $search-color;
        box-shadow: 0 2px darken($search-color, 5%);
    }

    :global(&.card-board-style) {
        background-color: $card-board-color;
        box-shadow: 0 2px darken($card-board-color, 5%);
    }
}

.title {
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: 'Courgette', cursive;

    :global(&.card-board-style) {
        color: $card-board-color;
    }
}
</style>

<script>
import { backgroundColorStyle, colorStyle } from '~/store/header';

let headerEl;
let titleEl;

$: backgroundColorStyle,
    (() => {
        if (headerEl) {
            headerEl.classList.remove('card-board-style');
            headerEl.classList.remove('search-style');

            if ($backgroundColorStyle) {
                headerEl.classList.add($backgroundColorStyle);
            }
        }
    })();

$: colorStyle,
    (() => {
        if (titleEl) {
            titleEl.classList.remove('.card-board-style');

            if ($colorStyle) {
                titleEl.classList.add($colorStyle);
            }
        }
    })();
</script>

<div class="base-width">
    <header class="header" bind:this={headerEl}>
        <h1 class="title" bind:this={titleEl}>D.Collection.</h1>
    </header>
</div>
