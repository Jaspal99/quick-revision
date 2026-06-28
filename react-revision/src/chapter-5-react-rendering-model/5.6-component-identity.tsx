export default function DashboardRenderer({
  showAdmin,
}: {
  showAdmin: boolean;
}) {
//   return showAdmin ? <Dashboard role="admin" /> : <Dashboard role="user" />;
    return <Dashboard key={showAdmin ? "admin" : "user"} role={showAdmin ? "admin" : "user"} />; 
    //same component type in the same position can preserve state, add a key
}

function Dashboard({ role }: { role: string }) {
  console.log("Dashboard rendered");
  return <div>{role}</div>;
}
