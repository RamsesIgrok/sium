import styles from './style.module.css'
export default function Chisiamo() {
    return (
<html>
<head>
    <title>Chi siamo</title>
</head>
    <body className={styles.body}>
        <div className={styles.title}>Chi siamo</div>
        <div className={styles.articleposition}><article className={styles.article}>Le maglie da calcio official è una realtà che sbarca su internet nel 2021 e lavora nel settore
        dell'abbigliamento sportivo da tre anni portando qualità e pregio nelle case dei nostri clienti.
        </article></div>
        <footer className={styles.footer}>Copyright - 2021 Le Maglie da Calcio Official</footer>
    </body>
</html>
    )
}

