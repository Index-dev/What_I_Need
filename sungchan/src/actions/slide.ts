export const touchSlide = (el: HTMLDivElement, nodeTouchEnd: () => void): { destroyed(): void } => {
    let isTouch = false;
    let touchStartX = 0;
    let touchGab = 0;
    let transition = '';

    const touchStart = (e: TouchEvent) => {
        isTouch = true;
        touchStartX = e.changedTouches[0].clientX;
        transition = window.getComputedStyle(el).transition;
        el.style.transition = 'initial';
    };

    const touchMove = (e: TouchEvent) => {
        if (isTouch) {
            touchGab = touchStartX - e.changedTouches[0].clientX;
        }

        el.dispatchEvent(
            new CustomEvent('nodeTouchMove', {
                detail: {
                    touchGab,
                },
            }),
        );
    };

    const touchEnd = () => {
        nodeTouchEnd();

        isTouch = false;
        touchGab = 0;
        el.style.transition = transition;

        el.dispatchEvent(
            new CustomEvent('nodeTouchMove', {
                detail: {
                    touchGab,
                },
            }),
        );
    };

    el.addEventListener('touchstart', touchStart);
    el.addEventListener('touchmove', touchMove);
    el.addEventListener('touchend', touchEnd);

    return {
        destroyed() {
            el.removeEventListener('touchstart', touchStart);
            el.removeEventListener('touchmove', touchMove);
            el.removeEventListener('touchend', touchEnd);
        },
    };
};
