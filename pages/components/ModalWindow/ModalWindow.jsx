import React from "react";
import s from "./ModalWindow.module.css"

export const ModalWindow = ({onClose, title, visible, footer}) => {
    if (!visible) return null;

    return <>
        <div className={s.modal} onClick={onClose}>
            <div className={s.modalDialog} onClick={e => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    <h3 className={s.modalTitle}>{title}</h3>
                    <span className={s.modalClose} onClick={onClose}></span>
                </div>
                <div className={s.modalBody}>
                    <div className={s.modalContent}>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <div className={s.modalContent}>
                        <button>Кнопка</button>
                    </div>
                </div>
                {footer && <div className={s.modalFooter}>{footer}</div>}
            </div>
        </div>
    </>
}