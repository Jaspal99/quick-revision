function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    async function run() {
      const response = await fetch(`${query}`, {
        signal: controller.signal,
      }).then((r) => setResults(r.json()));
    }
    run().catch((error) => {
      if (error.name == "AbortError") console.error("Aborted");
    });

    return () => controller.abort();
  }, [query]);
}
