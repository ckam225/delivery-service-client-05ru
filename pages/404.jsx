import Link from "next/link"

function NotFoundPage() {
    return <div className="w-screen h-screen flex items-center justify-center flex-col">
        <h1 className="text-3xl">404 | Page Not Found</h1>
        <div className="text-sm text-primary-dark">
           <Link href="/">Go to home page</Link>
        </div>
    </div>
}

const Layout = ({children}) => <>{children}</>
NotFoundPage.Layout = Layout

export default NotFoundPage