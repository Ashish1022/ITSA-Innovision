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


export interface Event {
    date: string;
    title: string;
    description: string;
  
    image: string;
    color: string;
  }