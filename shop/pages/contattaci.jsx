import styles from './contattaci.module.css'
export default function contattaci() {
    return (
<html>
            <head>
                <title>F.A.Q.</title>
            </head>
            <body className={styles.body}>
                <div className={styles.title}><b>Contattaci</b></div>
                <div className={styles.articleposition}><article className={styles.article}>
                    <a href="https://www.instagram.com/lemagliedacalcio.official/" target="_blank">Contattaci su instagram!</a>
                    </article>
                </div>
                <footer className={styles.footer}>Copyright - 2021 Le Maglie da Calcio Official</footer>
            </body>
        </html>

    )
}



