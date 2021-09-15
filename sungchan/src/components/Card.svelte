<style lang="scss">
@keyframes cardAnimation {
    0% {
        transform: translateX(-600px) rotate(-160deg);
    }
}

.card {
    display: inline-block;
    position: relative;
    width: MIN(17.2em, calc(5.2em + 11vw));
    height: MIN(25.8em, calc(7.8em + 16.5vw));
    font-size: 12px;
    animation: cardAnimation cubic-bezier(0.16, 0.68, 0.24, 1);

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
    & > .back > p {
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
}
</style>

<script>
export let card;
</script>

<div
    class="card"
    style="transform: translate({card.translateX}, {card.translateY}) rotate({card.rotate}deg); animation-duration: {card.duration}s">
    {#if card.type === 'card'}
        <div class="front">
            <img src={card.imagePath} alt="lion" />
        </div>
        <div class="back">
            <p>{card.title}</p>
        </div>
    {/if}
</div>
