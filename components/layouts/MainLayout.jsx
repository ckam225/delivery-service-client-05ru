import Link from "next/link";
import ActiveLink from "../ActiveLink";



const MainLayout = ({children}) => {
    return <div className="flex w-screen h-screen">
        <div className="sidebar h-full bg-blue-100 p-4">
            <ul>
                <li>
                    
                   <ActiveLink href="/clients">
                      <a className="nav-link">Клиенты</a>
                   </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/requests" activeClassName="text-primary-dark">
                       <a className="nav-link">Запросы доставки</a>
                    </ActiveLink>
                </li>
            </ul>
        </div>
        <div className="flex flex-1">
            {children}
        </div>
    </div>
}
 
export default MainLayout;