import Link from "next/link";
import RequestTable from "../../components/requests/RequestTable";
import { fetchRequests } from "../api/requests";


const RequestHomePage = ({requests}) => {

    console.log(requests);

    return <div className="p-5 w-full">
       <div className="flex justify-between items-center">
         <h1>Запросы доставок</h1>
         <div className="flex">
            <Link href="/requests/create">
                <a  className="link-button m-2">Create request</a>
            </Link>
         </div>
       </div>
        <RequestTable requests={requests}/>
    </div>
}


export async function getServerSideProps() {
    const res = await fetchRequests()
    return {
      props: {
        requests: res.data || []
      }
    }
  }
 

export default RequestHomePage;