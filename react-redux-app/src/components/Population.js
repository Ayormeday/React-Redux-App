import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export default connect(
  state => state,
  actionCreators
)(Population);

export function Population({ getPopulation, population, search }) {
  useEffect(() => {
    getPopulation();
  }, []);
  const searchedData = search
    ? population.data.filter(item => search === item["ID Year"].toString())
    : population.data;
  return (
    <div className="component">
      <h1>POPULATION STATISTICS</h1>
      {searchedData
        ? searchedData.map(item => {
            return (
              <div className="pop-data" key={item["ID Year"]}>
                <p className="para">Country: {item["Nation"]}</p>
                <p className="para">Year: {item["Year"]}</p>
                <p className="para">Population: {item["Population"]}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
