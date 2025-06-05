import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `We want a message that correlates to this field:`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("in backend, body is", body);

    if (!process.env.AZURE_OPENAI_KEY) {
      throw new Error("Azure OpenAI API key not configured");
    }

    if (!process.env.AZURE_OPENAI_ENDPOINT) {
      throw new Error("Azure OpenAI endpoint not configured");
    }

    const response = await fetch(
      `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/gpt35turbo/chat/completions?api-version=2024-02-15-preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.AZURE_OPENAI_KEY,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: systemPrompt
            },
            ...(body.messages || [])
          ],
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Azure OpenAI API error:", errorData);
      throw new Error(`Azure OpenAI API error: ${response.status}`);
    }

    console.log("in backend, response is", response);
    const data = await response.json();
    console.log("in backend, data is", data);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error?.message || "An error occurred" },
      { status: 500 }
    );
  }
}


// export async function POST(req: Request) {
//     const openai = new OpenAI({
//         apiKey: process.env.OPENAI_API_KEY,
//     });
//     const data = await req.json();
//     const completion = await openai.chat.completions.create({
//         messages: [
//             {
//                 role: "system",
//                 content: systemPrompt,

//             },
            
//             ...data,
//         ],
//         model: "gpt-3.5-turbo",
//         stream: true
//     });

//     const stream = new ReadableStream({
//         async start(controller) {
//             const encoder = new TextEncoder();
//             try {
//                 for await (const chunk of completion) {
//                     const content = chunk.choices[0]?.delta?.content;
//                     if (content) {
//                         const text = encoder.encode(content);
//                         controller.enqueue(text);
//                     }
//                 }
//             } finally {
//                 controller.close();
//             }
//         }
//     });

//     return new NextResponse(stream);
// }