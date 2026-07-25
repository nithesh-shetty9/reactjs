import styles from "./Lists.module.css"
import styled from "styled-components"
const Descr=styled.p({
      backgroundColor:"grey",
    })
export const SeriesCard=({data})=>{
    const{name, rating, description, img_url, watch_url, cast}=data;



    return(
     <div className={styles["card"]}>
      <div>
       <img
  src={img_url}
  alt="qot.jpeg"
  width="60%"
  height="60%"
  style={{ padding: "0px" }}
/>
      </div>
      <div className={styles["content"]}>

      <h2 className="styles[card-heading]">Name:{name}</h2>
      <h3 className="card-rating"
      style=
      {{//background:"aqua"
      fontWeight:"bold"}}>Rating:<span 
     className={`${styles["default-rating"]} ${rating>8.5? styles.rating:styles.average}`}>{rating}</span></h3>
     <Descr>{description}</Descr>
      <div>

      <p className="card-caste">Caste:{cast}</p>
      </div>
      <a href={watch_url} target="_blank">
        <button className={`${styles["default"]} ${styles["card-button"]}`}>
        Watch now
      </button>
      </a>
      </div>
      </div>
        );
}
