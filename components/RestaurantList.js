import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/RestaurantList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const RestaurantList = ({ data, level, locale }) => {

  const [sortby, setSortby] = useState();
  
  const [items, setItems] = useState([]);
  getAllItems('restaurant', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.list}>
      <div>
        <SmallCardList items={items} type="restaurant"></SmallCardList>
      </div>
    </div>

  );
};

export default RestaurantList;
