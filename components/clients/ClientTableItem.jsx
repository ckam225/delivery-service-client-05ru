

const ClientTableItem = ({client}) => {
    return <tr key={client.id}>
    <td>{client.id}</td>
    <td>{client.name}</td>
</tr>
}
 
export default ClientTableItem;