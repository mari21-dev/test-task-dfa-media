import React from "react";
import s from "./Structure.module.css"
import {LevelCard} from "./LevelCard/LevelCard";
import {levelCardMock} from "../mocks/LevelCard.mock";


export const Structure = () => {
    return (
        <div>
            <div><span className={s.header}>Моя структура</span></div>
            <div className={s.cardContainer}>
                {levelCardMock.map(m => <LevelCard key={m.index} paymentLevel={m.paymentLevel}
                                                   activePartners={m.activePartners} users={m.users}
                                                   avatar={m.avatar}/>)}
            </div>
        </div>
    )
}