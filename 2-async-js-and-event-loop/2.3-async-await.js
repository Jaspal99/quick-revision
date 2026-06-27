async function loadUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) throw new Error("failed to load users");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const user = await loadUser();
console.log(user); //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }