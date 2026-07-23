import "./Netflix.css"
export const SeriesCard=({key,data})=>{
    const{name, rating, description, img_url, watch_url, cast}=data;
    return(
     <div className="card">
      <div>
       <img
  src={img_url}
  alt="qot.jpeg"
  width="60%"
  height="60%"
  style={{ padding: "0px" }}
/>
      </div>
      <div className="content">

      <h2 className="card-heading">Name:{name}</h2>
      <h3 className="card-rating"
      style=
      {{background:"aqua"
      ,fontWeight:"bold"}}>Rating:{rating}</h3>
      <p className="card-description">{description}</p>
      <div>

      <p className="card-caste">Caste:{cast}</p>
      </div>
      <a href={watch_url} target="_blank">
        <button className="card-button">
        Watch now
      </button>
      </a>
      </div>
      </div>
        );
}
