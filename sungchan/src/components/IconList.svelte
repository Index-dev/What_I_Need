<style lang="scss">
.card {
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
}

.icon-list {
}

.card-title {
    font-size: MIN(2.8em, calc(1.7em + 2.2vw));
    margin: MIN(1em, calc(0.3em + 0.7vw)) 0 MIN(1.4em, calc(0.5em + 0.9vw)) 0;
}

.icon {
    display: inline-block;
    margin: 22px MIN(32px, calc(4px + 2.2vw));
    cursor: pointer;
}

.icon-title {
    font-size: MIN(1.5em, calc(0.8em + 1.2vw));
    margin: MIN(0.7em, calc(0.2em + 0.6vw));
}

.icon-image {
    width: MiN(9.6em, calc(3.1em + 8.8vw));
}
</style>

<script>
import { onDestroy, onMount } from 'svelte';

export let card;
export let baseWidthClientWidth;

let iconListEl;

// 반응형으로 iconList 높이 구하기
const getHeight = () => {
    const header = document.querySelector('.header');
    iconListEl.style.height = `calc(100vh - ${header.clientHeight}px)`;
};

onMount(() => {
    window.addEventListener('resize', getHeight);
    getHeight();
});

onDestroy(() => {
    window.removeEventListener('resize', getHeight);
});
</script>

<div class="card" bind:this={iconListEl} style="width: {baseWidthClientWidth}px">
    <div class="icon-list">
        <h1 class="card-title">{card.title}</h1>
        {#each card.iconList as icon}
            <div class="icon">
                <img class="icon-image" src={icon.imagePath} alt={icon.title} />
                <h3 class="icon-title">{icon.title}</h3>
            </div>
        {/each}
    </div>
</div>
