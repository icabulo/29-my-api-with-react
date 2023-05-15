import { SettingOutlined } from "@ant-design/icons";
import { Collapse, Divider, Space } from "antd";
import { EditList } from "../EditList";
import { userLists } from "../../mockData/userData";
import { ListItems } from "./ListItems";
const { Panel } = Collapse;
import "./favs-list.scss";
import { CreateList } from "../CreateList";

const FavsList = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const preventPropagation = (event) => {
    // If you don't want click extra trigger collapse, you can prevent this:
    event.stopPropagation();
  };
  const genExtra = () => (
    <div className="panel-btns">
      <Space direction="horizontal">
        {/* <SettingOutlined onClick={preventPropagation} /> */}
        <EditList />
        {/* <EditList /> */}
      </Space>
    </div>
  );

  const myPanelLists = userLists.map((list) => (
    <Panel key={list.name} header={list.name} extra={genExtra()}>
      <ListItems itemsArray={list.items} />
    </Panel>
  ));

  return (
    <div className="my-lists">
      <Divider orientation="left">My List Of Favorites</Divider>
      <Space direction="vertical">
        <CreateList />
        <Collapse onChange={onChange} size="large">
          {myPanelLists}
        </Collapse>
      </Space>
    </div>
  );
};
export default FavsList;
