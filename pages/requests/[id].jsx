import { fetchRequest } from "../api/requests";
import * as React from 'react'
import GoodTable from "../../components/goods/GoodTable";
import QuoteDeliveryCostTable from "../../components/requests/QuoteDeliveryCostTable";
import Link from "next/link";


const RequestDetailPage = ({request}) => {
    console.log(request);

    const dispatchAddress = React.useMemo(() => {
        return formatAddress(request.dispatch_address)
    }, [])

    const deliveryAddress = React.useMemo(() => {
        return formatAddress(request.delivery_address)
    }, [])

    function formatAddress(address){
        const l=Object.values(address);
        return l.slice(1, l.length - 1).join(', ')
    }

    return <div className="w-full">
        <div className="p-5 flex justify-between items-center">
            <div className="flex">
                <Link href="/requests">
                    <a  className="link-button m-2">Назад</a>
                </Link>
            </div>
            
        </div>
        <div className="w-full flex justify-between">
            <div className="p-5">
                <div className="py-1">
                    <div className="text-gray-500">Уникальный индентификатор: </div> 
                    <em>{request.id}</em>
                </div>
                <div className="py-1">
                    <div className="text-gray-500">Клиент: </div> 
                    <em>{request.client.name}</em>
                </div>
                <div className="py-1">
                  <div className="text-gray-500">Тип доставки: </div> 
                  <em>{request.delivery_type.name}</em>
                  <p className="text-xs">{request.delivery_type.description}</p>
                </div>
            </div>
            <div className="p-5">
                <div className="py-1">
                    <div className="text-gray-500">Адрес отправления</div>
                    <div className=" text-sm">
                        {dispatchAddress}
                    </div>
                </div>
                <div className="py-1">
                    <div className="text-gray-500">Адрес получения</div>
                    <div className=" text-sm">
                        {deliveryAddress}
                    </div>
                </div>
            </div>
        </div>
        <div className="flex p-5 justify-between">
        <div className="text-primary-dark">Список грузов</div>
          <button className="btn">Добавить товар</button>
        </div>
        
        <div className="flex w-full p-5">
            {request?.goods && <GoodTable goods={request.goods}/>}
        </div>

        <div className="flex p-5 justify-between">
          <div className=" text-primary-dark">Стоимости по компании</div>
          <button className="btn">Предложить стоимость доставки</button>
        </div>
        <div className="p-5">
            <QuoteDeliveryCostTable quotes={request?.quote_delivery_costs || []}/>
        </div>
    </div>
}


export async function getServerSideProps({params}){
    console.log('params', params);
    const res = await fetchRequest(params.id)
    return {
        props: {
          request: res.data
        }
    }
}
 
export default RequestDetailPage;