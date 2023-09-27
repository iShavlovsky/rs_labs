export type arrowsDirection =
    | 'up'
    | 'down'
    | 'right'
    | 'left'
    | 'up-right'
    | 'up-left'
    | 'down-right'
    | 'down-left';

export enum sectionsName {
    S1 = 'Revenue Share Labs',
    S2 = 'Mission',
    S3 = 'about',
    S4 = 'technology',
    S5 = 'team',
    S6 = 'knowledge base',
    S7 = 'mission2',
    S8 = 'mission3'
}

type ArrowObject = {
    [key in arrowsDirection]?: number;
};

export interface Positions {
    chapter: number;
    title: sectionsName;
    line: string;
    rectMap: {
        x: number,
        y: number
    };
    rectSelected: {
        x: number,
        y: number
    };
    path: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    active: boolean;
    hover: boolean;
    arrows: ArrowObject;
}
