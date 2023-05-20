import { FavsList } from "../components/FavsList";
import { SearchList } from "../components/SearchList";
import { InvalidUser } from "../components/InvalidUser";
import { useEffect, useState } from "react";

function UserDashboard() {
  const [userLists, setUserLists] = useState([]);

  const { token } = JSON.parse(localStorage.getItem("user"));
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
      setUserLists(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getLists();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Validate that the user has access to render this page
  if (!token) {
    return <InvalidUser />;
  }

  return (
    <div>
      <SearchList
        currentlist={userLists}
        DisplayFilteredList={setUserLists}
        clearFilter={getLists}
      />
      <FavsList currentlist={userLists} monitorLists={getLists} />
    </div>
  );
}
export default UserDashboard;
