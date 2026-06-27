function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function searchQuery(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 1000);

debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java");
debouncedSearch("javascript");

console.log("Typing finished..."); 

// O/P: 
// Typing finished...
// Searching for: javascript (after 1 second of inactivity)
