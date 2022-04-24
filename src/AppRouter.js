import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Header from "./components/Header"
import SobreNosotros from "./components/SobreNosotros"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={'/'} element={<App/>}/>
            <Route path={'/sobrenosotros'} element={<SobreNosotros/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter