import "./offerCard.css";

const OfferCard = (props) => {

    const cardClassName = "card " + props.className;

    return (
        <div className={cardClassName}>
            <div className="card__block">
                <div className="card__tag">
                    {props.tag}
                </div>
                <div className="card__name">
                    {props.name}
                </div>
            </div>
            <div className="card__block card__block_right">
                <div className="card__date">
                    {props.date}
                </div>
                <div className="amount-container">
                    <div className="card__amount">
                        {props.amount}
                    </div>
                    <p>$ </p>
                </div>
            </div>
        </div>
    )
}

export default OfferCard;