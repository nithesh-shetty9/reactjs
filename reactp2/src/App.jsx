// import { Bioprovider} from "./Contextapi/Cont";
// import { Home } from "./Contextapi/Home";
import Counter from "./Customhook/Usecouter2";
import { UsReducer } from "./Customhook/Usereducer";
import { Reactmemo } from "./reactmemos/Reactmemo";
import MemoParentComponent from "./reactmemos/Usememo";

const App=() => {
  return (
    <MemoParentComponent/>
  );
};

export default App; 