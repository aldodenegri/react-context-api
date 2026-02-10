import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from 'axios';

function ProdottiDettagli() {
    const { id } = useParams();
    const [prod, setProd] = useState(null);

    const apiUrl = `https://fakestoreapi.com/products/${id}`;
    function getDataProd() {
        axios.get(apiUrl).then((resultProdotto) => {
            console.log(resultProdotto.data);
            setProd(resultProdotto.data);

        }).catch(err => console.error(err));
    }
    useEffect(() => {
        getDataProd();
    }, [id]);
    //useEffect(getDataProd,[id]);
    if (!prod) return <p>Caricamento...</p>;

    return (
        <>
            <h1>Benvenuto nel dettaglio di <span>{prod?.title}</span></h1>
            <div>
                <img src={prod?.image} />
                <p >{prod?.description}</p>
                <p >{prod?.price}€</p>
                <p>{prod?.category}</p>
                <p>{prod?.rating?.rate} ({prod?.rating?.count})</p>
                <Link to={`/Products`}> Ritorna nei prodotti </Link>
            </div>
        </>


    );
} export default ProdottiDettagli;