'use client';

import { useEffect, useState } from "react";
import { trpc } from "../lib/trpc";
import { useRouter } from "next/navigation";
import Link from "next/link";
function HelloComponent(){
    const [name, setName] = useState("");
    const [field, setField] = useState("");
    const [response, setResponse] = useState("");
    const router = useRouter();
    //const helloQuery = trpc.hello.greeting.useQuery({ name: "World" });

    //if (helloQuery.isLoading) return <p>Loading...</p>;
    //if (helloQuery.isError) return <p>Error: {helloQuery.error.message}</p>;

    const handleClick = async () => {
        try {
            const response = await fetch("/api/gptNotes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "user",
                            content: field
                        }
                    ]
                })
            });

            const data = await response.json();
            console.log("API Response:", data);

            const content = data.choices[0].message.content;
            setResponse(content);
            router.push(`/response?field=${encodeURIComponent(content)}`);
        //setResponse(() => data.choices[0].message.content);
        //console.log("in hello component, response is", response);
        //router.push(`/response?field=${data.choices[0].message.content}`);
        // const reader = response.body?.getReader();
        // const decoder = new TextDecoder();

        // if (!reader) return;
        // while (true) {
        //     const {done, value} = await reader.read();
        //     if (done) break;
        //     const chunk = decoder.decode(value || new Uint8Array(), {stream: true});
        //     setResponse((prev) => prev + chunk);
        //}
    } catch (error) {
        console.error("Error calling API:", error);
    }
    }
    // Uncomment if you want to use the name state
    useEffect(() => {
        const name = 'jaydon';
        setName(name);
    }, []);

    return(
        <div className="border-2 bg-gray-300 p-4 m-4 text-shadow-lg  mx-auto">
            {/* header */}
            <div className="relative flex flex-row items-center justify-between px-8 py-4 bg-white shadow-md rounded-md w-full">
                {/* Left-aligned title */}
                <h1 className="text-2sm font-serif font-semibold text-gray-800 ">Note Application {name}</h1>

                {/* Centered nav */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-5">
                    <button className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Report</button>
                    <button className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">Dashboard</button>
                </div>
            </div>
            
            <div className="mt-5">
                Enter field here: <input type="text" className="border-2 border-black-500 rounded-md font-semibold" value={field} onChange={(e) => setField(e.target.value)} />
            </div>
            <h1>Our field is {field}</h1>
            
            <button 
                className="border-3 mt-10 ml-3 p-1 rounded-md hover:bg-amber-200 bg-amber-50"
                onClick={handleClick}
            > Click here </button>
            <Link href="/playground">
                <button className="border-3 mt-10 ml-3 p-1 rounded-md hover:bg-amber-200 bg-amber-50">Playground</button>
            </Link>

            <h1> First change </h1>
            
            
        </div>
    )
}
export default HelloComponent;
