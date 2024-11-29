import EventCard from "./EventCard";


const events = [
  {
    id: 1,
    title: "Annual Sports Meet",
    image: "/assets/teams/team.webp",
    category: "Sports",
    description: "A celebration of athleticism and teamwork.",
  },
  {
    id: 2,
    title: "Cultural Fest",
    image: "/assets/teams/team.webp",
    category: "Festivals",
    description: "Experience the vibrant culture of our campus.",
  },
  {
    id: 3,
    title: "Pooja Ceremony",
    image: "/assets/teams/team.webp",
    category: "Pooja",
    description: "A spiritual start to our events.",
  },
];

export default function EventGallery() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </section>
  );
} 