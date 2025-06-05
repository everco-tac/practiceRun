module.exports = {

"[project]/.next-internal/server/app/api/gptNotes/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/gptNotes/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
const systemPrompt = `We want a mesage that correlates to this field:`;
async function POST(req) {
    const body = await req.json();
    console.log("in backend, body is", body);
    const response = await fetch("https://acqbotai.openai.azure.us/openai/deployments/gpt35turbo/chat/completions?api-version=2024-01-25", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key": process.env.AZURE_OPENAI_KEY
        },
        body: JSON.stringify({
            messages: body.messages,
            temperature: 0.7
        })
    }).catch((error)=>{
        console.error("Error fetching from Azure OpenAI:", error);
        return new Response("Error fetching from Azure OpenAI", {
            status: 500
        });
    });
    const data = await response.json();
    console.log("in backend, data is", data);
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    });
} // export async function POST(req: Request) {
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
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5d295664._.js.map