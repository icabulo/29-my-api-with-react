import { SettingOutlined } from "@ant-design/icons";
import { Collapse, Divider } from "antd";
import { EditList } from "../EditList";
import { userLists } from "../../mockData/userData";
import { ListItems } from "./ListItems";
const { Panel } = Collapse;
import "./favs-list.scss";

const FavsList = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const preventPropagation = (event) => {
    // If you don't want click extra trigger collapse, you can prevent this:
    event.stopPropagation();
  };
  const genExtra = () => (
    <>
      <SettingOutlined onClick={preventPropagation} />
      <EditList />
    </>
  );

  const myPanelLists = userLists.map((list) => (
    <Panel key={list.name} header={list.name} extra={genExtra()}>
      <ListItems itemsArray={list.items} />
    </Panel>
  ));

  return (
    <div className="my-lists">
      <Divider orientation="left">My List Of Favorites</Divider>
      <Collapse onChange={onChange}>{myPanelLists}</Collapse>
    </div>
  );
};
export default FavsList;
