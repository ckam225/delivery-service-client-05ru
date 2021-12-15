

const GoodTableItem = ({good}) => {
    return <tr key={good.id}>
    <td>{good.id}</td>
    <td>{good.package_type}</td>
    <td>{good.weight}</td>
    <td>{good.width}</td>
    <td>{good.height}</td>
    <td>{good.length}</td>
    <td>{good.size}</td>
    <td>{good.fragile}</td>
    <td>{good.temp_conditions}</td>
    <td>{good.cost}</td>
    {/* <td>{good.request_id}</td> */}
    <td>{good.parcel_id}</td>
</tr>
}
 
export default GoodTableItem;