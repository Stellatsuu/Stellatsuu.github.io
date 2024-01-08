export interface Project {
    name: string;
    tags: string;
    logo: string;
    date: string;
    roles: string;
    description: string;
    link: string;
    pn_but: {name: string, description: string, level: string}[];
}

export interface Language {
    id: number;
    name: string;
    hours: number;
    minutes: number;
    percent: number;
    total_seconds: number;
}