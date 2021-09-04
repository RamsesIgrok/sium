import styles from './faq.module.css'
export default function faq() {
    return(
        <html>
            <head>
                <title>F.A.Q.</title>
            </head>
            <body className={styles.body}>
                <div className={styles.title}><b>F.A.Q.</b></div>
                <div className={styles.articleposition}><article className={styles.article}>
                                                        <div className={styles.div}><b>Gli articoli sono originali?</b></div>
                                                        <div>I nostri prodotti sono riproduzioni originali cioè delle Repliche in tutti i dettagli, complete di cartellini e loghi, come quello che troverete nei vari store ufficiali. Il fatto che provengano dall?estero non significa che non lo siano, talvolta nei negozi la provenienza è la medesima.</div>
                                                
                                                        <div className={styles.div}><b>Da dove provengono gli articoli?</b></div>
                                                        <div>Il tutto viene prodotto in Asia.</div>

                                                        <div className={styles.div}><b>Perchè i prezzi sono così bassi?</b></div>
                                                        <div>I prezzi sono ridotti in quanto ci riforniamo da un ingrosso, che si procura la merce in grandi quantitativi. Avendo quindi la merce in stock i prezzi sono notevolmente ridotti.</div>
                                                        
                                                        <div className={styles.div}><b>Qual?è la differenza tra Versione Fan e Versione Player?</b></div>
                                                        <div>La versione "Fan" è la classica maglia che ha una vestibilità normale con tutti i loghi cuciti. La maglia che troverete negli store a 80 euro circa. La versione "Player" ha una vestibilità ridotta, 100% poliestere. Creata con un tessuto ancora più leggero, adatta a sostenere i migliori giocatori. Inserti in mesh traforato per una migliore traspirazione. Sponsor ufficiale stampato e loghi termoapplicati. Le Maglie ?Player? vestono più strette (circa 3/5 cm per lato) rispetto alle maglie ?Fan?. Si prega, quindi, di un?accurata scelta della taglia prima dell?acquisto chiedendo, eventualmente, consiglio allo STAFF.</div>

                                                        <div className={styles.div}><b>Perchè dovrei fidarmi ad acquistare da voi?</b></div>
                                                        <div>Sul nostro sito e sulla nostra pagina instagram sarà possibile consultare i feedback degli altri clienti della loro merce acquistata ed arrivata regolarmente a destinazione. Inoltre la spedizione sarà tracciabile.</div>

                                                        <div className={styles.div}><b>Il pagamento deve essere effettuato prima?</b></div>
                                                        <div>Il pagamento deve essere fatto immediatamente, dopo di che provvederemo a inoltrare il vostro ordine al magazzino che preparerà la spedizione dell'articolo.</div>

                                                        <div className={styles.div}><b>Come faccio ad ordinare?</b></div>
                                                        <div>Per ordinare è molto semplice, basta andare nella sezione "Shop" e scegliere la maglia da acquistare cliccando sul pulsante "compra".</div>

                                                        <div className={styles.div}><b>Quanto Tempo impiega ad arrivare la merce ordinata a destinazione?</b></div>
                                                        <div>
                                                        Con le Poste Internazionali 15/30 giorni dal momento della spedizione. La spedizione con poste internazionali è sempre GRATUITA e tracciabile ed è quella che proponiamo sempre per potervi far risparmiare.</div>
                                                        
                                                        <div className={styles.div}><b>Perchè non mi è arrivato nulla entro i tempi previsti?</b></div>
                                                        <div>I tempi sono indicativi e nel 90% dei casi vengono rispettati. In caso di ritardo comunque arriverà tutto a destinazione con pochi giorni aggiuntivi di attesa.</div>

                                                        <div className={styles.div}><b>In quanto tempo spedirete il mio ordine?</b></div>
                                                        <div>Una volta ricevuto il pagamento, il vostro ordine verrà preparato in 1/7 giorni lavorativi, dopo di che verrà consegnato al corriere per la spedizione.</div>

                                                        <div className={styles.div}><b>Ho effettuato da poco un acquisto, quando posso avere il numero di tracking per monitorare il mio ordine?</b></div>
                                                        <div>Il numero di tracking verrà rilasciato dopo 5-12 giorni dal momento del pagamento. Una volta spedito il pacco vi verrà fornito tramite uno dei nostri contatti. (Email o Instagram)</div>

                                                        <div className={styles.div}><b>Ho effettuato da poco un acquisto, ho sbagliato a selezionare la taglia e a scrivere la personalizzazione, posso modificarla?</b></div>
                                                        <div>Nel caso dovesse accadere una situazione simile, va subito comunicato tramite instagram.</div>

                                                        <div className={styles.div}><b>La merce è arrivata con piccoli difetti, personalizzazione o taglia sbagliata, è possibile avere uno sconto o un rimborso?</b></div>
                                                        <div className={styles.fine}>Se in caso arriva la merce sbagliata o con qualche difetto potrete scegliere se ricevere il cambio del prodotto, se ricevere uno sconto da utilizzare sul nostro sito o ricevere un codice sconto dell?importo da voi pagato da utilizzare in un altro ordine.</div>
                                                        </article>
                </div>
                <footer className={styles.footer}>Copyright - 2021 Le Maglie da Calcio Official</footer>
            </body>
        </html>

    )
}