import ClientTable from "../../components/clients/ClientTable";
import { fetchClients } from "../api/clients";


const ClientHomePage = ({clients}) => {

    console.log(clients);

    return <div className="p-5 w-full">
       <div className="flex justify-between items-center">
         <h1>Клиенты</h1>
         <div className="flex">
            
         </div>
       </div>
        <ClientTable clients={clients}/>
    </div>
}


export async function getServerSideProps() {
    const res = await fetchClients()
    return {
      props: {
        clients: res.data || []
      }
    }
  }
 

export default ClientHomePage;