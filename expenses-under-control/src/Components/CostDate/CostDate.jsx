import "./costDate.css";

const CostDate = ({date}) => {
    const year = date.getUTCFullYear();
    const month = date.toLocaleString("en-US", {month: "long"});
    const day = date.toLocaleString("en-US", {day: "2-digit"});
    

    return (
        <div className="date">
            {month + " " + day + ", " + year} 
        </div>
    )
}

export default CostDate;