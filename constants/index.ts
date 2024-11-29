import { Team } from "@/types";

export const adminHeaderLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/admin/events/create',
  },
  {
    label: 'Events',
    route: '/admin/events',
  },
  {
    label: 'Create Teams',
    route: '/admin/teams/create',
  },
  {
    label: 'Teams',
    route: '/admin/teams',
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
    label: 'Memories',
    route: '/memories',
  },
];


export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
        description: "In charge of music events.",
      },
    ],
  },
  {
    name: "Creative Team",
    head: {
      name: "Head",
      image: "/assets/teams/creative_head.heic",
      description: "Manages all sports events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/creative_team.heic",
        description: "In charge of music events.",
      },
    ],
  },
  {
    name: "Technical Team",
    head: {
      name: "Head",
      image: "/assets/teams/tech_head.heic",
      description: "Manages all sports events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/tech_team.heic",
        description: "In charge of music events.",
      },
    ],
  },
  {
    name: "Sponsors Team",
    head: {
      name: "Head",
      image: "/assets/teams/sponsor_head.heic",
      description: "Manages all sports events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/sponsorship_team.heic",
        description: "In charge of music events.",
      },
    ],
  },
  {
    name: "PR Team",
    head: {
      name: "Head",
      image: "/assets/teams/pr_head.heic",
      description: "Manages all sports events.",
    },
    members: [
      {
        name: "Member",
        image: "/assets/teams/pr_team.heic",
        description: "In charge of music events.",
      },
    ],
  },
];