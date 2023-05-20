import PropTypes from "prop-types";
// import { EditItem } from "../../EditItem";
import "./list-items.scss";

function ListItems({ itemsArray = [] }) {
  if (itemsArray.length === 0) {
    return (
      <ul>
        <li>No Items for this list</li>
      </ul>
    );
  }

  const myItems = itemsArray.map((item) => (
    <article key={item.title} className="item">
      <div className="item__title-container">
        <header className="item__header">{item.title}</header>
        {/* <EditItem /> */}
      </div>
      <section className="item__content">
        <p>{item.description}</p>
        <a href={item.link}>Link</a>
      </section>
    </article>
  ));
  return <div className="items-container">{myItems}</div>;
}
export default ListItems;

ListItems.propTypes = {
  itemsArray: PropTypes.array,
};
