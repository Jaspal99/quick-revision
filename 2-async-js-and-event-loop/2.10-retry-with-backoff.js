async function retry(fn, attempts = 3, delay = 500) {
  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      console.log(`Attempt ${i + 1}`);
      return await fn();
    } catch (error) {
      lastError = error;

      if (i < attempts - 1) {
        const waitTime = delay * (i + 1);
        console.log(`Failed. Retrying in ${waitTime}ms...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }
  }

  throw lastError;
}

async function quickCall() {
  const response = await fetch("fake-url"); // This URL is intentionally incorrect to simulate failure

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

retry(quickCall)
  .then((comments) => {
    console.log("Success!");
    console.log("Total comments:", comments.length);
    console.log("First comment:", comments[0].name);
  })
  .catch((error) => {
    console.log("All retries failed:", error.message);
  });
