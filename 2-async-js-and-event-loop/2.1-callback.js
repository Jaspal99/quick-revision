function fetchUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "jaspal" });
  }, 1000);
}

fetchUser((user) => console.log(user.name));    // O/P: jaspal
