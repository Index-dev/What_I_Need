<style lang="scss">
@import '../scss/common.scss';

.icon {
    background-color: #fff;
    overflow: auto;

    & > .infos {
        text-align: center;
        padding: 20px;

        & > .icon-image {
            width: MIN(7.8em, calc(3.2em + 6.2vw));
            border-radius: 6px;
        }

        & > .info-table {
            width: 100%;
            margin: 18px auto 44px auto;
            text-align: left;
            border-spacing: 4px 10px;

            & > thead > tr,
            & > tbody > tr {
                vertical-align: middle;
            }

            & > tbody > tr > td {
                overflow-wrap: anywhere;
            }

            & > tbody > tr > td:first-child {
                vertical-align: top;
            }
        }

        & > .info-table:last-child {
            margin: 18px auto;
        }
    }
}

.info-title {
    padding: 0;
    margin: 0;
    padding-left: 4px;
    font-size: MIN(1.4em, calc(0.7em + 1.2vw));
    border-left: 10px solid $search-color;
}

.content-title {
    padding: 0;
    margin: 0;
    padding-left: 4px;
    font-size: MIN(1.4em, calc(0.7em + 1.2vw));
    border-left: 10px solid $card-board-color;
}

.content-content {
    margin: 0;
    padding: 0;
    font-size: MIN(1.2em, calc(0.6em + 1.1vw));
    line-height: MIN(30px, calc(18px + 0.8vw));

    & > .content-link {
        color: #0050a0;
        cursor: pointer;
    }
}
</style>

<script>
import { onDestroy, onMount } from 'svelte';
import { iconId, iconWheel } from '~/store/card';

export let icon;
export let baseWidthClientWidth;

let iconEl;

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
    iconEl.style.height = `calc(100vh - ${header.clientHeight}px)`;
};

$: $iconId,
    (() => {
        if (iconEl) {
            if ($iconId === icon.id) {
                iconEl.scrollTo(0, 0);
                iconEl.addEventListener('wheel', onWheelIconEl);
                onWheelIconEl();
            } else {
                iconEl.removeEventListener('wheel', onWheelIconEl);
            }
        }
    })();

const onWheelIconEl = (e) => {
    if (e) {
        // 아래로 휠
        if (e.deltaY > 0 && iconEl.scrollTop + iconEl.clientHeight >= iconEl.scrollHeight) {
            iconWheel.changeDown(true);
        }

        // 위로 휠
        if (e.deltaY < 0 && iconEl.scrollTop === 0) {
            iconWheel.changeUp(true);
        }
    }
};
</script>

<div class="icon" bind:this={iconEl} style="width: {baseWidthClientWidth}px">
    <div class="infos">
        <img class="icon-image" src={icon.imagePath} alt={icon.title} />
        {#each icon.infoList as info (info.title)}
            <table class="info-table">
                <colgroup>
                    <col width="35%" />
                    <col width="65%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>
                            <h3 class="info-title">{info.title}</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each info.contentList as content (content.title)}
                        <tr>
                            <td>
                                <h3 class="content-title">{content.title}</h3>
                            </td>
                            <td>
                                <h5 class="content-content">
                                    {#if content.type === 'link'}
                                        <span
                                            class="content-link"
                                            on:click={() => {
                                                window.open(content.content);
                                            }}>{content.content}</span>
                                    {:else}
                                        {content.content}
                                    {/if}
                                </h5>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/each}
    </div>
</div>
