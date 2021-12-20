import { useEffect, useState } from "react";
import {VscAdd, VscChromeMinimize} from 'react-icons/vsc';

export const initialGoodValue = {
    id: Date.now(),
    package_type: '',
    weight: '',
    width: '',
    height: '',
    length: '',
    size: '',
    fragile: false,
    temp_conditions: '',
    cost: '',
}

const GoodForm = ({index=0, count=0, inputClass='', value=initialGoodValue, handleInputChange, handleAddLine, handleRemoveLine}) => {


    return  <tr>
        <td>
          <input type="text" name="package_type" className={["field", inputClass].join(' ')} placeholder="Тип упаковки" value={value.package_type} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="text" name="weight" className={["field", inputClass].join(' ')} placeholder="Вес" value={value.weight} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="text" name="width" className={["field", inputClass].join(' ')} placeholder="Ширина" value={value.width} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="text" name="height" className={["field", inputClass].join(' ')} placeholder="Высота" value={value.height} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="text" name="length" className={["field", inputClass].join(' ')} placeholder="Длина" value={value.length} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="text" name="size" className={["field", inputClass].join(' ')} placeholder="Объем" value={value.size} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="checkbox" name="fragile" value={value.fragile} className={["field", inputClass].join(' ')}onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="text" name="temp_conditions" className={["field", inputClass].join(' ')} placeholder="Температурный режим" value={value.temp_conditions} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        <td>
          <input type="text" name="cost" className={["field", inputClass].join(' ')} placeholder="Стоимость" value={value.cost} onChange={(event) => handleInputChange(value.id, event)}/>
        </td>
        {count === 0 || index === count -1 && <td>
          <VscAdd className="cursor-pointer"  onClick={()=>handleAddLine(index)}/>
        </td>}
        {index != 0 && <td>
            <VscChromeMinimize className="cursor-pointer" onClick={()=>handleRemoveLine(index)}/>
        </td>}
        
    </tr>
}
 
export default GoodForm;