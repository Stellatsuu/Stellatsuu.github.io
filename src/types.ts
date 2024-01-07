export interface Project {
    id: number;
    name: string;
    tags: string;
    logo: string;
    date: string;
    roles: string;
    description: string;
    link: string;
}

export interface Language {
    id: number;
    name: string;
    hours: number;
    minutes: number;
    percent: number;
    total_seconds: number;
}