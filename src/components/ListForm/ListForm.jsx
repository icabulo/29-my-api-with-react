import { UnorderedListOutlined } from "@ant-design/icons";
import { Input } from "antd";

const ListForm = () => (
  <>
    <Input placeholder="Name" prefix={<UnorderedListOutlined />} />
  </>
);
export default ListForm;
