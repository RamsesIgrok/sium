import styles from './style.module.css'
export default function Product({info}){
    return(
    <div>
        <title>Shop</title>
        <div className={styles.main}>
            <div className={styles.top}>
                <img src={info.image.url} alt="Image" />
            </div>
            <div className={styles.bottom}>
                <div className={styles.title}>
                    {info.title}
                </div>
            <div className={styles.bottombottom}>
                <div className={styles.prezzo}>
                {`${info.price}€`}
                </div>
                <div className={styles.paga}data-shoppy-product={info.id}>
                Compra
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
