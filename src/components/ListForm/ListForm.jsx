import { UnorderedListOutlined } from "@ant-design/icons";
import { Input, Form } from "antd";

const ListForm = () => (
  <>
    <Form.Item name="name" label="Name" required>
      <Input placeholder="Name" prefix={<UnorderedListOutlined />} />
    </Form.Item>
  </>
);
export default ListForm;
