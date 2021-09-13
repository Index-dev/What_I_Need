import { writable } from 'svelte/store';

const _backgroundColor = writable('#fff');

export const backgroundColor = {
    ..._backgroundColor,
    change: (color: string): void => {
        _backgroundColor.set(color);
    },
};
