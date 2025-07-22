export interface Friend {
    id: string;
    name: string;
    photo: string;
    backgroundColor: string;
    textColor: string;
    messages: MessageHistory[];
    chibiImage?: string;
}

export interface MessageHistory {
    year: number;
    text: string;
}

export interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface GalleryImage {
    id: string;
    url: string;
    alt: string;
    caption?: string;
    friendId: string;
    friendName: string;
}