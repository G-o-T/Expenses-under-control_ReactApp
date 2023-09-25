import "./costs.css";
import Cost from "../Cost/Cost";

const CostsContainer = ({filteredData}) => {

    const length = filteredData.length;
    const defaultContent = <p className="costs__default">There are no expenses during this period.</p>

    return (
        <div className="costs__list">
            {length > 0 ? filteredData.map(fd => <Cost category={fd.category} name={fd.name} date={fd.date} amount={fd.amount} key={fd.id} color={fd.color}/>): defaultContent}
        </div>
    )

}

export default CostsContainer;