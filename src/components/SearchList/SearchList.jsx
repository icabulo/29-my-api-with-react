import { Input, Button, Modal, Form } from "antd";
const { Search } = Input;
import "./search-list.scss";
import PropTypes from "prop-types";
import { useState } from "react";

function SearchList({ currentlist, DisplayFilteredList, clearFilter }) {
  const [clearBtnCheck, setClearBtnCheck] = useState(true);
  const { token: tokenLS } = JSON.parse(localStorage.getItem("user"));

  const filterList = async (token, id) => {
    try {
      const request = await fetch(`http://localhost:5000/api/favs/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await request.json();
      const validation = data.idlist;
      return validation ? true : false;
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = async (value) => {
    const validation = await filterList(tokenLS, value);
    if (validation) {
      const newList = [
        currentlist.find((item) => item.idlist === parseInt(value)),
      ];
      DisplayFilteredList(newList);
      toggleClearBtn();
    } else {
      //IIFE to alert the user
      (() => {
        Modal.info({
          title: "List not found",
          content: "Try a different list Id",
        });
      })();
    }
  };

  const toggleClearBtn = () => {
    setClearBtnCheck((prev) => !prev);
  };

  const handleClick = () => {
    clearFilter();
    toggleClearBtn();
  };

  return (
    <div className="search-bar">
      <Form>
        <Form.Item>
          <Search
            placeholder="List Id"
            onSearch={onSearch}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
      </Form>
      <Button type="default" disabled={clearBtnCheck} onClick={handleClick}>
        Clear filter
      </Button>
    </div>
  );
}

SearchList.propTypes = {
  currentlist: PropTypes.array,
  DisplayFilteredList: PropTypes.func,
  clearFilter: PropTypes.func,
};

export default SearchList;
