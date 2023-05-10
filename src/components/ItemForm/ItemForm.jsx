import { EditOutlined, LinkOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { TextArea } = Input;

const ItemForm = () => (
  <>
    <Input placeholder="Title" prefix={<EditOutlined />} />
    <TextArea rows={2} placeholder="Description" />
    <Input placeholder="Link" prefix={<LinkOutlined />} />
  </>
);
export default ItemForm;
