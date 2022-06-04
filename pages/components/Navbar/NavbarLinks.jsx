import React from "react";
import s from "./NavabarLinks.module.css";
import Link from "next/link";

export const NavbarLinks = ({isMobileType}) => {
    const className = `${isMobileType ? s.linkContainerOpen : s.linkContainer}`

    return (
        <div className={className} >
            <nav className={s.nav}>
                <div className={s.item}>
                    <img src="/assets/homepage-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Дашборд</Link>
                </div>
                <div className={s.item}>
                    <img src="/assets/discuss-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Биржа активности</Link>
                </div>
                <div className={s.item}>
                    <img src="/assets/blogers-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Биржа блогеров</Link>
                </div>
                <div className={s.item}>
                    <img src="/assets/pr-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Взаимопиар</Link>
                </div>
                <div className={s.active}>
                    <div></div>
                    <img src="/assets/business-and-finance-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Моя структура</Link>
                </div>
                <div className={s.item}>
                    <img src="/assets/shop-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Магазин</Link>
                </div>
                <div className={s.item}>
                    <img src="/assets/marathon-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Марафон</Link>
                </div>
                <div className={s.item}>
                    <img src="/assets/landing-icon.svg"/>
                    <Link href="/" activeClassName={s.activeLink}>Лендинги</Link>
                </div>
            </nav>
        </div>
    )
}