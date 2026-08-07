import { Bioprovider} from "./Contextapi/Cont";
import { Home } from "./Contextapi/Home";

const App=() => {
  return (
    <Bioprovider>
    <Home/>
    </Bioprovider>
  );
};

export default App; 