import "./cost.css";
import CostDate from "../CostDate/CostDate";

const Cost = (props) => {
    return (
        <div className="cost">
            <div className="cost__block">
                <div className="cost__tag" style={{backgroundColor: props.color}}>
                    {props.category}
                </div>
            </div>
            <div className="cost__block">
                <CostDate date={props.date}/>
                <div className="cost__name">
                    {props.name}
                </div>
            </div>
            <div className="cost__block">
                <div className="amount-container">
                    <div className="cost__amount">
                        {props.amount}
                    </div>
                    <p>$ </p>
                </div>
            </div>
        </div>
    )
}

export default Cost;