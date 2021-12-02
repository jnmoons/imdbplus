import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/CityList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const CityList = ({ data, level, locale }) => {

  const [sortby, setSortby] = useState();
  
  const [items, setItems] = useState([]);
  getAllItems('city', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.list}>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="movie"></SmallCardList>}
      </div>
    </div>

  );
};

export default CityList;
