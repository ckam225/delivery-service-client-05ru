import axios from "axios";
import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";
import { useState } from "react/cjs/react.development";
import AddressForm from "../../components/address/AddressForm";
import GoodListForm from "../../components/goods/GoodListForm";
import { fetchClients } from "../api/clients";
import { fetchDeliveryTypes } from "../api/deliveryTypes";
import { createEagalRequests } from "../api/requests";


const CreateRequestPage = ({clients, deliveryTypes}) => {

    const [loading, setLoading] = useState(false)

    const [values, setValues] = useState({
        dispatch_address: null,
        delivery_address: null,
        client_id: '',
        delivery_type_id: '',
        goods: []
    })

    function handleFieldChange(e){
       setValues({
           ...values,
           [e.target.name]: e.target.value
       })
    }

    function handleGoodsChange(goods){
        console.log('goods', goods);
        setValues({
            ...values,
            goods: goods
        })
    }

    function handleDispatchAddressChange(address){
        setValues({
            ...values,
            dispatch_address: address
        })
    }

    function handleDeliveryAddressChange(address){
        setValues({
            ...values,
            delivery_address:address
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        //if(values.client_id && values.delivery_type_id && values.goods.length && values.dispatch_address && values.delivery_address){
            // setLoading(true)
            // const res = await createEagalRequests(values)
            // console.log('', res);
            // setLoading(false)
        //}
        const req = await createEagalRequests(values)
        // const req =  await fetch({
        //     url:'http://localhost:8000/requests/eagle-store',
        //     method:'POST',
        //     body: JSON.stringify(values),
        //     headers:{
        //         "Content-Type": "application/json",
        //         'Accept': 'application/json'
        //     }
        // })
    
        console.log( req.data)
    }

    return <form className="p-5 w-full" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
           <Link href="/requests">
               <a  className="flex items-center text-primary-dark m-2">
                        <VscArrowLeft/>
                        Назад
                </a>
            </Link>
            <div className="flex flex-1 justify-around">
                <h1 className="ml-4">Создать запросы доставок</h1>
            </div>
        </div>
        
        <div className="flex w-full flex-col p-5">
            <h1>Адрес отправления</h1>
            <AddressForm className="flex-1" inputClass="my-2" handleChange={handleDispatchAddressChange}/>
            <h1 className="mt-5">Адрес получения</h1>
            <AddressForm  className="flex-1" handleChange={handleDeliveryAddressChange}/>
        </div>

        <div className="w-full p-5 flex">
            <div className="w-full">
                <div>Клиент</div>
                <select name="client_id" className="field" value={values.client_id}  onChange={handleFieldChange}>
                  <option value=""></option>
                {clients.map(client => <option value={client.id} key={client.id}>{client.name}</option>)}
                </select>
            </div>
            <div className="w-full ml-5">
                <div>Тип доставки</div>
                <select name="delivery_type_id" className="field" value={values.delivery_type_id} onChange={handleFieldChange}>
                    <option value=""></option>
                    {deliveryTypes.map(dt => <option value={dt.id} key={dt.id}>{dt.name}</option>)}
                </select>
            </div>
        </div>

        <div className="flex w-full flex-col p-5">
            <h1>Список грузов</h1>
            <GoodListForm handleChange={handleGoodsChange}/>
        </div>

        {!loading && <div className="flex justify-end items-center p-5">
            <button className="btn btn-danger mr-2" type="reset">Отменить</button>
            <button className="btn" type="submit">Отправить</button>
        </div>}

 </form>
}

export async function getServerSideProps(){

    const clients = await fetchClients();
    const deliveryTypes = await fetchDeliveryTypes()

    return {
        props: {
            clients: clients.data || [],
            deliveryTypes: deliveryTypes.data || []
        }
    }
}
 
export default CreateRequestPage;