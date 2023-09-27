export const icons = {
    svg: [
        'logoDeals',
        'rsLabsLogo',
        'close-ico'
    ],
    arrows: [
        'arrowBack',
        'arrowBtn',
        'arrowRight'
    ],
    social: [
        'instagram',
        'telegram',
        'notion',
        'twitter'
    ],
    logos: [
        'logo-12S',
        'logo-CRIPTORG',
        'logo-CT',
        'logo-EF',
        'logo-ES',
        'logo-MD',
        'logo-PF',
        'logo-TON',
        'logo-TV',
        'logo-VELAS',
        'logo-XLA',
        'logo-XSOLLA'
    ]
} as const;

type Icons = typeof icons;
type AllFolderKeys = keyof Icons;
type AllIconKeys = {
    [K in AllFolderKeys]: Icons[K] extends readonly string[] ? Icons[K][number] : never;
};

export type ValidKeys = {
    [K in AllFolderKeys]: `${K}.${AllIconKeys[K]}`;
}[AllFolderKeys];

type GetIconsByFolder<Folder extends keyof Icons> = Icons[Folder][number];

export function getByDotName(key: string): {
    folder: AllFolderKeys;
    name: GetIconsByFolder<AllFolderKeys>
} {
    const [folder, icon] = key.split('.');
    const folderTyped = folder as AllFolderKeys;
    const iconArray = icons[folderTyped] as readonly GetIconsByFolder<AllFolderKeys>[];
    if (!iconArray.includes(icon as GetIconsByFolder<AllFolderKeys>)) {
        throw new Error(`Invalid svg key: ${key}`);
    }
    return { folder: folderTyped, name: icon as GetIconsByFolder<AllFolderKeys> };
}

