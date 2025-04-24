import { DataRec } from "./components/datarec";
import { Search } from "./components/search";
import { ReData } from "./store/ReData";
import logo from "./assets/logo.png"
import "./App.css";

export default function App(){
  return(
    <>
    <h1 className="app-title"><img src={logo} alt="logo" />Every recipe is a love letter in a glass.</h1>
    <div className="app-container">
      <Search></Search>
      <DataRec></DataRec>
    </div>
    </>
  );
}