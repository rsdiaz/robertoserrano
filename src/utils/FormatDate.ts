const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export { formatDate }