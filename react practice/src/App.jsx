
import React from "react";
import Netflix from "./components/Netflixseries";
import "./components/Netflix.css"
export function App(){
  return(
    <section className="container">
      <h1 className="common-heading">List of Best Netflix series</h1>
  <Netflix/>
    </section>
);
};