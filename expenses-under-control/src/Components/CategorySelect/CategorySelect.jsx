import { useEffect, useState } from "react";
import "./categorySelect.css"


const CategorySelect = ({costsData, onChange, categoryName}) => {

    const getCategories = (arr) => {
        let result = [];

        for (let i of arr) {
            result.push(i.category);
        }

        return [...new Set(result)];
    }

    const [categoryNames, setCategoryNames] = useState([]);
    useEffect(() => {
        return setCategoryNames(getCategories(costsData))
    }, [costsData]);

    const onCategoryNameChangeHandler = (event) => {
        onChange(event.target.value);
    }

    return (
        <select value={categoryName} className="category-select" onCategoryNameChange={onCategoryNameChangeHandler}>
            <option disabled selected>choose category name</option>
            {categoryNames.length > 0 && categoryNames.map((cN, i) => <option value={cN} key={i}>{cN}</option>)}
        </select> 
    )
}

export default CategorySelect;