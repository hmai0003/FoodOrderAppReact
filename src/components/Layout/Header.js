import { Fragment } from "react";


import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals App</h1>
                <HeaderButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="Food!!"/>
            </div>
        </Fragment>
    )
};

export default Header;