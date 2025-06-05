'use client';
import { redirect } from "next/dist/server/api-utils";
import { trpc } from "../lib/trpc";

function HelloComponent(){

    const helloQuery = trpc.hello.greeting.useQuery({ name: "World" });

    if (helloQuery.isLoading) return <p>Loading...</p>;
    if (helloQuery.isError) return <p>Error: {helloQuery.error.message}</p>;

    const handldeClick = () => {
        console.log("Button clicked!");
        
    }

    return(
        <div className="border-2 bg-gray-300 p-4 m-4 text-shadow-lg  mx-auto">
            {/* header */}
            <div className="relative flex flex-row items-center justify-between px-8 py-4 bg-white shadow-md rounded-md w-full">
            {/* Left-aligned title */}
            <h1 className="text-2sm font-serif font-semibold text-gray-800 ">Note Application</h1>

            {/* Centered nav */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-5">
                <button className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Report</button>
                <button className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Dashboard</button>
            </div>
            </div>

            <div>
            </div>

            
            
            <button 
                className="border-3 mt-10 ml-3 p-1 rounded-md hover:bg-amber-200 bg-amber-50"
                onClick={() => handldeClick}
                > Click here </button>
        </div>
        
        
    );

} export default HelloComponent;