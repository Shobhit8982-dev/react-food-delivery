import { useRouteError } from "react-router-dom"

const Error = () => {
   const error = useRouteError();
   console.log("error page", error);
   
   return (
    <>
    <div>
         {JSON.stringify(error)}
    </div>
    <div className="flex flex-col items-center justify-center h-screen">
         <h1 className="font-bold text-4xl m-4 p-4">404 - Page Not Found</h1>
        <p className="m-4 p-4">The page you are looking for does not exist.</p>
    </div>
    </>
   )
}
export default Error