import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Restaurant.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const Restaurant = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
  } else {
    var content = data;
  }

  if (content.city) {
    var cities = data.rels.filter(obj => {
      return content.city.includes(obj.uuid);
    });
  }


  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.restaurant}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.description}>
            {render(content.description)}
          </div>
          {cities && cities.length > 0 && <SmallCardList items={cities} title={"City"} type="city"></SmallCardList>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Restaurant
