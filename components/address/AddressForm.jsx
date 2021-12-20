import { useEffect, useState } from "react";


const AddressForm = ({inline=false, className='', inputClass='my-2', handleChange}) => {
  const [state, setState] = useState({
    country: '',
    region: '',
    city: '',
    street: '',
    house: '',
    flat: '',
    index: ''
  })

  useEffect(() => handleChange(state) , [state])

  function handleInputChange(e){
    const newState = {...state}
    newState[e.target.name] = e.target.type === 'checkbox' ? e.target.checked :  e.target.value
    setState(newState)
  }
  
    return <div className={['flex', inline ? '': 'flex-col', className].join(' ')}>
        <div className="flex">
          <input type="text" name="country" className={["field", inputClass].join(' ')} placeholder="Страна" onChange={handleInputChange}/>
        </div>
        <div className="flex">
          <input type="text" name="region" className={["field", inputClass].join(' ')} placeholder="Регион" onChange={handleInputChange}/>
        </div>
        <div className="flex">
          <input type="text" name="city" className={["field", inputClass].join(' ')} placeholder="Город" onChange={handleInputChange}/>
        </div>
        <div className="flex">
          <input type="text" name="street" className={["field", inputClass].join(' ')} placeholder="Улица" onChange={handleInputChange}/>
        </div>
        <div className="flex">
          <input type="text" name="house"  className={["field", inputClass].join(' ')} placeholder="Номер дома" onChange={handleInputChange} />
        </div>
        <div className="flex">
          <input type="text" name="flat"  className={["field", inputClass].join(' ')} placeholder="Квартира/Помещение" onChange={handleInputChange} />
        </div>
        <div className="flex">
          <input type="text" name="index"  className={["field", inputClass].join(' ')}  placeholder="Индекс" onChange={handleInputChange} />
        </div>
    </div>
}
 
export default AddressForm;