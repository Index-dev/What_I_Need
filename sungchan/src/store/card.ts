import { get, writable } from 'svelte/store';
import shortid from 'shortid';

const encrypt = () => shortid.generate();

// 빈 카드 인덱스
const emptyList = [2, 4, 7];

interface Icard {
    id: string;
    type: string;
    title: string;
    description: string;
    imagePath: string;
    translateX: number;
    translateY: number;
    rotate: number;
    duration: number;
    iconList: Iicon[];
}

interface Iicon {
    id: string;
    title: string;
    imagePath: string;
    infoList: Iinfo[];
}

interface Iinfo {
    title: string;
    contentList: Icontent[];
}

interface Icontent {
    type: string;
    title: string;
    content: string;
}

// 디자인 리스트
export const designList = [
    {
        translateX: 'MIN(40px, calc(4px + 2vw))',
        translateY: 0,
        rotate: 6,
        duration: 1,
    },
    {
        translateX: 'MIN(30px, calc(3px + 1.5vw))',
        translateY: 'MAX(-15px, -0.75vw)',
        rotate: 12,
        duration: 1.2,
    },
    {
        translateX: 'MIN(140px, calc(14px + 7vw))',
        translateY: 0,
        rotate: 8,
        duration: 1.1,
    },
    {
        translateX: 'MAX(-15px, calc(-1.5px - 0.75vw))',
        translateY: 'MAX(-120px, calc(-12px - 6vw))',
        rotate: 21,
        duration: 1.5,
    },
    {
        translateX: 0,
        translateY: 0,
        rotate: 4,
        duration: 1,
    },
    {
        translateX: 'MIN(20px, calc(2vw - 16px))',
        translateY: 'MAX(-60px, calc(-6px - 3vw))',
        rotate: 23,
        duration: 1.5,
    },
];

// 카드 리스트
export const cardList = [
    {
        id: encrypt(),
        type: 'card',
        title: 'FE',
        description: '프론트엔드 기술들을 확인할 수 있는 카드',
        imagePath: '/images/lion.png',
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'React',
                imagePath: '/images/react.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름1',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름2',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름3',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름4',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름5',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름6',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름7',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름8',
                                content: '리액트 (React)',
                            },
                        ],
                    },
                    {
                        title: '관련 사이트',
                        contentList: [
                            {
                                type: 'link',
                                title: '초기 세팅',
                                content:
                                    'https://zerchoaskhdasbd/qwehqjks/ASDq123/ajbdjk123/asmdbjk2@@#!/jabndjk123/@askdk',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Vue',
                imagePath: '/images/vue.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름1',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름2',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름3',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름4',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름5',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름6',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름7',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'text',
                                title: '이름8',
                                content: '리액트 (React)',
                            },
                        ],
                    },
                    {
                        title: '관련 사이트',
                        contentList: [
                            {
                                type: 'link',
                                title: '초기 세팅',
                                content: 'https://zerocho...',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Svelte',
                imagePath: '/images/svelte.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '스벨트 (Svelte)',
                            },
                        ],
                    },
                    {
                        title: '관련 사이트',
                        contentList: [
                            {
                                type: 'link',
                                title: '초기 세팅',
                                content: 'https://zerocho...',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: encrypt(),
        type: 'card',
        title: '디자인',
        description: '다양한 디자인들을 확인할 수 있는 카드',
        imagePath: '/images/lion.png',
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Pinterest',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '핀터레스트 (Pinterest)',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Behance',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '비핸스 (Behance)',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Awards',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '어워즈 (Awards)',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Awards',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '어워즈 (Awards)',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Awards',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '어워즈 (Awards)',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Awards',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '어워즈 (Awards)',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Awards',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '어워즈 (Awards)',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: encrypt(),
        type: 'card',
        title: '색상',
        description: '색상 조합들을 찾을 수 있게 도와주는 카드',
        imagePath: '/images/lion.png',
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'ColorHunt',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '컬러헌트 (ColorHunt)',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'ColorMind',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '컬러마인드 (ColorMind)',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: encrypt(),
        type: 'card',
        title: 'SVG',
        description: 'SVG를 만들 수 있게 도와주는 카드',
        imagePath: '/images/lion.png',
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Figma',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '피그마 (Figma))',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: encrypt(),
        type: 'card',
        title: 'CSS',
        description: '디테일한 CSS작업에 도움을 줄 수 있는 카드',
        imagePath: '/images/lion.png',
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Fancy',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '팬시 (Fancy-Border-Radius))',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Mattheulein',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '매튜라인 (Mattheulein))',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: encrypt(),
        type: 'card',
        title: 'CD',
        description: '자동 배포를 도와주는 카드',
        imagePath: '/images/lion.png',
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Vercel',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '버셀 (Vercel))',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Netlify',
                imagePath: '/images/lion.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '넷리파이 (Netlify))',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const _filterCardList = writable(cardList);

export const filterCardList = {
    ..._filterCardList,
    filter: (text: string): void => {
        let tempCardList = cardList.slice();
        text = text.toLocaleLowerCase();

        tempCardList = tempCardList.filter((card) => {
            let isFilter = false;

            if (card.title.toLocaleLowerCase().includes(text)) {
                isFilter = true;
            } else if (card.description.toLocaleLowerCase().includes(text)) {
                isFilter = true;
            } else {
                const iconList = card.iconList;
                iconList &&
                    iconList.forEach((icon) => {
                        if (isFilter) {
                            return false;
                        } else if (icon.title.toLocaleLowerCase().includes(text)) {
                            isFilter = true;
                            return false;
                        } else {
                            const infoList = icon.infoList;
                            infoList &&
                                infoList.forEach((info) => {
                                    if (isFilter) {
                                        return false;
                                    } else if (info.title.toLocaleLowerCase().includes(text)) {
                                        isFilter = true;
                                        return false;
                                    } else {
                                        const contentList = info.contentList;
                                        contentList &&
                                            contentList.forEach((content) => {
                                                if (content.title.toLocaleLowerCase().includes(text)) {
                                                    isFilter = true;
                                                    return false;
                                                } else if (content.content.toLocaleLowerCase().includes(text)) {
                                                    isFilter = true;
                                                    return false;
                                                }
                                            });
                                    }
                                });
                        }
                    });
            }

            return isFilter;
        });

        designList.forEach((design, index) => {
            if (tempCardList.length > index) {
                tempCardList[index].translateX = design.translateX as number;
                tempCardList[index].translateY = design.translateY as number;
                tempCardList[index].rotate = design.rotate;
                tempCardList[index].duration = design.duration;
            }
        });

        emptyList.forEach((empty) => {
            if (tempCardList.length >= empty) {
                tempCardList.splice(empty, 0, {
                    id: encrypt(),
                    type: 'blank',
                    title: '',
                    description: '',
                    imagePath: '',
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    duration: 0,
                    iconList: [],
                });
            }
        });

        _filterCardList.set(tempCardList);
    },
};

const _cardId = writable('');

export const cardId = {
    ..._cardId,
    change: (id: string): void => {
        _cardId.set(id);
    },
    changeIndex: (index: number): void => {
        const findCard = cardList.find((card, cardIndex) => cardIndex === index);
        findCard && _cardId.set(findCard.id);
    },
    getCard: (): Icard | undefined => {
        const findCard = cardList.find((card) => card.id === get(_cardId));
        return findCard;
    },
};

const _cardWheel = writable({
    up: false,
    down: false,
});

export const cardWheel = {
    ..._cardWheel,
    init: (): void => {
        const initWheel = {
            up: false,
            down: false,
        };

        _cardWheel.set(initWheel);
    },
    changeUp: (status: boolean): void => {
        const currentWheel = get(_cardWheel);
        currentWheel.up = status;

        _cardWheel.set(currentWheel);
    },
    changeDown: (status: boolean): void => {
        const currentWheel = get(_cardWheel);
        currentWheel.down = status;

        _cardWheel.set(currentWheel);
    },
};

const _iconId = writable('');

export const iconId = {
    ..._iconId,
    change: (id: string): void => {
        _iconId.set(id);
    },
    changeIndex: (index: number): void => {
        const findCard = cardList.find((card) => card.id === get(cardId));
        const findIcon = findCard && findCard.iconList.find((icon, iconIndex) => iconIndex === index);
        findIcon && _iconId.set(findIcon.id);
    },
};

const _iconWheel = writable({
    up: false,
    down: false,
});

export const iconWheel = {
    ..._iconWheel,
    init: (): void => {
        const initWheel = {
            up: false,
            down: false,
        };

        _iconWheel.set(initWheel);
    },
    changeUp: (status: boolean): void => {
        const currentWheel = get(_iconWheel);
        currentWheel.up = status;

        _iconWheel.set(currentWheel);
    },
    changeDown: (status: boolean): void => {
        const currentWheel = get(_iconWheel);
        currentWheel.down = status;

        _iconWheel.set(currentWheel);
    },
};
