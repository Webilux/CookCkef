import { useEffect, useState } from "react"
import { getRecipes } from "../apis"
import { seedRecipes } from "../data/seed"

export function useFetchRecipes(page) {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState([])

  useEffect(() => {
    let cancel = false
    async function fetchData() {
      try {
        setIsLoading(true)
        const queryParam = new URLSearchParams()
        queryParam.append("sort", "createdAt:-1")
        if (page) {
          queryParam.append("skip", (page - 1) * 18)
          queryParam.append("limit", 18)
        }
        const fetchedRecipes = await getRecipes(queryParam)
        if (!cancel) {
          setRecipes((x) => {
            const updatedRecipes = [...x, ...fetchedRecipes]
            if (x.length === 0 && fetchedRecipes.length === 0) {
              for (let i = 0; i < 3; i++) {
                seedRecipes()
              }
            }
            return updatedRecipes
          })
        }
      } catch {
        setError("Erreur")
      } finally {
        if (!cancel) {
          setIsLoading(false)
        }
      }
    }

    fetchData()
    return () => (cancel = true)
  }, [page])
  return [[recipes, setRecipes], isLoading, error]
}
