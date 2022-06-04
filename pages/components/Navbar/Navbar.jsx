import React, {useState} from "react";
import {NavbarLinks} from "./NavbarLinks";
import s from "./NavabarLinks.module.css"


export const Navbar = () => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

    return (<div className={s.navbarLinksContainer}>
        <div className={s.navbarLinks} onClick={() => {
            setIsOpenBurgerMenu(!isOpenBurgerMenu)
        }}>
            <img src="/assets/burger-menu.svg"/></div>
        <NavbarLinks isMobileType={isOpenBurgerMenu}
                     closeMenu={() => setIsOpenBurgerMenu(false)}/>
    </div>)
}