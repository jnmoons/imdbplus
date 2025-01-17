import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/City.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const City = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
  } else {
    var content = data;
  }

  const [restaurants, setRestaurants] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'restaurant', 'city').then(
    function (result) {
      setRestaurants(result.data.stories);
    });


  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.city}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
          <div className={styles.population}>
            Population {content.population}
          </div>
          <div className={styles.description}>
            {render(content.description)}
          </div>
          {restaurants&&restaurants.length>0&&<RelatedItemGallery items={restaurants} title="Restaurants" type="restaurant"></RelatedItemGallery>}
        </div>
      </main> 
    </SbEditable>
  )
}

export default City
