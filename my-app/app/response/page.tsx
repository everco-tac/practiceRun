'use client';

import { useSearchParams } from 'next/navigation';

export default function ResponsePage() {
    const searchParams = useSearchParams();
    const field = searchParams.get('field');
    
    console.log("in response page, field is", field);
    return (
        <div>
            <h1>Response</h1>
            <div id="gpt-response" className="mt-10 border-2 border-black-500 rounded-md p-4">
                <p>Our Response</p>
                <p>{field || 'No response available'}</p>
            </div>
        </div>
    )
}
