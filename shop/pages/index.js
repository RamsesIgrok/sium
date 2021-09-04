import styles from '../styles/Home.module.css'
export default function Home() {
  return (
<html>
<head>
  <title>Le maglie da calcio Shop</title>
</head>
  <body className={styles.body}> 
    <div className={styles.title}><b>Le Maglie da Calcio Shop</b></div>
    <div className={styles.subtitle}><b>Le migliori maglie al miglior prezzo</b></div>
    <div className={styles.buttonposition}><article className={styles.button}>Benvenuto su "Le Maglie da Calcio Shop". Scopri le nostre offerte e divertiti ad acquistare le maglie delle tue squadre preferite!
    </article></div>
    <footer className={styles.footer}>Copyright - 2021 Le Maglie da Calcio Official</footer>
  </body>
</html>
  )
}
