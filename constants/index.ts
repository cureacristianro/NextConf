export const headerLinks = [
  {
    label: 'Acasă',
    route: '/',
  },
  {
    label: 'Creează Eveniment',
    route: '/events/create',
  },
  {
    label: 'Profil',
    route: '/profile',
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
