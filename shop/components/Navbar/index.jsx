import { useState } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';
import { useRouter } from "next/router";
export default function Navbar() {
    const Router = useRouter();
    const [statoMenu, impostaStatoMenu] = useState(false);
    function cambiapagina(pagina) {
        Router.replace({
            pathname: pagina,
          })
        impostaStatoMenu(false);
    }
    return (
        <><div className={styles.main}>
            <div className={styles.left}>
            <a href="/"><div className={styles.logo}></div>
                    <img className={styles.stemma} src="/logo.png" alt="screen logo" />
                </a>
            </div>
            <div className={styles.right}>
                <a href="/shop"><div className={styles.pulsante}>Shop</div></a>
                <a href="/chi-siamo"><div className={styles.pulsante}>Chi siamo</div></a>
                <a href="/faq"><div className={styles.pulsante}>F.A.Q.</div></a>
                <a href="/contattaci"><div className={styles.pulsante}>Contattaci</div></a>
            </div>
            <div className={styles.rightmobile} onClick={() => impostaStatoMenu(!statoMenu)}>
                <img src="/menu.svg" alt="menu" />
        </div>
        </div>
            <div className={clsx({
                [styles.menumobile]: statoMenu,
                [styles.disattivato]: !statoMenu,
            })}>
                <a href="/shop"><div className={styles.pulsantemobile}>Shop</div></a>
                <div className={styles.pulsantemobile} onClick={() => cambiapagina('/chi-siamo')}>Chi siamo</div>
                <div className={styles.pulsantemobile} onClick={() => cambiapagina('/faq')}>F.A.Q.</div>
                <div className={styles.pulsantemobile} onClick={() => cambiapagina('/contattaci')}>Contattaci</div>
            </div></>
    )

}