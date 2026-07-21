export const SeriesCard=(props)=>{
    const {currElem}=props;
    const{name, rating, description, img_url, watch_url, cast}=props.currElem;
    return(
     <div>
      <div>
        <img src={img_url}alt="qot.jpeg"width="60%" height="60%"/>
      </div>
      <h2>Name:{name}</h2>
      <h3>Rating:{rating}</h3>
      <p>{description}</p>
      <div>

      <h4>Caste:{cast}</h4>
      </div>
      <a href={watch_url} target="_blank">
        <button>
        Watch now
      </button>
      </a>
      </div>
        );
}
