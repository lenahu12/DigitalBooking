import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../images/main-logo.png";
import LoggedHeader from "./LoggedHeader";
import HeaderButtons from "./HeaderButtons";
import BurgerMenu from "./BurgerMenu";
import { UserContext } from "../../context/User/UserContext";
import LoggedBurguerMenu from "./LoggedBurgerMenu";
import { CarContext } from "../../context/Car/CarContext";
import 'animate.css';

const Header = () => {

  const navigate = useNavigate();
  
  const {userCredentials} = useContext(UserContext);
  const {resetCars} = useContext(CarContext)

  const handleOnClickImage = () => {
    navigate("/");
    resetCars();
  }

  return (
    <header className="header--container">
      <nav className="header--nav-container">
        <img onClick={handleOnClickImage} className="header--main-logo animate__animated animate__backInLeft animate__fast" src={MainLogo} alt="main-logo" />
        {userCredentials  ? <><LoggedHeader /> <LoggedBurguerMenu /></> : <><HeaderButtons /><BurgerMenu /></>}
      </nav>
    </header>
  );
};

export default Header;




