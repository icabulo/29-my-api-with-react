import { Input } from "antd";
const { Search } = Input;
import "./search-list.scss";

const onSearch = (value) => console.log(value);

function SearchList() {
  return (
    <div className="search-bar">
      <Search
        placeholder="List Id"
        onSearch={onSearch}
        allowClear
        style={{
          width: "40%",
        }}
      />
    </div>
  );
}
export default SearchList;
