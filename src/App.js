import './App.css'
import Header from "./components/FirstPage/Header"
import Footer from "./components/FirstPage/Footer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
// import { Dropdown } from "./components/FirstPage/Dropdown";
import  AboutCompany  from "./components/MenuPages/AboutCompany.js"
import NavMenu from "./components/FirstPage/NavMenu.js"
import Lifts from "./components/MenuPages/Lifts.js"
import Equipment from "./components/MenuPages/Equipment.js"
import Service from "./components/MenuPages/Service"
import Contacts from "./components/MenuPages/Contacts"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/about-company" component={AboutCompany} />
            <Route exact path="/lifts" component={Lifts} />
            <Route exact path="/equipments" component={Equipment} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
