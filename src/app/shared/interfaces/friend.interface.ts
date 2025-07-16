export interface Friend {
    id: string;
    name: string;
    photo: string;
    message: string;
    backgroundColor: string;
    textColor: string;
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