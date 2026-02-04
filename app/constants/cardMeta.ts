import { CARD_URI } from './cardUri'
import {
    CARD_TITLE,
    CARD_MAIN_TEXT,
    CARD_SUB_TEXT,
    CARD_FOOTER_TEXT,
    CARD_IMAGE, UltraSound_IMAGE
} from './cardContents'

export const CARD_META = {
    [CARD_URI.HALMONIM]: {
        name: '할머니&할아버지',
        roles: ['할머니', '할아버지'],
        title: CARD_TITLE.HALMONIM,
        mainText: CARD_MAIN_TEXT.BLING_KR,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.IMO]: {
        name: '이모',
        roles: ['이모'],
        title: CARD_TITLE.IMO,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.SAMCHON]: {
        name: '삼촌',
        roles: ['삼촌'],
        title: CARD_TITLE.SAMCHON,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.WAIT_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.MAMA_FAMILY]: {
        name: '이모&이모부',
        roles: ['이모', '이모부'],
        title: CARD_TITLE.MAMA_FAMILY,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.WAIT_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.PAPA_FAMILY]: {
        name: '고모&고모부',
        roles: ['고모', '고모부'],
        title: CARD_TITLE.PAPA_FAMILY,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.WAIT_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.MA_PA_FRIENDS]: {
        name: '정화&기중 친구들',
        roles: ['이모', '삼촌'],
        title: CARD_TITLE.MA_PA_FRIENDS,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.WAIT_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.HS]: {
        name: '형신&상연',
        roles: ['이모', '삼촌'],
        title: CARD_TITLE.HS,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.WAIT_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.SI]: {
        name: '성인&도영',
        roles: ['이모', '삼촌'],
        title: CARD_TITLE.SI,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.WAIT_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.YY]: {
        name: 'Yunyoung&Max',
        roles: ['이모', '삼촌'],
        title: CARD_TITLE.YY,
        mainText: CARD_MAIN_TEXT.BLING_EN,
        subText: CARD_SUB_TEXT.SEPTEMBER_EN,
        footerText: CARD_FOOTER_TEXT.LOVE_EN,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },

    [CARD_URI.JW]: {
        name: '지원',
        roles: ['이모'],
        title: CARD_TITLE.JW,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.WAIT_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: UltraSound_IMAGE.DEFAULT,
        heartbeatAudio: undefined,
    },
} as const
