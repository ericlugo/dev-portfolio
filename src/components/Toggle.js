import React from "react"

import styles from "../sass/toggle.module.sass"

const Toggle = _ => {
  return (
    <div className={`raised ${styles.toggle}`}>
      <label>
        <input type="checkbox" className={styles.switch} />
        <span className={`inset ${styles.slider}`}></span>
      </label>
    </div>
  )
}

export default Toggle
