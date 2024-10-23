export const headerLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Events',
        route: '/profile',
    },
    {
        label: 'Teams',
        route: '/teams',
    },
    {
        label: 'Create Event',
        route: '/event/create-event',
    },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}