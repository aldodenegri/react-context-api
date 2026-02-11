import StarDrawer from "./StarDrawer";
import {Link } from 'react-router-dom'
import styles from './CardProdotto.module.css'
function CardProdotto({id,title, image, description , price,category, rate, count}) {
    return (
        <>
            <h1 className={styles.titolo}>{title}</h1>
            <div>
                <img src={image} className={styles.immagine}/>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>{price}€</p>
                <p>{category}</p>
                <div className={styles["star-rate"]}><StarDrawer rate={rate} /></div><p> ({count})</p>
                <Link to={`/Products/${id}`}> Vedi in dettaglio </Link>
            </div>
        </>
    )
} export default CardProdotto;