//making larger ui with smaller ui components is called component composition

import UserCard from "./4.3-components";
import Status from "./4.7-conditional-rendering";
import List from "./4.8-list-and-keys";
export default function Demo() {
  return (
    <div>
      <UserCard name="John Doe" role="Software Engineer" />

      <Status isLoading={true} />
      <List
        list={[
          { id: "john-doe", name: "John Doe" },
          { id: "jane-doe", name: "Jane Doe" },
        ]}
      />
    </div>
  );
}
