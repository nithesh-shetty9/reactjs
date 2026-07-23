import Seriesdata from "../api/seriesdata.json";
import {SeriesCard} from './Lists.jsx';
const Netflix=()=>{
  return(

    <div className="grid grid-three--cols">
      {Seriesdata.map((currElem)=>{
        return(<SeriesCard key={currElem.id}data={currElem}/>);
      }
      )
    }
    </div>
)};
export default Netflix