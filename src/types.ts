export interface ProjetPreview {
    id: number;
    titre: string;
    description: string;
    image: string;
}

export interface Language {
    id: number;
    name: string;
    hours: number;
    minutes: number;
    percent: number;
    total_seconds: number;
}