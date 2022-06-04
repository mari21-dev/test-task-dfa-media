import Head from 'next/head';
import React, {useState} from "react";
import style from "./index.module.css"
import {Navbar} from "./components/Navbar/Navbar";
import {Structure} from "./components/Structure/Structure";
import Link from "next/link";
import {ModalWindow} from "./components/ModalWindow/ModalWindow";


export default function App() {
    const [isModal, setModal] = useState(false)

    const onClose = () => {
        setModal(false)
    }

    return (
        <div className={style.container}>
            <Head>
                <title>Мероприятия</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>
            <div className={style.containerContent}>
                <div className={style.containerHeader}>
                    <div className={style.containerSection}><span>Мероприятия</span></div>
                    <div className={style.containerSection}>
                        <button onClick={() => setModal(true)}>Мероприятия</button>
                        <ModalWindow visible={isModal} onClose={onClose}
                                     footer={<button onClick={onClose}>Закрыть</button>} title="Заголовок"/>
                    </div>
                </div>
                <main>
                    <Link href="/structure">{<Structure/>}</Link>
                </main>
            </div>
        </div>
    )
}
