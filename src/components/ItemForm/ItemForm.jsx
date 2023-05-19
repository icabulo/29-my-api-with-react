import { EditOutlined, LinkOutlined } from "@ant-design/icons";
import { Input, Form } from "antd";

const { TextArea } = Input;

const ItemForm = () => (
  <>
    <Form.Item name="title" label="Title">
      <Input placeholder="Title" prefix={<EditOutlined />} />
    </Form.Item>
    <Form.Item name="description" label="Description">
      <TextArea rows={2} placeholder="Description" />
    </Form.Item>
    <Form.Item name="link" label="Link">
      <Input placeholder="Link" prefix={<LinkOutlined />} />
    </Form.Item>
  </>
);
export default ItemForm;
