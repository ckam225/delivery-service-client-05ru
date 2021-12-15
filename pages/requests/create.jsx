import Link from "next/link";


const CreateRequestPage = () => {
    return <div className="p-5 w-full">
        <div className="flex justify-between items-center">
            <div className="flex">
                <h1 className="ml-4">Создать запросы доставок</h1>
            </div>
            <div className="flex">
                <Link href="/requests">
                    <a  className="link-button m-2">Назад</a>
                </Link>
            </div>
        </div>
 </div>
}
 
export default CreateRequestPage;