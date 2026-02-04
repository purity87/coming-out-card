export const CARD_URI = {
    HALMONIM: '/halmonim',
    IMO: '/imo',
    SAMCHON: '/samchon',
    MAMA_FAMILY: '/mama-family',
    PAPA_FAMILY: '/papa-family',
    MA_PA_FRIENDS: '/ma-pa-friends',
    HS: '/hs',
    SI: '/si',
    YY: '/yy',
    JW: '/jw'
} as const

export type CardUri = typeof CARD_URI[keyof typeof CARD_URI]
