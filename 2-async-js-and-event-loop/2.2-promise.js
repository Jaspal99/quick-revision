function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1 });
    }, 500);
  });
}

getUser()
  .then((user) => console.log(user.id))
  .catch((error) => console.error(error))
  .finally(() => console.log("done")); // O/P: 1, done
