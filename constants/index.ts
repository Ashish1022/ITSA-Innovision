import { Event, Team } from "@/types";

export const adminHeaderLinks = [
  {
    label: 'Create Event',
    route: '/admin/events/create',
  },
  {
    label: 'Events',
    route: '/admin/events',
  },

];
export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Events',
    route: '/events',
  },
  {
    label: 'Teams',
    route: '/teams',
  },
  {
    label: 'Gallery',
    route: '/gallery',
  },
];


export const events: Event[] = [
  {
    date: "2023-03-19",
    title: "INNOVISION 2023",
    description: "Celebrated the new year.",
    image: "/assets/images/human_ludo.webp",
    color: "bg-red-300",
  },
  {
    date: "2023-03-20",
    title: "STUDENT FESTIVAL",
    description: "An unforgettable cultural experience.",
    image: "/assets/images/human_ludo.webp",
    color: "bg-blue-300",
  },
  {
    date: "2023-04-15",
    title: "SPORTS DAY",
    description: "Bringing out the competitive spirit.",
    image: "/assets/images/human_ludo.webp",
    color: "bg-green-300",
  },
  {
    date: "2023-05-10",
    title: "ECO CAMPAIGN",
    description: "Promoting sustainability in our college.",
    image: "/assets/images/human_ludo.webp",
    color: "bg-yellow-300",
  },
  // Add more events as needed
];


export const teams: Team[] = [
  {
    name: "Cultural Team",
    head: {
      name: "Head",
      image: "/assets/teams/culturalhead.jpeg",
      description: "Leads all cultural activities.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/culturalteam.jpeg",
        description: "In charge of cultural events.",
      },
    ],
  },
  {
    name: "Creative Team",
    head: {
      name: "Head",
      image: "/assets/teams/creativehead.jpeg",
      description: "Manages all creative events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/creativeteam.jpeg",
        description: "In charge of creative events.",
      },
    ],
  },
  {
    name: "Technical Team",
    head: {
      name: "Head",
      image: "/assets/teams/techhead.jpeg",
      description: "Manages all technical events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/technicalteam.jpeg",
        description: "In charge of technical events.",
      },
    ],
  },
  {
    name: "Sponsors Team",
    head: {
      name: "Head",
      image: "/assets/teams/sposnhead.jpeg",
      description: "Manages all sponosors.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/prsponsorteam.jpeg",
        description: "In charge of sponsorships.",
      },
    ],
  },
  {
    name: "Social Media Team",
    head: {
      name: "Head",
      image: "/assets/teams/socailhead.jpeg",
      description: "Manages all sponosors.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/socialmediateam.jpeg",
        description: "In charge of sponsorships.",
      },
    ],
  },
  {
    name: "Graphic Design Team",
    head: {
      name: "Head",
      image: "/assets/teams/gdhead.jpeg",
      description: "Manages all sponosors.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/gdteam.jpeg",
        description: "In charge of sponsorships.",
      },
    ],
  },
  {
    name: "Editorial Team",
    head: {
      name: "Head",
      image: "/assets/teams/editorialhead.jpeg",
      description: "Manages all sponosors.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/editorialteam.jpeg",
        description: "In charge of sponsorships.",
      },
    ],
  },
  {
    name: "Public Relation Team",
    head: {
      name: "Head",
      image: "/assets/teams/prteam.jpeg",
      description: "Manages all sponosors.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/prsponsorteam.jpeg",
        description: "In charge of sponsorships.",
      },
    ],
  },
];


export const carousel = [
  {
    id: 1,
    img: '/assets/teams/itsa.webp'
  },
  {
    id: 2,
    img: '/assets/teams/team.webp'
  },
  {
    id: 3,
    img: '/assets/images/faculty_collab.png'
  },
]


export const images = [
  // { id: 1, src: "/assets/gallery/memories/memories1.jpeg", alt: "Photo 1", category: "Memories", title: "Dussehra Pooja" },
  // { id: 2, src: "/assets/gallery/memories/memories2.jpeg", alt: "Photo 1", category: "Memories", title: "Industrial Visit" },
  // { id: 3, src: "/assets/gallery/memories/memories3.jpeg", alt: "Photo 1", category: "Memories", title: "Photobooth" },
  // { id: 4, src: "/assets/gallery/memories/memories4.jpeg", alt: "Photo 1", category: "Memories", title: "Dart Throw" },
  // { id: 5, src: "/assets/gallery/memories/memories5.jpeg", alt: "Photo 1", category: "Memories", title: "Dussehra" },
  // Add more images...
];

export const about = [
  { name: "Gold", symbol: "☉", description: "The perfection of all matter, symbolizing the Sun." }, 
  { name: "Silver", symbol: "☽", description: "The Moon, representing purity and clarity." }, 
  { name: "Mercury", symbol: "☿", description: "Fluidity, transformation, and duality." }, 
  { name: "Lead", symbol: "♄", description: "Base matter, representing Saturn and mortality." }, 
  { name: "Copper", symbol: "♀", description: "Associated with Venus, representing love and balance." },
  { name: "Iron", symbol: "♂", description: "Associated with Mars, symbolizing strength and courage." }, 
   { name: "Tin", symbol: "♃", description: "Associated with Jupiter, symbolizing wisdom and expansion." }, 
   { name: "Antimony", symbol: "🜛", description: "Symbolizing the wild and untamed aspect of matter." }, 
   { name: "Sulfur", symbol: "🜍", description: "Representing the soul and combustion." }, 
   { name: "Salt", symbol: "🜔", description: "Symbolizing the body and crystallization." }, 
   { name: "Earth", symbol: "🜃", description: "The element of stability and groundedness." }, 
   { name: "Water", symbol: "🜄", description: "The element of emotion, intuition, and fluidity." }, 
   { name: "Air", symbol: "🜁", description: "The element of intellect and communication." }, 
   { name: "Fire", symbol: "🜂", description: "The element of energy, passion, and transformation." }, 
   { name: "Philosopher's Stone", symbol: "🜓", description: "A mythical substance symbolizing ultimate perfection." },
    { name: "Arsenic", symbol: "🜺", description: "A symbol representing transformation and volatility." }, 
    { name: "Vitriol", symbol: "🜖", description: "Representing purification through internal discovery." },
     { name: "Amalgam", symbol: "🝛", description: "A mixture or blend, symbolizing unity and harmony." }, 
     { name: "Aqua Regia", symbol: "🜆", description: "A potent solvent capable of dissolving gold, symbolizing power." }, 
     { name: "Ethereal Fire", symbol: "🜎", description: "A mystical flame representing divine energy and spiritual transformation." }
]