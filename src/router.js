import { createBrowserRouter, redirect } from "react-router-dom"
import App from "./App"
import { lazy } from "react"
import { getRecipe } from "./apis"

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))
const Admin = lazy(() => import("./pages/Admin/Admin"))
const AdminRecipes = lazy(() =>
  import("./pages/Admin/pages/AdminRecipes/AdminRecipes")
)
const AdminUsers = lazy(() =>
  import("./pages/Admin/pages/AdminUsers/AdminUsers")
)

const AdminRecipesList = lazy(() =>
  import(
    "./pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList"
  )
)

const AdminRecipesForm = lazy(() =>
  import(
    "./pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm"
  )
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            index: true,
            loader: async () => redirect("/admin/recipes"),
          },
          {
            path: "recipes",
            element: <AdminRecipes />,
            children: [
              {
                index: true,
                loader: async () => redirect("/admin/recipes/list"),
              },
              {
                path: "list",
                element: <AdminRecipesList />,
              },
              {
                path: "new",
                element: <AdminRecipesForm />,
              },
              {
                path: "edit/:recipeId",
                element: <AdminRecipesForm />,
                loader: async ({ params: { recipeId } }) => getRecipe(recipeId),
              },
            ],
          },
          {
            path: "users",
            element: <AdminUsers />,
          },
        ],
      },
    ],
  },
])
