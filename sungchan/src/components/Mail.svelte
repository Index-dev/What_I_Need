<style lang="scss">
@import '../scss/common.scss';
$circle-size: MIN(50px, calc(32px + 1.2vw));

.outer {
    position: fixed;
    bottom: 8px;
    right: 8px;
    display: flex;
    border-radius: 50px;
    overflow: hidden;

    & > .contents {
        height: $circle-size;
        border-radius: 50px;
        background-color: $plus-color;
        color: #fff;
        display: flex;
        align-items: center;
        transition: 0.5s ease-out;

        &.toggle {
            transform: translate($circle-size) !important;
        }

        & > .content-title {
            margin-left: 10px;
            font-size: MIN(1.2em, calc(0.7em + 1.2vw));
            padding-right: $circle-size;
            font-weight: bold;
        }
    }

    & > .button-outer {
        width: $circle-size;
        height: $circle-size;
        border-radius: 50px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        & > img {
            width: 100%;
            border-radius: $circle-size;
        }
    }
}

.modal-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 20vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    display: flex;
    align-items: center;
    transition: 0.5s ease-out;
    margin: 0 auto;
    overflow: hidden;
    opacity: 0;

    &.modal {
        width: 100vw;
        opacity: 1;
        z-index: 20;
    }

    & > .base-width {
        width: 100%;
        background-color: #fff;

        & > .modal-inner {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 20px;

            & > form {
                width: 100%;

                & > .modify-text {
                    width: 100%;
                    height: 200px;
                    resize: none;
                    outline: none;
                    border: 2px solid $search-color;
                    box-shadow: 1px 1px 1px darken($search-color, 10%) inset,
                        -1px -1px 1px darken($search-color, 10%) inset;
                    border-radius: 8px;
                    padding: 8px;

                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */

                    &::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Opera */
                    }
                }

                & > .button {
                    width: 100%;
                    color: #fff;
                    border-radius: 8px;
                    border: none;
                    text-shadow: 0.2px 0.2px darken(#fff, 10%);

                    &.modify-button {
                        background-color: $card-board-color;
                        box-shadow: 1px 1px 2px darken($card-board-color, 10%);
                    }

                    &.cancle-button {
                        background-color: $cancle-color;
                        box-shadow: 1px 1px 2px darken($cancle-color, 10%);
                    }
                }
            }
        }
    }
}
</style>

<script>
import emailjs from 'emailjs-com';
import { onDestroy, onMount } from 'svelte';

let toggle = false; // +버튼 토글
let contentsEl;
let translateX = 0;
let modal = false; // 모달
let modifyText = ''; // 수정 요청 텍스트

// translateX 반응형 구하기
onMount(() => {
    getTranslateX();
    window.addEventListener('resize', getTranslateX);
});

onDestroy(() => {
    window.removeEventListener('resize', getTranslateX);
});

const getTranslateX = () => {
    translateX = contentsEl.clientWidth;
};

// emailjs로 이메일 보내기
const sendEmail = (e) => {
    e.preventDefault();

    if (e.submitter.outerText === '취소') {
        modal = false;
        modifyText = '';
    } else if (modifyText) {
        emailjs.sendForm('service_742yqaa', 'template_2ggleta', e.target, 'user_P5esVftaMgj7LbCO9mTXa');
        alert('요청이 완료되었습니다.');
        modal = false;
        modifyText = '';
    } else {
        alert('내용이 입력되지 않았습니다.');
    }
};

$: modal,
    (() => {
        const body = document.querySelector('body');
        if (modal) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    })();
</script>

<div class="outer">
    <div class="contents" class:toggle bind:this={contentsEl} style="transform: translateX({translateX}px)">
        <h3 class="content-title">정보수정 요청</h3>
    </div>
    <div
        class="button-outer"
        on:mouseenter={() => (toggle = true)}
        on:mouseleave={() => (toggle = false)}
        on:click={() => (modal = true)}>
        <img src="/images/plus.svg" alt="plus" />
    </div>
</div>

<div class="modal-outer" class:modal>
    <div class="base-width">
        <div class="modal-inner">
            <form on:submit={sendEmail}>
                <textarea
                    class="modify-text"
                    name="message"
                    bind:value={modifyText}
                    placeholder="요청 내용을 입력해주세요 ..." />
                <button class="button modify-button">정보수정 요청</button>
                <button class="button cancle-button">취소</button>
            </form>
        </div>
    </div>
</div>
