import { NavLink } from "react-router-dom"
import { useFetchRecipes } from "../../../../../../hooks"
import { deleteRecipes as deleteR } from "../../../../../../apis"
import Loading from "../../../../../../components/Loading/Loading"
import styles from "./AdminrecipesList.module.scss"

function AdminRecipesList() {
  const [[recipes, setRecipes], isLoading] = useFetchRecipes()

  async function deleteRecipes(_id) {
    await deleteR(_id)
    setRecipes(recipes.filter((r) => r._id !== _id))
  }

  return (
    <>
      {isLoading && !recipes.length ? (
        <Loading />
      ) : (
        <ul className={styles.containerCard}>
          {recipes.map((r) => (
            <li className={styles.card} key={r._id}>
              <i
                onClick={() => deleteRecipes(r._id)}
                className={`${styles.btn} fa-solid fa-xmark`}
              ></i>
              <img src={r.image} alt={r.title} />
              {r.title}
              <NavLink className={styles.btn} to={`../edit/${r._id}`}>
                <i className="fa-solid fa-pen-to-square"></i>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default AdminRecipesList
