import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]); // Use state to store the user data

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/users");
        const result = await response.json();
        setUser(result); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
console.log(user)
  return (
    <>
      <h1>User List</h1>
      {user.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
    </>
  );
};

export default User;
