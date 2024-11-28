// types.ts
export interface Member {
    name: string;
    image: string;
    description: string;
}

export interface Team {
    name: string;
    head: Member;
    members: Member[];
}
