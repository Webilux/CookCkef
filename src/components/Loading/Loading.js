import styles from "./Loading.module.scss"

function Loading() {
  return (
    <div className={`flex-fill ${styles.loaderContainer}`}>
      <div className={`d-flex ${styles.spinner}`}></div>
      <p>Chargement...</p>
    </div>
  )
}

export default Loading
