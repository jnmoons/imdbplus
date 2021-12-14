import SbEditable from "storyblok-react"
import styles from "../styles/ThreeCol.module.scss"
import DynamicComponent  from "./DynamicComponent";

const ThreeCol = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content}>
      <div className={styles.threecol}>
        <div className={styles.one}>
          {content.one ? content.one.map((content) =>
            <DynamicComponent data={content} key={content._uid} locale={locale} />
          ) : null}
        </div>
        <div className={styles.two}>
          {content.two ? content.two.map((content) =>
            <DynamicComponent data={content} key={content._uid} locale={locale} />
          ) : null}
        </div>
        <div className={styles.three}>
          {content.three ? content.three.map((content) =>
            <DynamicComponent data={content} key={content._uid} locale={locale} />
          ) : null}
        </div>
      </div>
    </SbEditable>
  )
}
export default ThreeCol
