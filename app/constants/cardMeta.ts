import { CARD_URI } from './cardUri'
import {
    CARD_TITLE,
    CARD_MAIN_TEXT,
    CARD_SUB_TEXT,
    CARD_FOOTER_TEXT,
    CARD_IMAGE,
    ULTRASOUND_IMAGE,
    HEARTBEAT_AUDIO
} from './cardContents'

export const CARD_META = {
    [CARD_URI.HALMONIM]: {
        name: '할머니&할아버지',
        roles: ['할머니', '할아버지'],
        title: CARD_TITLE.HALMONIM ?? '❤️ 할머니, 할아버지 ❤️',
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: ULTRASOUND_IMAGE.DEFAULT,
        heartbeatAudio: HEARTBEAT_AUDIO.DEFAULT
    },

    [CARD_URI.IMO]: {
        name: '이모',
        roles: ['이모'],
        title: CARD_TITLE.IMO,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: ULTRASOUND_IMAGE.DEFAULT,
        heartbeatAudio: HEARTBEAT_AUDIO.DEFAULT
    },

    [CARD_URI.SAMCHON]: {
        name: '삼촌',
        roles: ['삼촌'],
        title: CARD_TITLE.SAMCHON,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: ULTRASOUND_IMAGE.DEFAULT,
        heartbeatAudio: HEARTBEAT_AUDIO.DEFAULT
    },

    [CARD_URI.MAMA_FAMILY]: {
        name: '이모&이모부',
        roles: ['이모', '이모부'],
        title: CARD_TITLE.MAMA_FAMILY,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: ULTRASOUND_IMAGE.DEFAULT,
        heartbeatAudio: HEARTBEAT_AUDIO.DEFAULT
    },

    [CARD_URI.PAPA_FAMILY]: {
        name: '고모&고모부',
        roles: ['고모', '고모부'],
        title: CARD_TITLE.PAPA_FAMILY,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: ULTRASOUND_IMAGE.DEFAULT,
        heartbeatAudio: HEARTBEAT_AUDIO.DEFAULT
    },

    [CARD_URI.MA_PA_FRIENDS]: {
        name: '정화&기중 친구들',
        roles: ['이모', '삼촌'],
        title: CARD_TITLE.MA_PA_FRIENDS,
        mainText: CARD_MAIN_TEXT.BLING_KR_HELLO,
        subText: CARD_SUB_TEXT.SEPTEMBER_KR,
        footerText: CARD_FOOTER_TEXT.LOVE_KR,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: ULTRASOUND_IMAGE.DEFAULT,
        heartbeatAudio: HEARTBEAT_AUDIO.DEFAULT
    },

    [CARD_URI.YY]: {
        name: 'Yunyoung&Max',
        roles: ['이모', '삼촌'],
        title: CARD_TITLE.YY,
        mainText: CARD_MAIN_TEXT.BLING_EN,
        subText: CARD_SUB_TEXT.SEPTEMBER_EN,
        footerText: CARD_FOOTER_TEXT.LOVE_EN,
        babyImage: CARD_IMAGE.DEFAULT,
        ultrasoundImage: ULTRASOUND_IMAGE.DEFAULT,
        heartbeatAudio: HEARTBEAT_AUDIO.DEFAULT
    },
} as const
