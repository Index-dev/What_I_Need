import { writable } from 'svelte/store';

const _backgroundColorStyle = writable('');
const _colorStyle = writable('');

export const backgroundColorStyle = {
    ..._backgroundColorStyle,
    change: (style: string): void => {
        _backgroundColorStyle.set(style);
    },
};

export const colorStyle = {
    ..._colorStyle,
    change: (style: string): void => {
        _colorStyle.set(style);
    },
};
