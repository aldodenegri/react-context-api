import {useState,useEffect} from 'react'
import styles from './Prodotti.module.css'
import axios from 'axios'
import {Link } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext'
function Prodotti(){
    const {budgetMode} = useBudget();
    const [prods,setProds] = useState([]);
    const [displayedProds, setDisplayedProds] = useState([]);
    const apiUrl ="https://fakestoreapi.com/products";
    function getData()
    {
        axios.get(apiUrl).then((resultProdotti) => {
            console.log(resultProdotti.data);
            setProds([...resultProdotti.data]);
            setDisplayedProds([...resultProdotti.data]);
        }).catch(err => console.error(err));
    }
    useEffect(() => {
        getData();
    },[]);

    //questa è stata la soluzione per gestire lo stale closure, ovvero la funzione filtro prendeva un valore obsoleto di budgetMode
    useEffect(() => {
        console.log(budgetMode)
    if (budgetMode) {
        setDisplayedProds(prods.filter(p => p.price <= 30));
    } else {
        setDisplayedProds(prods);
    }
}, [budgetMode, prods]);
    //la funzione oltre filtra con uno stato passato, invertire il booleano permtterà di gestire lo stato al futuro(non inserito)
    // function filtro()
    // {
    //     //soluzione non ottimale perché una volta che si disattiva la budgetMode ricarica tutto e non è il massimo.
    //     if(budgetMode) setDisplayedProds(prods.filter((p) => p.price <= 30));
    //     else if(budgetMode == false) setDisplayedProds(prods);
    //     toggleBudgetMode;
    // }
    return(
        <>
            <h1>I nostri prodotti</h1>
            
            <ul className={styles.prodsContainer}>
                {displayedProds.map(p => (
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