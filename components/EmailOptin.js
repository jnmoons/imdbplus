import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Register me for the newsletter</div>
      {formstate&&<iframe width="540" height="900" src="https://e78b827b.sibforms.com/serve/MUIEAKEpWkYi30ipaBk1nnr4S75LFO9yqORl_jduXuVQkOimKGnByhMRUJqMvUbnDZsneGIhWepQJsbMdfanCsyFBD15yLhwEyT_reK8D-xwx5rYvTMOVxEhKZKqpbhY9A6ZeKSWoRdebjIfIDL0rbn2vXb8jffP7TFkOq9s4VeHZzgE8ZoMknJ_gFrZu4BuG5yffBbYYhjeKnqY" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
    </div>
  );
};

export default EmailOptin;
