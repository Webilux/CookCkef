import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import styles from "./App.module.scss"
import { Outlet } from "react-router-dom"
import { Suspense } from "react"

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App
