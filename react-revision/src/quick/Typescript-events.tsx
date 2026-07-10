const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  console.log(`Name: ${name}, Email: ${email}`);
}
useDebounce(handleSubmit, 300);
