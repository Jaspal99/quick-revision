const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/comments", { signal })
  .then((r) => r.json())
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request was aborted");
    } else {
      console.error(error);
    }
  });

  controller.abort(); // Aborts the fetch request