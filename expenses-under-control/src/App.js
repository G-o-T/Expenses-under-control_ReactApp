import React, { useState } from "react";
import Offer from "./Components/Offer/Offer";
import NewCost from "./Components/AddNewCost/NewCost";
import Costs from "./Components/Costs/Costs";

const initialData = [{
    category: "sport",
    name: "fitness club membership",
    amount: 48,
    date: new Date(2023, 7, 1),
    id: 0,
    color: "#78f098"
    }, {
    category: "beauty",
    name: "lipstick",
    amount: 100,
    date: new Date(2023, 7, 12),
    id: 1,
    color:"#f078c6",
    }, {
    category: "food",
    name: "pizza delivery",
    amount: 30,
    date: new Date(2023, 7, 23),
    id: 2,
    color: "#f0c478",
    }, {
    category: "food",
    name: "pizza for a year",
    amount: 400,
    date: new Date(2024, 5, 9),
    id: 3,
    color: "#f0c478",
    },{
    category: "health",
    name: "dentist",
    amount: 160,
    date: new Date(2025, 5, 9),
    id: 4,
    color: "#78a4f0",
    }];

function App() {

  const [costsData, setCostsData] = useState(initialData);

  const addNewCostData = (newCost) => {
    setCostsData(prevCostsData => {
      return [newCost, ...prevCostsData];
    })
  }

  return (
    <>
      <Offer />
      <NewCost onAddNewCostData={addNewCostData} costsData={costsData}/>
      <Costs costsData={costsData}/>
    </>
  );
}

export default App;

