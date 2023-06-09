import { Collapse, Divider, Space } from "antd";
import { ListItems } from "./ListItems";
const { Panel } = Collapse;
import "./favs-list.scss";
import { CreateList } from "../CreateList";
import { CreateItem } from "../CreateItem";
import { DeleteList } from "../DeleteList";
import PropTypes from "prop-types";

const FavsList = ({ currentlist, monitorLists }) => {
  const genExtra = (idlist, monitorLists) => (
    <div className="panel-btns">
      <Space direction="horizontal">
        <DeleteList idlist={idlist} monitorLists={monitorLists} />
      </Space>
    </div>
  );

  let myPanelLists = [];
  if (currentlist.length > 0) {
    myPanelLists = currentlist.map((list) => (
      <Panel
        key={`${list.name}-${list.idlist}`}
        header={`${list.name} (List id: ${list.idlist})`}
        extra={genExtra(list.idlist, monitorLists)}
      >
        <Space direction="vertical">
          <ListItems itemsArray={list.items} />
          <CreateItem idlist={list.idlist} monitorLists={monitorLists} />
        </Space>
      </Panel>
    ));
  }

  return (
    <div className="my-lists">
      <Divider orientation="left">My List Of Favorites</Divider>
      <Space direction="vertical">
        <CreateList monitorLists={monitorLists} />
        {myPanelLists.length > 0 ? (
          <Collapse size="large">{myPanelLists}</Collapse>
        ) : (
          <h2>No lists yet! Create your first list</h2>
        )}
      </Space>
    </div>
  );
};

FavsList.propTypes = {
  currentlist: PropTypes.array,
  monitorLists: PropTypes.func,
};

export default FavsList;
