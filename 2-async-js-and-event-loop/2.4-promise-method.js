const [posts, comments] = await Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
  fetch("https://jsonplaceholder.typicode.com/comments").then((r) => r.json()),
]);

console.log(posts, comments);
