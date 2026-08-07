import { createContext} from "react";
//step 1
export const Biocontext=createContext();
//step2
export const Bioprovider=({children})=>{
    const name="nithesh";
    const age=25;
    return<Biocontext.Provider value={{name, age}}>{children}</Biocontext.Provider>
}