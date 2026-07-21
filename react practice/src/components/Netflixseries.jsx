import Seriesdata from "../api/seriesdata.json";
import {SeriesCard} from './Lists.jsx';
const Netflix=()=>{
  return(

    <div>
      {Seriesdata.map((currElem)=>{
        return(<SeriesCard key={currElem.id}currElem={currElem}/>);
      }
      )
    }
    </div>
)};
export default Netflix