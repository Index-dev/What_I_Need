<style lang="scss">
:root {
    --initTranslateX: 0;
}

@keyframes cardAnimation {
    0% {
        transform: translateX(var(--initTranslateX)) rotate(-120deg);
    }
}

.card {
    display: inline-block;
    position: relative;
    width: MIN(17.2em, calc(5.2em + 11vw));
    height: MIN(25.8em, calc(7.8em + 16.5vw));
    font-size: 12px;
    animation-timing-function: cubic-bezier(0.16, 0.68, 0.24, 1);
    cursor: pointer;

    :global(&.animation) {
        animation-name: cardAnimation;
    }

    &:hover {
        & > .front {
            transform: rotateY(-180deg);
        }

        & > .back {
            transform: rotateY(0);
        }
    }

    & > .front,
    & > .back {
        width: MIN(17.2em, calc(5.2em + 11vw));
        height: MIN(25.8em, calc(7.8em + 16.5vw));
        padding: MIN(10px, calc(2px + 1vw));
        background-color: #fff;
        position: absolute;
        transition-duration: 1s;
        backface-visibility: hidden;
        box-sizing: border-box;
    }

    & > .front > img,
    & > .back > div {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    & > .front {
        transform: rotateY(0);
    }

    & > .back {
        transform: rotateY(-180deg);
    }

    & > .back > div {
        padding: MIN(10px, calc(2px + 1vw));
        box-sizing: border-box;
        font-size: 1.6em;

        & > .title {
            margin: 0;
            padding: 0;
            font-size: MIN(1.3em, calc(0.4em + 1.2vw));
            text-align: center;
            margin-bottom: MIN(10px, calc(1px + 0.5vw));
        }

        & > .description {
            font-weight: 600;
            font-size: MIN(0.9em, calc(0.3em + 0.8vw));
        }
    }
}
</style>

<script>
import { onMount } from 'svelte';
import { push } from 'svelte-spa-router';
import { cardId } from '~/store/card';

export let card;
export let index;

let cardEl;

onMount(() => {
    // 카드 위치가 화면에 보일 때 애니메이션 동작
    const intersectionObserver = (entries, io) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cardBoard = document.querySelector('.card-board');
                const outerWidth = (window.innerWidth - cardBoard.clientWidth) / 2 + 300;

                document.documentElement.style.setProperty(
                    '--initTranslateX',
                    `-${outerWidth + (cardBoard.clientWidth / 3) * (index % 3)}px`,
                );
                cardEl.classList.add('animation');
            }
        });
    };

    const observer = new IntersectionObserver(intersectionObserver);
    cardEl && observer.observe(cardEl);
});

const onClickCard = () => {
    cardId.change(card.id);
    push('/cardList');
};
</script>

<div
    class="card"
    bind:this={cardEl}
    on:click={onClickCard}
    style="transform: translate({card.translateX}, {card.translateY}) rotate({card.rotate}deg); animation-duration: {card.duration}s">
    {#if card.type === 'card'}
        <div class="front">
            <img src={card.imagePath} alt="lion" />
        </div>
        <div class="back">
            <div>
                <h3 class="title">{card.title}</h3>
                <span class="description">{card.description}</span>
            </div>
        </div>
    {/if}
</div>
