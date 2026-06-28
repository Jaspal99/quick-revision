import { useState } from "react";

export default function Counter() {
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState({
    name: "",
    role: "",
    open: false,
  });
  function handleClick() {
    setName("Jaspal");
    setRole("Software Engineer");
    setOpen(true);
    setUser({ name: "Jaspal", role: "Software Engineer", open: true });
  }

  return (
    <div>
      <button onClick={handleClick}>Update</button>
      <div>user details:</div>
      <div>
        Name: {name} || {user.name}{" "}
      </div>
      <div>
        Role: {role} || {user.role}{" "}
      </div>
      <div>
        Open: {open} || {user.open}{" "}
      </div>
    </div>
  );
}
