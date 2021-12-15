import Link from 'next/link'
import * as React from 'react'


const RequestItem = ({request}) => {

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

    return <tr>
        <td>
            <Link href={`/requests/${request.id}`}>
               <a className='hover:text-primary-dark'>{request.id}</a>
            </Link>
        </td>
        <td>{request.client.name}</td>
        <td title={request.delivery_type.description}>
            {request.delivery_type.name}
        </td>
        <td>{dispatchAddress}</td>
        <td>{deliveryAddress}</td>
    </tr>
}
 
export default RequestItem;