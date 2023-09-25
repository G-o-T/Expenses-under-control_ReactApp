import React, { useState } from "react";
import Container from "../UI/Container/Container";
import Title from "../UI/Title/Title";
import CostsContainer from "./CostsContainer";
import Filter from "../Filter/Filter";
import "./costs.css"

const Costs = ({costsData}) => {

    const [selectedYear, setSelectedYear] = useState('all');
    const filteredData = selectedYear === 'all' ? costsData : costsData.filter(cD => cD.date.getFullYear().toString() === selectedYear);

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    return (
        <Container>
            <Title className="title__margin">
                List of expenses
            </Title>
            <Filter costsData={costsData} onChangeYear={yearChangeHandler} year={selectedYear} filteredData={filteredData}/>
            <div className="costs__list">
                <CostsContainer filteredData={filteredData}/>
            </div>
        </Container>
    )
}

export default Costs;