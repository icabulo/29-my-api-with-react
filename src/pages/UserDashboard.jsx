import { FavsList } from "../components/FavsList";
import { SearchList } from "../components/SearchList";
import { InvalidUser } from "../components/InvalidUser";

function UserDashboard() {
  const { token } = JSON.parse(localStorage.getItem("user"));
  //   const url = "http://localhost:4000/gestor";

  if (!token) {
    return <InvalidUser />;
  }

  return (
    <div>
      <SearchList />
      <FavsList />
    </div>
  );
}
export default UserDashboard;
