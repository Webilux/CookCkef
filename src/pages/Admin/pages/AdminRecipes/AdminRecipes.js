import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav"

function AdminRecipes() {
  return (
    <div className="flex-fill d-flex flex-column">
      <h4 className="mb-20">Gestion des recettes</h4>
      <div className="flex-fill d-flex flex-column">
        <AdminRecipesNav />
        <div className="flex-fill d-flex flex-column">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default AdminRecipes
