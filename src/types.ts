export interface NavItem {
    name: string;
    path: string;
    icon?: string;
}

export interface LifeLesson {
    id: number;
    title: string;
    content: string;
    icon: string;
    color: string;
}

export interface Encouragement {
    id: number;
    message: string;
    emoji: string;
}

export interface MediaItem {
    id: number;
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption?: string;
}
