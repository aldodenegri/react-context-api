
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './StarDrawer.module.css'
function StarDrawer({ rate }) {
    const rating = Number(rate) || 0;
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i=0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<FaStar key={i} className={styles.star} />);
        }
        else if (((i - fullStars) == 0) && ((rating - fullStars) != 0)) {
            stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
        }
        else {
            stars.push(<FaRegStar key={i} className={styles.star} />);
        }
    }
    
    return (
        <>
            <div className={styles["star-rating-container"]}>
                {/* <p>Sono qui{console.log("Stars array: ", [...stars])}</p> */}
                <ul className={styles["stars-list"]}>
                    {stars.map((star, index) => (
                        
                        <li key={index}>{star}</li>
                    ))}
                </ul>
            </div>
        </>
    );
} export default StarDrawer;