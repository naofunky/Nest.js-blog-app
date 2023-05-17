export async function getAllPosts() {
  const response = await fetch('http://localhost:5500/posts', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
}

export async function getPostById(id: string) {
  const response = await fetch(`http://localhost:5500/posts/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
}
