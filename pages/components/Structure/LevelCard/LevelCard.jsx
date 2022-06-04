import React from "react";
import s from "./LevelCard.module.css";

export const LevelCard = ({activePartners, paymentLevel, users}) => {
    return <div className={s.card}>
        <div className={s.headerCard}>
            <div className={s.numbers}>
                <span className={s.number}>{paymentLevel}</span>
                <span>{activePartners}</span>
            </div>
            <div className={s.description}>
                <span className={s.text}>Уровень выплат</span>
                <span>Активных партнеров</span>
            </div>
        </div>

        <div className={s.usersCard}>
            {users.map((u) => {
                return <div className={s.item}><img src={u.avatar} width="25%"
                                                    height="25%"/><span>{u.name}</span></div>
            })}
        </div>
    </div>
}