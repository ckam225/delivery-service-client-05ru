import { useEffect, useState } from "react";
import GoodForm, { initialGoodValue } from "./GoodForm";

const GoodListForm = ({handleChange}) => {

    const [values, setValues] = useState([{...initialGoodValue}])
   
    useEffect(() => handleChange(values), [values])

    function handleInputChange(id,e){
        const fieldValues = values.map(value => {
            if(value.id === id){
                value[e.target.name] = e.target.type === 'checkbox' ? e.target.checked :  e.target.value
            }
            return value
        })
        setValues(fieldValues)
    }
 
    function handleAddLine(index){
        setValues([...values, {...initialGoodValue, id: Date.now()}])
    }

    function handleRemoveLine(index){
        const newValues = [...values]
        setValues(newValues.filter((v, i) =>  i !== index));
    }

    return <table>
        <thead>
            <tr>
                <th>Тип упаковки</th> 
                <th>Вес</th> 
                <th>Ширина</th>
                <th>Высота</th>
                <th>Длина</th> 
                <th>Объем</th>
                <th>Хрупкое</th>
                <th>Температурный режим</th>
                <th>Стоимость</th>
            </tr>
        </thead>
        <tbody>
            {values.map((good,i) => <GoodForm key={i} index={i} value={good} count={values.length}
                handleAddLine={handleAddLine}
                handleRemoveLine={handleRemoveLine}
                handleInputChange={handleInputChange}
            />)}
        </tbody>
    </table>
}
 
export default GoodListForm;