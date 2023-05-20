import { Button } from "antd";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="App">
      <h3>Let&apos;s use react to cosume my FAVS-API</h3>
      <Button type="primary" onClick={handleClick} shape="round" size="default">
        Go to
      </Button>
    </div>
  );
}
export default Home;
