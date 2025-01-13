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
    label: 'About',
    route: '/about',
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
      image: "/assets/teams/cultural_head.heic",
      description: "Leads all cultural activities.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/cultural_team.heic",
        description: "In charge of cultural events.",
      },
    ],
  },
  {
    name: "Creative Team",
    head: {
      name: "Head",
      image: "/assets/teams/creative_head.heic",
      description: "Manages all creative events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/creative_team.heic",
        description: "In charge of creative events.",
      },
    ],
  },
  {
    name: "Technical Team",
    head: {
      name: "Head",
      image: "/assets/teams/tech_head.heic",
      description: "Manages all technical events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/tech_team.heic",
        description: "In charge of technical events.",
      },
    ],
  },
  {
    name: "Sponsors Team",
    head: {
      name: "Head",
      image: "/assets/teams/sponsor_head.heic",
      description: "Manages all sponosors.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/sponsorship_team.heic",
        description: "In charge of sponsorships.",
      },
    ],
  },
  {
    name: "PR Team",
    head: {
      name: "Head",
      image: "/assets/teams/pr_head.heic",
      description: "Manages the PR department.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/pr_team.heic",
        description: "In charge of PR.",
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
  { id: 1, src: "/assets/teams/itsa.webp", alt: "Photo 1", category: "Portraits", title: "Sunlit Smile" },
  { id: 2, src: "/assets/teams/itsa.webp", alt: "Photo 2", category: "Landscapes", title: "Mountain Majesty" },
  { id: 3, src: "/assets/teams/itsa.webp", alt: "Photo 3", category: "Events", title: "Festival Vibes" },
  { id: 4, src: "/assets/teams/itsa.webp", alt: "Photo 1", category: "Portraits", title: "Sunlit Smile" },
  { id: 5, src: "/assets/teams/itsa.webp", alt: "Photo 2", category: "Landscapes", title: "Mountain Majesty" },
  { id: 6, src: "/assets/teams/itsa.webp", alt: "Photo 3", category: "Events", title: "Festival Vibes" },
  { id: 7, src: "/assets/teams/itsa.webp", alt: "Photo 1", category: "Portraits", title: "Sunlit Smile" },
  { id: 8, src: "/assets/teams/itsa.webp", alt: "Photo 2", category: "Landscapes", title: "Mountain Majesty" },
  { id: 9, src: "/assets/teams/itsa.webp", alt: "Photo 3", category: "Events", title: "Festival Vibes" },
  { id: 10, src: "/assets/teams/itsa.webp", alt: "Photo 1", category: "Portraits", title: "Sunlit Smile" },
  { id: 11, src: "/assets/teams/itsa.webp", alt: "Photo 2", category: "Landscapes", title: "Mountain Majesty" },
  { id: 12, src: "/assets/teams/itsa.webp", alt: "Photo 3", category: "Events", title: "Festival Vibes" },
  // Add more images...
];