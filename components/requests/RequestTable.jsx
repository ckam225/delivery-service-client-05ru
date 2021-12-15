
import RequestItem from "./RequestItem";



const RequestTable = ({requests= []}) => {
    return <table>
        <thead>
            <tr>
                <th>Уникальный индентификатор</th>
                <th>Клиент</th>
                <th>Тип доставки</th>
                <th>Адрес отправления</th>
                <th>Адрес получения</th>
            </tr>
        </thead>
        <tbody>
            {requests.length > 0 ? 
             requests.map(req => <RequestItem request={req} key={req.id}/>):
             <tr>
                 <td colSpan="5" className="text-center">No requests available</td>
             </tr>
            }
        </tbody>
       
    </table>
}
 
export default RequestTable;