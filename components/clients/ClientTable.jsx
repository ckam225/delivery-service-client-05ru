import GoodTableItem from "./ClientTableItem";


const ClientTable = ({clients =[]}) => {
    return <table>
    <thead>
        <tr>
            <th>Уникальный индентификатор</th>
            <th>Название</th>
        </tr>
    </thead>
    <tbody>
        {clients.length > 0 ? clients.map(client => <GoodTableItem client={client} key={client.id} />) : <tr>
            <td colSpan="2" className="text-center">No clients available</td>
        </tr>}
    </tbody>
</table>
}
 
export default ClientTable;