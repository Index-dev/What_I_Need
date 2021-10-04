<style lang="scss">
$min-width: 730px;

@import '../scss/common.scss';
.outer {
    background-color: #fff;

    & > .base-width {
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;

        @media screen and (min-width: $min-width) {
            display: flex;
        }

        & > .inner-left {
            & > p {
                font-weight: 700;
                white-space: nowrap;
                font-size: MIN(1.1em, calc(0.6em + 1.6vw));
                text-align: center;

                @media screen and (min-width: $min-width) {
                    text-align: left;
                }
            }
        }

        & > .inner-right {
            display: flex;
            justify-content: center;
            margin-bottom: 18px;

            @media screen and (min-width: $min-width) {
                justify-content: initial;
            }

            & > img {
                width: MIN(80px, calc(55px + 2.2vw));
                height: MIN(80px, calc(55px + 2.2vw));
                margin: 0 6px;

                &.click-image {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

<div class="outer">
    <div class="base-width">
        <div class="inner-right">
            <img
                class="click-image"
                src="/images/github.png"
                alt="github"
                on:click={() => window.open('https://github.com/Index-dev/What_I_Need/tree/sungchan/sungchan')} />
            <img
                class="click-image"
                src="/images/tistory.png"
                alt="tistory"
                on:click={() => window.open('https://jforj.tistory.com')} />
            <img src="/images/logo.svg" alt="logo" />
        </div>
        <div class="inner-left">
            <p>[ Tel ] 010-3361-3633</p>
            <p>[ E-Mail ] tjdcksdl00@naver.com</p>
            <p>Copyright 2021. 김성찬. All rights reserved.</p>
        </div>
    </div>
</div>
