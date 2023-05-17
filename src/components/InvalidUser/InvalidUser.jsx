import { Col, Divider, Row, Button } from "antd";
import { useNavigate } from "react-router";

function InvalidUser() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Divider orientation="left">Anuthorized</Divider>
      <Row justify="center">
        <Col span={4}>
          <h2>Access Denied</h2>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={handleClick}>
            Go to Login
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default InvalidUser;
