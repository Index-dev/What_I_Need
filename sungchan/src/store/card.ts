import { get, writable } from 'svelte/store';
import shortid from 'shortid';

const encrypt = () => shortid.generate();

// 빈 카드 인덱스
const emptyList = [2, 4, 7];

// 카드 뒷면 색생
const cardColor1 = '#5BAED1';
const cardColor2 = '#A75064';
const cardColor3 = '#A84FA1';

interface Icard {
    id: string;
    type: string;
    title: string;
    description: string;
    tags: string[];
    imagePath: string;
    color: string;
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
        tags: ['FrontEnd'],
        imagePath: '/images/fe.svg',
        color: cardColor1,
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
                                title: '이름',
                                content: '리액트 (React)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://ko.reactjs.org',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2013년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '2021년 기준 FE진영에서 가장 많이 사용되는 SPA기술로서 대부분의 개발을 자바스크립트를 이용하는 JSX라는 특징을 가짐',
                            },
                        ],
                    },
                    {
                        title: '관련 사이트',
                        contentList: [
                            {
                                type: 'link',
                                title: '초기 설정',
                                content: 'https://jforj.tistory.com/145',
                            },
                            {
                                type: 'link',
                                title: '라우터 설정',
                                content: 'https://jforj.tistory.com/146',
                            },
                            {
                                type: 'link',
                                title: 'Redux 설정',
                                content: 'https://jforj.tistory.com/148',
                            },
                            {
                                type: 'link',
                                title: 'MobX 설정',
                                content: 'https://jforj.tistory.com/154',
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
                                title: '이름',
                                content: '뷰 (Vue)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://vuejs.org',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2014년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '기존 html과 유사한 형태로 개발되기 때문에 처음 SPA를 배우는 개발자들이 느끼는 러닝커브가 낮음',
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
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://svelte.dev',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2019년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '가상돔을 사용하지 않는 SPA기술로 가상돔의 오버헤드를 줄여줄 수 있고 또한 가상돔이 있는 것과 같은 빠른 렌더링을 제공',
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
        tags: ['Design'],
        imagePath: '/images/design.svg',
        color: cardColor2,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Pinterest',
                imagePath: '/images/pinterest.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '핀터레스트 (Pinterest)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://www.pinterest.co.kr',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2010년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '이미지 보드에 핀으로 사진을 꽂는 것과 비슷한 개념으로 이미지 파일들을 모으고 관리할 수 있음',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Behance',
                imagePath: '/images/behance.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '비핸스 (Behance)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://www.behance.net',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2005년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content: '저작한 작품 등을 전시하고 검색할 수 있는 온라인 웹 사이트',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Awards',
                imagePath: '/images/awards.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '어워즈 (Awards)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://www.awwwards.com',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2009년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '혁신적인 웹 디자인의 최고를 인정하고 홍보하는 것을 목표로 만들어진 웹 디자인 및 개발 경쟁 사이트',
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
        tags: ['색깔'],
        imagePath: '/images/color.svg',
        color: cardColor3,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'ColorHunt',
                imagePath: '/images/colorhunt.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '컬러헌트 (ColorHunt)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://colorhunt.co',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content: '4가지의 여러 가지 색상 조합들을 모아놓은 사이트',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'ColorMind',
                imagePath: '/images/colormind.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '컬러마인드 (ColorMind)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'http://colormind.io',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '사용자들이 선택한 색상들과 어울리는 여러 가지 색상들을 자동으로 매칭시켜주는 사이트',
                            },
                            {
                                type: 'text',
                                title: '개발자 경험',
                                content: '가끔씩 서버가 다운되어 사용하지 못하는 경우가 있음',
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
        tags: ['이미지', 'image'],
        imagePath: '/images/svg.svg',
        color: cardColor1,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Figma',
                imagePath: '/images/figma.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '피그마 (Figma)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://www.figma.com',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2016년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content: '웹 기반 무료 벡터 그래픽 편집기 및 프로토타이핑 도구',
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
        tags: [],
        imagePath: '/images/css.svg',
        color: cardColor2,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Fancy',
                imagePath: '/images/fancy.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '팬시 (Fancy-Border-Radius)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://9elements.github.io/fancy-border-radius',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content: 'border-radius의 비율을 시각적으로 표현해 둔 웹 사이트',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Matthewlein',
                imagePath: '/images/Matthewlein.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '매튜라인 (Matthewlein)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://matthewlein.com/tools/ceaser',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content: 'cubic-bezier의 비율을 시각적으로 표현해 둔 웹 사이트',
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
        tags: [],
        imagePath: '/images/cd.svg',
        color: cardColor3,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 0,
        iconList: [
            {
                id: encrypt(),
                title: 'Vercel',
                imagePath: '/images/vercel.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '버셀 (Vercel)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://vercel.com',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '개발된 소스코드를 기반으로 지속적 배포를 하여 개인 소유의 서버없이도 무료로 정적 사이트를 배포 할 수 있도록 도와줌',
                            },
                            {
                                type: 'text',
                                title: '개발자 경험',
                                content: 'CDN이 서울에 있어 배포된 사이트를 한국에서 접속할 경우 속도가 빠른편 ',
                            },
                        ],
                    },
                ],
            },
            {
                id: encrypt(),
                title: 'Netlify',
                imagePath: '/images/netlify.png',
                infoList: [
                    {
                        title: '기본 정보',
                        contentList: [
                            {
                                type: 'text',
                                title: '이름',
                                content: '넷리파이 (Netlify)',
                            },
                            {
                                type: 'link',
                                title: '공식 사이트',
                                content: 'https://www.netlify.com',
                            },
                            {
                                type: 'text',
                                title: '출시일',
                                content: '2014년',
                            },
                            {
                                type: 'text',
                                title: '간단 소개',
                                content:
                                    '개발된 소스코드를 기반으로 지속적 배포를 하여 개인 소유의 서버없이도 무료로 정적 사이트를 배포 할 수 있도록 도와줌',
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

            // 태그 검색
            card.tags.forEach((tag) => {
                if (tag.toLocaleLowerCase().includes(text)) {
                    isFilter = true;
                    return false;
                }
            });

            if (!isFilter) {
                if (card.title.toLocaleLowerCase().includes(text)) {
                    // 타이틀 검색
                    isFilter = true;
                } else if (card.description.toLocaleLowerCase().includes(text)) {
                    // 설명 검색
                    isFilter = true;
                } else {
                    const iconList = card.iconList;
                    iconList &&
                        iconList.forEach((icon) => {
                            if (isFilter) {
                                return false;
                            } else if (icon.title.toLocaleLowerCase().includes(text)) {
                                // 아이콘 타이틀 검색
                                isFilter = true;
                                return false;
                            } else {
                                const infoList = icon.infoList;
                                infoList &&
                                    infoList.forEach((info) => {
                                        if (isFilter) {
                                            return false;
                                        } else if (info.title.toLocaleLowerCase().includes(text)) {
                                            // 세부정보 타이틀 검색
                                            isFilter = true;
                                            return false;
                                        } else {
                                            const contentList = info.contentList;
                                            contentList &&
                                                contentList.forEach((content) => {
                                                    if (content.title.toLocaleLowerCase().includes(text)) {
                                                        // 콘텐츠 타이틀 검색
                                                        isFilter = true;
                                                        return false;
                                                    } else if (content.content.toLocaleLowerCase().includes(text)) {
                                                        // 콘텐츠 내용 검색
                                                        isFilter = true;
                                                        return false;
                                                    }
                                                });
                                        }
                                    });
                            }
                        });
                }
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
                    tags: [],
                    imagePath: '',
                    color: '',
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
