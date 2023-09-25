import Container from "../UI/Container/Container";
import Form from "../Form/Form";
import Title from "../UI/Title/Title";

const NewCost = ({onAddNewCostData, costsData}) => {

    const saveNewCostData = (inputCostData) => {

        onAddNewCostData(inputCostData);
    }


    return (
        <Container>
            <Title className="title__margin">Enter your expenses</Title>
            <Form onSaveNewCostData={saveNewCostData} costsData={costsData}/>
        </Container>
    )
}

export default NewCost;