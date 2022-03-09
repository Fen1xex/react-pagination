export const pagination = (followers) => {
  const itemsPerPage = 10
  const pages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = itemsPerPage * index
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}
