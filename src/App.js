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
import Dealership from "./components/MenuPages/Dealership"
import ByAppointment from "./components/MenuPages/ByAppointment"
import FinishOptions from "./components/MenuPages/FinishOptions"
import Winches from "./components/MenuPages/Winches"
import HydraulicPowerUnits from "./components/MenuPages/HydraulicPowerUnits"
import ControlSystem from "./components/MenuPages/ControlSystem"
import Design from "./components/MenuPages/Design"
import Mounting from "./components/MenuPages/Mounting"
import Modernization from "./components/MenuPages/Modenization"
import MetalFramesMines from "./components/MenuPages/MetalFramesMines"
import BuildingTasks from "./components/MenuPages/BuildingTasks"
import LineUp from "./components/MenuPages/LineUp";

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
            <Route exact path="/building-tasks" component={BuildingTasks} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/dealership" component={Dealership} />
            <Route exact path="/lifts/by-appointment" component={ByAppointment} />
            <Route exact path="/lifts/finish-options" component={FinishOptions} /> 
            <Route exact path="/equipments/winches" component={Winches} />
            <Route exact path="/equipments/hydraulic-power-units" component={HydraulicPowerUnits} />
            <Route exact path="/equipments/control-system" component={ControlSystem} />
            <Route exact path="/services/design" component={Design} />
            <Route exact path="/services/mounting" component={Mounting} />
            <Route exact path="/services/modernization" component={Modernization} />
            <Route exact path="/services/metal-frame-mines" component={MetalFramesMines} />
            <Route exact path="/line-up" component={LineUp} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
