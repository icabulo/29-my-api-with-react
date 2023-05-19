import { FavsList } from "../components/FavsList";
import { SearchList } from "../components/SearchList";
import { InvalidUser } from "../components/InvalidUser";
import { useEffect, useState } from "react";

function UserDashboard() {
  const [userLists, setUserLists] = useState([]);
  //   console.log(userLists);

  const { token } = JSON.parse(localStorage.getItem("user"));
  console.log("TOKEN localStorage", token);
  const url = "http://localhost:5000/api/favs";

  const getLists = async () => {
    try {
      const request = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await request.json();
      console.log(data);
      setUserLists(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getLists();
      //   console.log("LIST FROM API", userLists);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Validate that the user has access to render this page
  if (!token) {
    return <InvalidUser />;
  }

  return (
    <div>
      <SearchList />
      <FavsList currentlist={userLists} monitorLists={getLists} />
    </div>
  );
}
export default UserDashboard;
