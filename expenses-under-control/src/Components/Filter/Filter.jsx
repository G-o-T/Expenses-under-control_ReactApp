import "./filter.css";
import { useEffect, useState } from "react";

const Filter = ({costsData, onChangeYear, year, filteredData}) => {

    const getYear = (arr) => {
        let result = [];

        for (let i of arr) {
            result.push(i.date.getFullYear().toString());
        }

        return [...new Set(result)];
    }

    const [years, setYears] = useState([]);
    useEffect(() => {
        return setYears(getYear(costsData))
    }, [filteredData]);

    const yearChangeHandler = (event) => {
        onChangeYear(event.target.value);
    }

    return (
        <select value={year} onChange={yearChangeHandler}>
            <option disabled>Filter by year</option>
            <option value="all">all</option>
            {years.length > 0 && years.map((y, i) => <option value={y} key={i}>{y}</option>)}
        </select>
    )

}

export default Filter;

