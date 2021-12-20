import DeliverGird from "../../components/delivers/DeliverGrid";
import { fetchDelivers } from "../api/delivers";


const DeliverPage = ({delivers=[]}) => {
    console.log('delivers', delivers);

    function handleItemClick(deliver){

    }

    return <div className="p-5 w-full">
    <div className="flex justify-between items-center">
       <div className="flex items-center py-2">
         <h1>Компании доставки</h1>
       </div>
      <div className="flex">
         
      </div>
    </div>
     <DeliverGird delivers={delivers} onItemClick={handleItemClick}/>
 </div>
}

export async function getServerSideProps(){

    const res =  await fetchDelivers()

    return {
        props: {
            delivers: res.data || []
        }
    }
}
 
export default DeliverPage;