import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";
import "./offer.css";
import Title from "../UI/Title/Title";
import OfferCard from "./OfferCard";
import Text from "../UI/Text/Text";

const Offer = () => {

    const cardsData = [{
        tag: "sport",
        name: "fitness club membership",
        amount: 48,
        date: "08/01/2023",
        className: "card__dark",
        id: 0,
        }, {
        tag: "beauty",
        name: "lipstick",
        amount: 100,
        date: "12/01/2023",
        className: "card__medium",
        id: 1,
        }, {
        tag: "food",
        name: "pizza delivery",
        amount: 30,
        date: "23/01/2023",
        className: "card__light",
        id: 2,
        }
    ]

    return (
        <div className="offer">
            <Container className="container__center">
                <div className="offer__desc">
                    <Title>
                        Monitor Expenses
                    </Title>
                    <Text>
                        Understanding where your money goes
                    </Text>
                    <Button className="btn__colored">               
                        Consider costs
                    </Button>
                </div>
                <div className="offer__deco">
                    <div className="offer__img"></div>
                    <div className="offer__cards">
                        {cardsData.map(c => <OfferCard tag={c.tag} name={c.name} date={c.date} amount={c.amount} className={c.className} key={c.id}/>)}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Offer;