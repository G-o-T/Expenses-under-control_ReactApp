import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import Text from "../UI/Text/Text";
import "./form.css";
import CategorySelect from "../CategorySelect/CategorySelect";

const Form = ({onSaveNewCostData, costsData}) => {

    const useValidation = (value, validations) => {
        const [isEmpty, setEmpty] = useState(true);
        const [letterError, setLetterError] = useState(false);
        const [inputValid, setInputValid] = useState(false);

        const regEx = /^[a-zA-Z]+$/g;

        useEffect(() => {
            for (const validation in validations) {
                switch (validation) {
                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true);
                        break;
                    case 'letterError':
                        regEx.test(String(value).toLowerCase()) ? setLetterError(false) : setLetterError(true);
                        break;
                }
            }
            
        }, [value]);

        useEffect(() => {
            if (isEmpty || letterError) {
                setInputValid(false);
            } else {
                setInputValid(true);
            }
        }, [isEmpty, letterError]);

        return {
            isEmpty,
            letterError,
            inputValid
        } 
    };

    const useInput = (initialValue, validations) => {
        const [value, setValue] = useState(initialValue);
        const [isAttended, setAttended] = useState(false);
        const valid = useValidation(value, validations);

        const onChange = (e) => {
            setValue(e.target.value);
        };

        const onBlur = () => {
            setAttended(true);
        }

        const clearInput = () => {
            setValue('');
            setAttended(false);
        }

        return {
            value,
            onChange,
            onBlur,
            isAttended,
            ...valid,
            clearInput
        }
    }

    
    const category = useInput('', {isEmpty: true, letterError: false});
    const name = useInput('', {isEmpty: true});
    const date = useInput('', {isEmpty: true});
    const amount = useInput('', {isEmpty: true});
    const color = useInput('', {isEmpty: true});
    const categoryDefault = useInput('', {isEmpty: true})

    const clickHandler = (e) => {
        e.preventDefault();

        const newCostData = {
            name: name.value,
            category: category.value,
            date: new Date(date.value),
            id: new Date(),
            amount: amount.value,
            color: color.value,
        }

        onSaveNewCostData(newCostData);

        category.clearInput();
        name.clearInput();
        date.clearInput();
        amount.clearInput();
        color.clearInput();
    }

    const cancelClickHandler = (e) => {
        e.preventDefault();
        category.clearInput();
        name.clearInput();
        date.clearInput();
        amount.clearInput();
        color.clearInput();
    }

    // const [categories, setCategories] = useState([
    //     {categoryName: 'food', categoryColor: },
    //     {categoryName: 'sport', categoryColor: "#78f098"},
    //     {categoryName: 'beauty', categoryColor: "#f078c6"},
    //     {categoryName: 'health', categoryColor: "#78a4f0"},
    //     {categoryName: 'clothes', categoryColor: "#b278f0"},
    //     {categoryName: 'home maintenance', categoryColor: "#6b583e"},
    // ]);


    return (
        <form className="form">
            <div className="form__inputs">
                <div className="form__block">
                    <div className="form__row"> 
                        <Text>
                            Choose category name
                        </Text>
                        <CategorySelect costsData={costsData} name='categoryDefault' categoryName={categoryDefault.value} onChange={e => categoryDefault.onChange(e)}/>
                    </div>
                    <div className="form__piece">
                        <div className="form__row"> 
                            <label className="form__label">
                                <Text>
                                    or create category name and color
                                </Text>
                            </label>
                            <div className="form__piece">
                                <input type="text" name='category' value={category.value} onChange={e => category.onChange(e)} onBlur={e => category.onBlur(e)} className={category.isAttended && !category.inputValid ? "form__input form__input_440w form__error" : "form__input form__input_440w"} />
                                <input type="color" name='color' value={color.value} onChange={e => color.onChange(e)} onBlur={e => color.onBlur(e)} className={color.isAttended && !color.inputValid ? "form__input form__input_color form__error" : "form__input form__input_color"} />
                            </div>
                        </div>
                        <div className="form__row">
                        </div>
                    </div>
                </div>
                <div className="form__block">
                    <div className="form__row">
                        <label className="form__label">
                            <Text>
                                Name
                            </Text>
                        </label>
                        <input type="text" name='name' value={name.value} onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} className={name.isAttended && !name.inputValid ? "form__input form__input_660w form__error" : "form__input form__input_660w"} />
                    </div>
                    <div className="form__row">
                        <label className="form__label">
                            <Text>
                                Date
                            </Text>
                        </label>
                        <input type="date" name='date' value={date.value} onChange={e => date.onChange(e)} onBlur={e => date.onBlur(e)} className={date.isAttended && !date.inputValid ? "form__input form__input_660w form__error" : "form__input form__input_660w"} min="2023-01-01" />
                    </div>
                    <div className="form__row">
                        <label className="form__label">
                            <Text>
                                Amount
                            </Text>
                        </label>
                        <input type="number" name='amount' value={amount.value} onChange={e => amount.onChange(e)} onBlur={e => amount.onBlur(e)} className={amount.isAttended && !amount.inputValid ? "form__input form__error" : "form__input"} min="0.01" step="0.01"/>
                    </div>
                </div> 
            </div>
            <div className="form__btns">
                {/* <Button disabled={!category.inputValid || !name.inputValid || !date.inputValid || !amount.inputValid} className="btn__colored" onClick={clickHandler}>Add new expense</Button> */}
                <Button className="btn__colored" onClick={clickHandler}>Add new expense</Button>
                <Button className="btn__bordered" onClick={cancelClickHandler}>Cancel</Button>
            </div>
        </form>
    )

}

export default Form;