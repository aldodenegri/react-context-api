import {useState,useEffect} from 'react'
import styles from './Prodotti.module.css'
import axios from 'axios'
import {Link } from 'react-router-dom'
function Prodotti(){
    const [prods,setProds] = useState([]);

    const apiUrl ="https://fakestoreapi.com/products";
    function getData()
    {
        setProds([]);
        axios.get(apiUrl).then((resultProdotti) => {
            console.log(resultProdotti.data);
            setProds([...resultProdotti.data]);
        }).catch(err => console.error(err));
    }
    useEffect(() => {
        getData();
    },[]);

    return(
        <>
            <h1>I nostri prodotti</h1>
            <ul className={styles.prodsContainer}>
                {prods.map(p => (
                    <li key={p.id} className={styles.singleProd}>
                        <h1>{p.title}</h1>
                        <div>
                            <img src={p.image}/>
                            <p className={styles.description}>{p.description}</p>
                            <p className={styles.price}>{p.price}€</p>
                            <p>{p.category}</p>
                            <p>{p.rating.rate} ({p.rating.count})</p>
                            <Link to={`/Products/${p.id}`}> Vedi in dettaglio </Link>
                        </div>
                    </li>
                ))}
            </ul>
            
        </>
    );
}export default Prodotti;