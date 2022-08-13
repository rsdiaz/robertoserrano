const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString('es', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

export { formatDate }