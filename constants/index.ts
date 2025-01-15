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
        name: "Members",
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
        name: "Members",
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
        name: "Members",
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
        name: "Members",
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
        name: "Members",
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
        name: "Members",
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
        name: "Members",
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
        name: "Members",
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
  
  { id: 1, src: "/assets/gallery/memories/memories1.jpeg", alt: "Photo 1", category: "Memories", title: "Dussehra Pooja" },
  { id: 2, src: "/assets/gallery/memories/memories2.jpeg", alt: "Photo 1", category: "Memories", title: "Industrial Visit" },
  { id: 3, src: "/assets/gallery/memories/memories3.jpeg", alt: "Photo 1", category: "Memories", title: "Photobooth" },
  { id: 4, src: "/assets/gallery/memories/memories4.jpeg", alt: "Photo 1", category: "Memories", title: "Dart Throw" },
  { id: 5, src: "/assets/gallery/memories/memories5.jpeg", alt: "Photo 1", category: "Memories", title: "Dussehra" },

  { id: 6, src: "/assets/images/human_ludo.jpg", alt: "Photo 1", category: "Events", title: "Human Ludo" },
  { id: 7, src: "/assets/images/dart_throw.webp", alt: "Photo 1", category: "Events", title: "Dart Throw" },
  { id: 8, src: "/assets/images/escape_room.webp", alt: "Photo 1", category: "Events", title: "Escape Room" },
  { id: 9, src: "/assets/images/tech_expo.webp", alt: "Photo 1", category: "Events", title: "Tech Expo" },

  { id: 10, src: "/assets/gallery/Sports/WhatsApp Image 2025-01-15 at 10.02.56 PM.jpeg", alt: "Photo 1", category: "Sports", title: "Human Ludo" },
  { id: 11, src: "/assets/gallery/Sports/WhatsApp Image 2025-01-15 at 10.02.56 PM (1).jpeg", alt: "Photo 1", category: "Sports", title: "Dart Throw" },

  // Add more images...
];
