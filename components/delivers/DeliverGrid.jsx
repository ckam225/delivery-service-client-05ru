import DeliverTableItem from "./DeliverGridItem";


const DeliverGird = ({delivers =[], onItemClick}) => {

    function handleItemClick(deliver){
        onItemClick(deliver)
    }

    return <div className="grid grid-cols-4 gap-2">
        {delivers.length > 0 ? delivers.map(deliver => <DeliverTableItem deliver={deliver} key={deliver.id} onClick={handleItemClick}/>) 
        : <div className="col-span-4">
           No delivers available
        </div>}
    </div>
}
 
export default DeliverGird;