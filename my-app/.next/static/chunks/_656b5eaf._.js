(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/HelloComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HelloComponent() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [field, setField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    //const helloQuery = trpc.hello.greeting.useQuery({ name: "World" });
    //if (helloQuery.isLoading) return <p>Loading...</p>;
    //if (helloQuery.isError) return <p>Error: {helloQuery.error.message}</p>;
    const handleClick = async ()=>{
        try {
            const response = await fetch("/api/gptNotes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
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
    };
    // Uncomment if you want to use the name state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HelloComponent.useEffect": ()=>{
            const name = 'jaydon';
            setName(name);
        }
    }["HelloComponent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 bg-gray-300 p-4 m-4 text-shadow-lg  mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-row items-center justify-between px-8 py-4 bg-white shadow-md rounded-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2sm font-serif font-semibold text-gray-800 ",
                        children: [
                            "Note Application ",
                            name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/HelloComponent.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 transform -translate-x-1/2 flex space-x-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-lg font-medium text-gray-700 hover:text-blue-600 transition",
                                children: "Report"
                            }, void 0, false, {
                                fileName: "[project]/app/HelloComponent.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-lg font-medium text-gray-700 hover:text-blue-600 transition",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/HelloComponent.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/HelloComponent.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HelloComponent.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: [
                    "Enter field here: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "border-2 border-black-500 rounded-md font-semibold",
                        value: field,
                        onChange: (e)=>setField(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/HelloComponent.tsx",
                        lineNumber: 78,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HelloComponent.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: [
                    "Our field is ",
                    field
                ]
            }, void 0, true, {
                fileName: "[project]/app/HelloComponent.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "border-3 mt-10 ml-3 p-1 rounded-md hover:bg-amber-200 bg-amber-50",
                onClick: handleClick,
                children: " Click here "
            }, void 0, false, {
                fileName: "[project]/app/HelloComponent.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/playground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "border-3 mt-10 ml-3 p-1 rounded-md hover:bg-amber-200 bg-amber-50",
                    children: "Playground"
                }, void 0, false, {
                    fileName: "[project]/app/HelloComponent.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/HelloComponent.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/HelloComponent.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_s(HelloComponent, "Drm4WGbwMZaEVeeohjjNCi3OZU4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HelloComponent;
const __TURBOPACK__default__export__ = HelloComponent;
var _c;
__turbopack_context__.k.register(_c, "HelloComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// any shared frontend utility functions can go here
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/file-upload.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Clear": (()=>FileUploadClear),
    "Dropzone": (()=>FileUploadDropzone),
    "FileUpload": (()=>FileUploadRoot),
    "FileUploadClear": (()=>FileUploadClear),
    "FileUploadDropzone": (()=>FileUploadDropzone),
    "FileUploadItem": (()=>FileUploadItem),
    "FileUploadItemDelete": (()=>FileUploadItemDelete),
    "FileUploadItemMetadata": (()=>FileUploadItemMetadata),
    "FileUploadItemPreview": (()=>FileUploadItemPreview),
    "FileUploadItemProgress": (()=>FileUploadItemProgress),
    "FileUploadList": (()=>FileUploadList),
    "FileUploadTrigger": (()=>FileUploadTrigger),
    "Item": (()=>FileUploadItem),
    "ItemDelete": (()=>FileUploadItemDelete),
    "ItemMetadata": (()=>FileUploadItemMetadata),
    "ItemPreview": (()=>FileUploadItemPreview),
    "ItemProgress": (()=>FileUploadItemProgress),
    "List": (()=>FileUploadList),
    "Root": (()=>FileUploadRoot),
    "Trigger": (()=>FileUploadTrigger),
    "useFileUpload": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.6_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchiveIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-archive.js [app-client] (ecmascript) <export default as FileArchiveIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAudioIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-audio.js [app-client] (ecmascript) <export default as FileAudioIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCodeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCogIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-cog.js [app-client] (ecmascript) <export default as FileCogIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as FileIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideoIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-video.js [app-client] (ecmascript) <export default as FileVideoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ROOT_NAME = "FileUpload";
const DROPZONE_NAME = "FileUploadDropzone";
const TRIGGER_NAME = "FileUploadTrigger";
const LIST_NAME = "FileUploadList";
const ITEM_NAME = "FileUploadItem";
const ITEM_PREVIEW_NAME = "FileUploadItemPreview";
const ITEM_METADATA_NAME = "FileUploadItemMetadata";
const ITEM_PROGRESS_NAME = "FileUploadItemProgress";
const ITEM_DELETE_NAME = "FileUploadItemDelete";
const CLEAR_NAME = "FileUploadClear";
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ("TURBOPACK unreachable", undefined);
function useAsRef(data) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(data);
    useIsomorphicLayoutEffect({
        "useAsRef.useIsomorphicLayoutEffect": ()=>{
            ref.current = data;
        }
    }["useAsRef.useIsomorphicLayoutEffect"]);
    return ref;
}
_s(useAsRef, "grbnI+/2AClv8o2yiEFSlV7U3QY=", false, function() {
    return [
        useIsomorphicLayoutEffect
    ];
});
function useLazyRef(fn) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (ref.current === null) {
        ref.current = fn();
    }
    return ref;
}
_s1(useLazyRef, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
const DirectionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useDirection(dirProp) {
    _s2();
    const contextDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DirectionContext);
    return dirProp ?? contextDir ?? "ltr";
}
_s2(useDirection, "ldWTzVJ2uykszZZT6WqCg/KOq7A=");
function createStore(listeners, files, onValueChange, invalid) {
    const initialState = {
        files,
        dragOver: false,
        invalid: invalid ?? false
    };
    let state = initialState;
    function reducer(state, action) {
        switch(action.variant){
            case "ADD_FILES":
                {
                    for (const file of action.files){
                        files.set(file, {
                            file,
                            progress: 0,
                            status: "idle"
                        });
                    }
                    if (onValueChange) {
                        const fileList = Array.from(files.values()).map((fileState)=>fileState.file);
                        onValueChange(fileList);
                    }
                    return {
                        ...state,
                        files
                    };
                }
            case "SET_FILES":
                {
                    const newFileSet = new Set(action.files);
                    for (const existingFile of files.keys()){
                        if (!newFileSet.has(existingFile)) {
                            files.delete(existingFile);
                        }
                    }
                    for (const file of action.files){
                        const existingState = files.get(file);
                        if (!existingState) {
                            files.set(file, {
                                file,
                                progress: 0,
                                status: "idle"
                            });
                        }
                    }
                    return {
                        ...state,
                        files
                    };
                }
            case "SET_PROGRESS":
                {
                    const fileState = files.get(action.file);
                    if (fileState) {
                        files.set(action.file, {
                            ...fileState,
                            progress: action.progress,
                            status: "uploading"
                        });
                    }
                    return {
                        ...state,
                        files
                    };
                }
            case "SET_SUCCESS":
                {
                    const fileState = files.get(action.file);
                    if (fileState) {
                        files.set(action.file, {
                            ...fileState,
                            progress: 100,
                            status: "success"
                        });
                    }
                    return {
                        ...state,
                        files
                    };
                }
            case "SET_ERROR":
                {
                    const fileState = files.get(action.file);
                    if (fileState) {
                        files.set(action.file, {
                            ...fileState,
                            error: action.error,
                            status: "error"
                        });
                    }
                    return {
                        ...state,
                        files
                    };
                }
            case "REMOVE_FILE":
                {
                    files.delete(action.file);
                    if (onValueChange) {
                        const fileList = Array.from(files.values()).map((fileState)=>fileState.file);
                        onValueChange(fileList);
                    }
                    return {
                        ...state,
                        files
                    };
                }
            case "SET_DRAG_OVER":
                {
                    return {
                        ...state,
                        dragOver: action.dragOver
                    };
                }
            case "SET_INVALID":
                {
                    return {
                        ...state,
                        invalid: action.invalid
                    };
                }
            case "CLEAR":
                {
                    files.clear();
                    if (onValueChange) {
                        onValueChange([]);
                    }
                    return {
                        ...state,
                        files,
                        invalid: false
                    };
                }
            default:
                return state;
        }
    }
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        for (const listener of listeners){
            listener();
        }
    }
    function subscribe(listener) {
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}
const StoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
StoreContext.displayName = ROOT_NAME;
function useStoreContext(consumerName) {
    _s3();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    if (!context) {
        throw new Error(`\`${consumerName}\` must be used within \`${ROOT_NAME}\``);
    }
    return context;
}
_s3(useStoreContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function useStore(selector) {
    _s4();
    const store = useStoreContext(ROOT_NAME);
    const lastValueRef = useLazyRef({
        "useStore.useLazyRef[lastValueRef]": ()=>null
    }["useStore.useLazyRef[lastValueRef]"]);
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStore.useCallback[getSnapshot]": ()=>{
            const state = store.getState();
            const prevValue = lastValueRef.current;
            if (prevValue && prevValue.state === state) {
                return prevValue.value;
            }
            const nextValue = selector(state);
            lastValueRef.current = {
                value: nextValue,
                state
            };
            return nextValue;
        }
    }["useStore.useCallback[getSnapshot]"], [
        store,
        selector,
        lastValueRef
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, getSnapshot, getSnapshot);
}
_s4(useStore, "+54MGqJiFK7iKWlwWUfxIklv9bs=", false, function() {
    return [
        useStoreContext,
        useLazyRef
    ];
});
const FileUploadContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useFileUploadContext(consumerName) {
    _s5();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FileUploadContext);
    if (!context) {
        throw new Error(`\`${consumerName}\` must be used within \`${ROOT_NAME}\``);
    }
    return context;
}
_s5(useFileUploadContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const FileUploadRoot = /*#__PURE__*/ _s6((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s6((props, forwardedRef)=>{
    _s6();
    const { value, defaultValue, onValueChange, onAccept, onFileAccept, onFileReject, onFileValidate, onUpload, accept, maxFiles, maxSize, dir: dirProp, label, name, asChild, disabled = false, invalid = false, multiple = false, required = false, children, className, ...rootProps } = props;
    const inputId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const dropzoneId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const listId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const labelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const dir = useDirection(dirProp);
    const propsRef = useAsRef(props);
    const listeners = useLazyRef({
        "FileUploadRoot.useLazyRef": ()=>new Set()
    }["FileUploadRoot.useLazyRef"]).current;
    const files = useLazyRef({
        "FileUploadRoot.useLazyRef": ()=>new Map()
    }["FileUploadRoot.useLazyRef"]).current;
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isControlled = value !== undefined;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileUploadRoot.useMemo[store]": ()=>createStore(listeners, files, onValueChange, invalid)
    }["FileUploadRoot.useMemo[store]"], [
        listeners,
        files,
        onValueChange,
        invalid
    ]);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileUploadRoot.useMemo[contextValue]": ()=>({
                dropzoneId,
                inputId,
                listId,
                labelId,
                dir,
                disabled,
                inputRef
            })
    }["FileUploadRoot.useMemo[contextValue]"], [
        dropzoneId,
        inputId,
        listId,
        labelId,
        dir,
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileUploadRoot.useEffect": ()=>{
            if (isControlled) {
                store.dispatch({
                    variant: "SET_FILES",
                    files: value
                });
            } else if (defaultValue && defaultValue.length > 0 && !store.getState().files.size) {
                store.dispatch({
                    variant: "SET_FILES",
                    files: defaultValue
                });
            }
        }
    }["FileUploadRoot.useEffect"], [
        value,
        defaultValue,
        isControlled,
        store
    ]);
    const onFilesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadRoot.useCallback[onFilesChange]": (originalFiles)=>{
            if (propsRef.current.disabled) return;
            let filesToProcess = [
                ...originalFiles
            ];
            let invalid = false;
            if (propsRef.current.maxFiles) {
                const currentCount = store.getState().files.size;
                const remainingSlotCount = Math.max(0, propsRef.current.maxFiles - currentCount);
                if (remainingSlotCount < filesToProcess.length) {
                    const rejectedFiles = filesToProcess.slice(remainingSlotCount);
                    invalid = true;
                    filesToProcess = filesToProcess.slice(0, remainingSlotCount);
                    for (const file of rejectedFiles){
                        let rejectionMessage = `Maximum ${propsRef.current.maxFiles} files allowed`;
                        if (propsRef.current.onFileValidate) {
                            const validationMessage = propsRef.current.onFileValidate(file);
                            if (validationMessage) {
                                rejectionMessage = validationMessage;
                            }
                        }
                        propsRef.current.onFileReject?.(file, rejectionMessage);
                    }
                }
            }
            const acceptedFiles = [];
            const rejectedFiles = [];
            for (const file of filesToProcess){
                let rejected = false;
                let rejectionMessage = "";
                if (propsRef.current.onFileValidate) {
                    const validationMessage = propsRef.current.onFileValidate(file);
                    if (validationMessage) {
                        rejectionMessage = validationMessage;
                        propsRef.current.onFileReject?.(file, rejectionMessage);
                        rejected = true;
                        invalid = true;
                        continue;
                    }
                }
                if (propsRef.current.accept) {
                    const acceptTypes = propsRef.current.accept.split(",").map({
                        "FileUploadRoot.useCallback[onFilesChange].acceptTypes": (t)=>t.trim()
                    }["FileUploadRoot.useCallback[onFilesChange].acceptTypes"]);
                    const fileType = file.type;
                    const fileExtension = `.${file.name.split(".").pop()}`;
                    if (!acceptTypes.some({
                        "FileUploadRoot.useCallback[onFilesChange]": (type)=>type === fileType || type === fileExtension || type.includes("/*") && fileType.startsWith(type.replace("/*", "/"))
                    }["FileUploadRoot.useCallback[onFilesChange]"])) {
                        rejectionMessage = "File type not accepted";
                        propsRef.current.onFileReject?.(file, rejectionMessage);
                        rejected = true;
                        invalid = true;
                    }
                }
                if (propsRef.current.maxSize && file.size > propsRef.current.maxSize) {
                    rejectionMessage = "File too large";
                    propsRef.current.onFileReject?.(file, rejectionMessage);
                    rejected = true;
                    invalid = true;
                }
                if (!rejected) {
                    acceptedFiles.push(file);
                } else {
                    rejectedFiles.push({
                        file,
                        message: rejectionMessage
                    });
                }
            }
            if (invalid) {
                store.dispatch({
                    variant: "SET_INVALID",
                    invalid
                });
                setTimeout({
                    "FileUploadRoot.useCallback[onFilesChange]": ()=>{
                        store.dispatch({
                            variant: "SET_INVALID",
                            invalid: false
                        });
                    }
                }["FileUploadRoot.useCallback[onFilesChange]"], 2000);
            }
            if (acceptedFiles.length > 0) {
                store.dispatch({
                    variant: "ADD_FILES",
                    files: acceptedFiles
                });
                if (isControlled && propsRef.current.onValueChange) {
                    const currentFiles = Array.from(store.getState().files.values()).map({
                        "FileUploadRoot.useCallback[onFilesChange].currentFiles": (f)=>f.file
                    }["FileUploadRoot.useCallback[onFilesChange].currentFiles"]);
                    propsRef.current.onValueChange([
                        ...currentFiles
                    ]);
                }
                if (propsRef.current.onAccept) {
                    propsRef.current.onAccept(acceptedFiles);
                }
                for (const file of acceptedFiles){
                    propsRef.current.onFileAccept?.(file);
                }
                if (propsRef.current.onUpload) {
                    requestAnimationFrame({
                        "FileUploadRoot.useCallback[onFilesChange]": ()=>{
                            onFilesUpload(acceptedFiles);
                        }
                    }["FileUploadRoot.useCallback[onFilesChange]"]);
                }
            }
        }
    }["FileUploadRoot.useCallback[onFilesChange]"], [
        store,
        isControlled,
        propsRef
    ]);
    const onFilesUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadRoot.useCallback[onFilesUpload]": async (files)=>{
            try {
                for (const file of files){
                    store.dispatch({
                        variant: "SET_PROGRESS",
                        file,
                        progress: 0
                    });
                }
                if (propsRef.current.onUpload) {
                    await propsRef.current.onUpload(files, {
                        onProgress: {
                            "FileUploadRoot.useCallback[onFilesUpload]": (file, progress)=>{
                                store.dispatch({
                                    variant: "SET_PROGRESS",
                                    file,
                                    progress: Math.min(Math.max(0, progress), 100)
                                });
                            }
                        }["FileUploadRoot.useCallback[onFilesUpload]"],
                        onSuccess: {
                            "FileUploadRoot.useCallback[onFilesUpload]": (file)=>{
                                store.dispatch({
                                    variant: "SET_SUCCESS",
                                    file
                                });
                            }
                        }["FileUploadRoot.useCallback[onFilesUpload]"],
                        onError: {
                            "FileUploadRoot.useCallback[onFilesUpload]": (file, error)=>{
                                store.dispatch({
                                    variant: "SET_ERROR",
                                    file,
                                    error: error.message ?? "Upload failed"
                                });
                            }
                        }["FileUploadRoot.useCallback[onFilesUpload]"]
                    });
                } else {
                    for (const file of files){
                        store.dispatch({
                            variant: "SET_SUCCESS",
                            file
                        });
                    }
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Upload failed";
                for (const file of files){
                    store.dispatch({
                        variant: "SET_ERROR",
                        file,
                        error: errorMessage
                    });
                }
            }
        }
    }["FileUploadRoot.useCallback[onFilesUpload]"], [
        store,
        propsRef.current.onUpload
    ]);
    const onInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadRoot.useCallback[onInputChange]": (event)=>{
            const files = Array.from(event.target.files ?? []);
            onFilesChange(files);
            event.target.value = "";
        }
    }["FileUploadRoot.useCallback[onInputChange]"], [
        onFilesChange
    ]);
    const RootPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreContext.Provider, {
        value: store,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileUploadContext.Provider, {
            value: contextValue,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RootPrimitive, {
                "data-disabled": disabled ? "" : undefined,
                "data-slot": "file-upload",
                dir: dir,
                ...rootProps,
                ref: forwardedRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col gap-2", className),
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        id: inputId,
                        "aria-labelledby": labelId,
                        "aria-describedby": dropzoneId,
                        ref: inputRef,
                        tabIndex: -1,
                        accept: accept,
                        name: name,
                        className: "sr-only",
                        disabled: disabled,
                        multiple: multiple,
                        required: required,
                        onChange: onInputChange
                    }, void 0, false, {
                        fileName: "[project]/components/ui/file-upload.tsx",
                        lineNumber: 580,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: labelId,
                        className: "sr-only",
                        children: label ?? "File upload"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/file-upload.tsx",
                        lineNumber: 595,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/file-upload.tsx",
                lineNumber: 571,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 570,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 569,
        columnNumber: 7
    }, this);
}, "uIyOPDPr9/Ox0iKQwLKhHe+BMFg=", false, function() {
    return [
        useDirection,
        useAsRef,
        useLazyRef,
        useLazyRef
    ];
})), "uIyOPDPr9/Ox0iKQwLKhHe+BMFg=", false, function() {
    return [
        useDirection,
        useAsRef,
        useLazyRef,
        useLazyRef
    ];
});
_c1 = FileUploadRoot;
FileUploadRoot.displayName = ROOT_NAME;
const FileUploadDropzone = /*#__PURE__*/ _s7((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = _s7((props, forwardedRef)=>{
    _s7();
    const { asChild, className, ...dropzoneProps } = props;
    const context = useFileUploadContext(DROPZONE_NAME);
    const store = useStoreContext(DROPZONE_NAME);
    const dragOver = useStore({
        "FileUploadDropzone.useStore[dragOver]": (state)=>state.dragOver
    }["FileUploadDropzone.useStore[dragOver]"]);
    const invalid = useStore({
        "FileUploadDropzone.useStore[invalid]": (state)=>state.invalid
    }["FileUploadDropzone.useStore[invalid]"]);
    const propsRef = useAsRef(dropzoneProps);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadDropzone.useCallback[onClick]": (event)=>{
            propsRef.current?.onClick?.(event);
            if (event.defaultPrevented) return;
            const target = event.target;
            const isFromTrigger = target instanceof HTMLElement && target.closest('[data-slot="file-upload-trigger"]');
            if (!isFromTrigger) {
                context.inputRef.current?.click();
            }
        }
    }["FileUploadDropzone.useCallback[onClick]"], [
        context.inputRef,
        propsRef
    ]);
    const onDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadDropzone.useCallback[onDragOver]": (event)=>{
            propsRef.current?.onDragOver?.(event);
            if (event.defaultPrevented) return;
            event.preventDefault();
            store.dispatch({
                variant: "SET_DRAG_OVER",
                dragOver: true
            });
        }
    }["FileUploadDropzone.useCallback[onDragOver]"], [
        store,
        propsRef.current.onDragOver
    ]);
    const onDragEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadDropzone.useCallback[onDragEnter]": (event)=>{
            propsRef.current?.onDragEnter?.(event);
            if (event.defaultPrevented) return;
            event.preventDefault();
            store.dispatch({
                variant: "SET_DRAG_OVER",
                dragOver: true
            });
        }
    }["FileUploadDropzone.useCallback[onDragEnter]"], [
        store,
        propsRef.current.onDragEnter
    ]);
    const onDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadDropzone.useCallback[onDragLeave]": (event)=>{
            propsRef.current?.onDragLeave?.(event);
            if (event.defaultPrevented) return;
            const relatedTarget = event.relatedTarget;
            if (relatedTarget && relatedTarget instanceof Node && event.currentTarget.contains(relatedTarget)) {
                return;
            }
            event.preventDefault();
            store.dispatch({
                variant: "SET_DRAG_OVER",
                dragOver: false
            });
        }
    }["FileUploadDropzone.useCallback[onDragLeave]"], [
        store,
        propsRef.current.onDragLeave
    ]);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadDropzone.useCallback[onDrop]": (event)=>{
            propsRef.current?.onDrop?.(event);
            if (event.defaultPrevented) return;
            event.preventDefault();
            store.dispatch({
                variant: "SET_DRAG_OVER",
                dragOver: false
            });
            const files = Array.from(event.dataTransfer.files);
            const inputElement = context.inputRef.current;
            if (!inputElement) return;
            const dataTransfer = new DataTransfer();
            for (const file of files){
                dataTransfer.items.add(file);
            }
            inputElement.files = dataTransfer.files;
            inputElement.dispatchEvent(new Event("change", {
                bubbles: true
            }));
        }
    }["FileUploadDropzone.useCallback[onDrop]"], [
        store,
        context.inputRef,
        propsRef.current.onDrop
    ]);
    const onPaste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadDropzone.useCallback[onPaste]": (event)=>{
            propsRef.current?.onPaste?.(event);
            if (event.defaultPrevented) return;
            event.preventDefault();
            store.dispatch({
                variant: "SET_DRAG_OVER",
                dragOver: false
            });
            const items = event.clipboardData?.items;
            if (!items) return;
            const files = [];
            for(let i = 0; i < items.length; i++){
                const item = items[i];
                if (item?.kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        files.push(file);
                    }
                }
            }
            if (files.length === 0) return;
            const inputElement = context.inputRef.current;
            if (!inputElement) return;
            const dataTransfer = new DataTransfer();
            for (const file of files){
                dataTransfer.items.add(file);
            }
            inputElement.files = dataTransfer.files;
            inputElement.dispatchEvent(new Event("change", {
                bubbles: true
            }));
        }
    }["FileUploadDropzone.useCallback[onPaste]"], [
        store,
        context.inputRef,
        propsRef
    ]);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadDropzone.useCallback[onKeyDown]": (event)=>{
            propsRef.current?.onKeyDown?.(event);
            if (!event.defaultPrevented && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                context.inputRef.current?.click();
            }
        }
    }["FileUploadDropzone.useCallback[onKeyDown]"], [
        context.inputRef,
        propsRef.current.onKeyDown
    ]);
    const DropzonePrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropzonePrimitive, {
        role: "region",
        id: context.dropzoneId,
        "aria-controls": `${context.inputId} ${context.listId}`,
        "aria-disabled": context.disabled,
        "aria-invalid": invalid,
        "data-disabled": context.disabled ? "" : undefined,
        "data-dragging": dragOver ? "" : undefined,
        "data-invalid": invalid ? "" : undefined,
        "data-slot": "file-upload-dropzone",
        dir: context.dir,
        tabIndex: context.disabled ? undefined : 0,
        ...dropzoneProps,
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex select-none flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 outline-none transition-colors hover:bg-accent/30 focus-visible:border-ring/50 data-[disabled]:pointer-events-none data-[dragging]:border-primary/30 data-[invalid]:border-destructive data-[dragging]:bg-accent/30 data-[invalid]:ring-destructive/20", className),
        onClick: onClick,
        onDragEnter: onDragEnter,
        onDragLeave: onDragLeave,
        onDragOver: onDragOver,
        onDrop: onDrop,
        onKeyDown: onKeyDown,
        onPaste: onPaste
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 768,
        columnNumber: 5
    }, this);
}, "Z4OxFIesYAWmtZ34QVrJJasMBGI=", false, function() {
    return [
        useFileUploadContext,
        useStoreContext,
        useStore,
        useStore,
        useAsRef
    ];
})), "Z4OxFIesYAWmtZ34QVrJJasMBGI=", false, function() {
    return [
        useFileUploadContext,
        useStoreContext,
        useStore,
        useStore,
        useAsRef
    ];
});
_c3 = FileUploadDropzone;
FileUploadDropzone.displayName = DROPZONE_NAME;
const FileUploadTrigger = /*#__PURE__*/ _s8((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = _s8((props, forwardedRef)=>{
    _s8();
    const { asChild, ...triggerProps } = props;
    const context = useFileUploadContext(TRIGGER_NAME);
    const propsRef = useAsRef(triggerProps);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadTrigger.useCallback[onClick]": (event)=>{
            propsRef.current?.onClick?.(event);
            if (event.defaultPrevented) return;
            context.inputRef.current?.click();
        }
    }["FileUploadTrigger.useCallback[onClick]"], [
        context.inputRef,
        propsRef.current
    ]);
    const TriggerPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TriggerPrimitive, {
        type: "button",
        "aria-controls": context.inputId,
        "data-disabled": context.disabled ? "" : undefined,
        "data-slot": "file-upload-trigger",
        ...triggerProps,
        ref: forwardedRef,
        disabled: context.disabled,
        onClick: onClick
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 825,
        columnNumber: 5
    }, this);
}, "uBj5AFxHKyFcdhuV6feJ3JhSsM0=", false, function() {
    return [
        useFileUploadContext,
        useAsRef
    ];
})), "uBj5AFxHKyFcdhuV6feJ3JhSsM0=", false, function() {
    return [
        useFileUploadContext,
        useAsRef
    ];
});
_c5 = FileUploadTrigger;
FileUploadTrigger.displayName = TRIGGER_NAME;
const FileUploadList = /*#__PURE__*/ _s9((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = _s9((props, forwardedRef)=>{
    _s9();
    const { className, orientation = "vertical", asChild, forceMount, ...listProps } = props;
    const context = useFileUploadContext(LIST_NAME);
    const shouldRender = forceMount || useStore({
        "FileUploadList.useStore": (state)=>state.files.size > 0
    }["FileUploadList.useStore"]);
    if (!shouldRender) return null;
    const ListPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListPrimitive, {
        role: "list",
        id: context.listId,
        "aria-orientation": orientation,
        "data-orientation": orientation,
        "data-slot": "file-upload-list",
        "data-state": shouldRender ? "active" : "inactive",
        dir: context.dir,
        ...listProps,
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=inactive]:fade-out-0 data-[state=active]:fade-in-0 data-[state=inactive]:slide-out-to-top-2 data-[state=active]:slide-in-from-top-2 flex flex-col gap-2 data-[state=active]:animate-in data-[state=inactive]:animate-out", orientation === "horizontal" && "flex-row overflow-x-auto p-1.5", className)
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 865,
        columnNumber: 7
    }, this);
}, "JkPDsok9sgBSviQ806st0oT+Vyk=", false, function() {
    return [
        useFileUploadContext,
        useStore
    ];
})), "JkPDsok9sgBSviQ806st0oT+Vyk=", false, function() {
    return [
        useFileUploadContext,
        useStore
    ];
});
_c7 = FileUploadList;
FileUploadList.displayName = LIST_NAME;
const FileUploadItemContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useFileUploadItemContext(consumerName) {
    _s10();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FileUploadItemContext);
    if (!context) {
        throw new Error(`\`${consumerName}\` must be used within \`${ITEM_NAME}\``);
    }
    return context;
}
_s10(useFileUploadItemContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const FileUploadItem = /*#__PURE__*/ _s11((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = _s11((props, forwardedRef)=>{
    _s11();
    const { value, asChild, className, ...itemProps } = props;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const statusId = `${id}-status`;
    const nameId = `${id}-name`;
    const sizeId = `${id}-size`;
    const messageId = `${id}-message`;
    const context = useFileUploadContext(ITEM_NAME);
    const fileState = useStore({
        "FileUploadItem.useStore[fileState]": (state)=>state.files.get(value)
    }["FileUploadItem.useStore[fileState]"]);
    const fileCount = useStore({
        "FileUploadItem.useStore[fileCount]": (state)=>state.files.size
    }["FileUploadItem.useStore[fileCount]"]);
    const fileIndex = useStore({
        "FileUploadItem.useStore[fileIndex]": (state)=>{
            const files = Array.from(state.files.keys());
            return files.indexOf(value) + 1;
        }
    }["FileUploadItem.useStore[fileIndex]"]);
    const itemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileUploadItem.useMemo[itemContext]": ()=>({
                id,
                fileState,
                nameId,
                sizeId,
                statusId,
                messageId
            })
    }["FileUploadItem.useMemo[itemContext]"], [
        id,
        fileState,
        statusId,
        nameId,
        sizeId,
        messageId
    ]);
    if (!fileState) return null;
    const statusText = fileState.error ? `Error: ${fileState.error}` : fileState.status === "uploading" ? `Uploading: ${fileState.progress}% complete` : fileState.status === "success" ? "Upload complete" : "Ready to upload";
    const ItemPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileUploadItemContext.Provider, {
        value: itemContext,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemPrimitive, {
            role: "listitem",
            id: id,
            "aria-setsize": fileCount,
            "aria-posinset": fileIndex,
            "aria-describedby": `${nameId} ${sizeId} ${statusId} ${fileState.error ? messageId : ""}`,
            "aria-labelledby": nameId,
            "data-slot": "file-upload-item",
            dir: context.dir,
            ...itemProps,
            ref: forwardedRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center gap-2.5 rounded-md border p-3", className),
            children: [
                props.children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    id: statusId,
                    className: "sr-only",
                    children: statusText
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 974,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 955,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 954,
        columnNumber: 7
    }, this);
}, "yJaFuBt1QHOY8wa1qsQCP/vLWpg=", false, function() {
    return [
        useFileUploadContext,
        useStore,
        useStore,
        useStore
    ];
})), "yJaFuBt1QHOY8wa1qsQCP/vLWpg=", false, function() {
    return [
        useFileUploadContext,
        useStore,
        useStore,
        useStore
    ];
});
_c9 = FileUploadItem;
FileUploadItem.displayName = ITEM_NAME;
function formatBytes(bytes) {
    if (bytes === 0) return "0 B";
    const sizes = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)} ${sizes[i]}`;
}
function getFileIcon(file) {
    const type = file.type;
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (type.startsWith("video/")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideoIcon$3e$__["FileVideoIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 996,
            columnNumber: 12
        }, this);
    }
    if (type.startsWith("audio/")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAudioIcon$3e$__["FileAudioIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 1000,
            columnNumber: 12
        }, this);
    }
    if (type.startsWith("text/") || [
        "txt",
        "md",
        "rtf",
        "pdf"
    ].includes(extension)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 1007,
            columnNumber: 12
        }, this);
    }
    if ([
        "html",
        "css",
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "xml",
        "php",
        "py",
        "rb",
        "java",
        "c",
        "cpp",
        "cs"
    ].includes(extension)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__["FileCodeIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 1029,
            columnNumber: 12
        }, this);
    }
    if ([
        "zip",
        "rar",
        "7z",
        "tar",
        "gz",
        "bz2"
    ].includes(extension)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchiveIcon$3e$__["FileArchiveIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 1033,
            columnNumber: 12
        }, this);
    }
    if ([
        "exe",
        "msi",
        "app",
        "apk",
        "deb",
        "rpm"
    ].includes(extension) || type.startsWith("application/")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCogIcon$3e$__["FileCogIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/file-upload.tsx",
            lineNumber: 1040,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__["FileIcon"], {}, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 1043,
        columnNumber: 10
    }, this);
}
const FileUploadItemPreview = /*#__PURE__*/ _s12((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = _s12((props, forwardedRef)=>{
    _s12();
    const { render, asChild, children, className, ...previewProps } = props;
    const itemContext = useFileUploadItemContext(ITEM_PREVIEW_NAME);
    const onPreviewRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadItemPreview.useCallback[onPreviewRender]": (file)=>{
            if (render) return render(file);
            if (itemContext.fileState?.file.type.startsWith("image/")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: URL.createObjectURL(file),
                    alt: file.name,
                    className: "size-full object-cover",
                    onLoad: {
                        "FileUploadItemPreview.useCallback[onPreviewRender]": (event)=>{
                            if (!(event.target instanceof HTMLImageElement)) return;
                            URL.revokeObjectURL(event.target.src);
                        }
                    }["FileUploadItemPreview.useCallback[onPreviewRender]"]
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 1066,
                    columnNumber: 11
                }, this);
            }
            return getFileIcon(file);
        }
    }["FileUploadItemPreview.useCallback[onPreviewRender]"], [
        render,
        itemContext.fileState?.file.type
    ]);
    if (!itemContext.fileState) return null;
    const ItemPreviewPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemPreviewPrimitive, {
        "aria-labelledby": itemContext.nameId,
        "data-slot": "file-upload-preview",
        ...previewProps,
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded border bg-accent/50 [&>svg]:size-10", className),
        children: [
            onPreviewRender(itemContext.fileState.file),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 1088,
        columnNumber: 5
    }, this);
}, "oy9IClmx9Jg4xOgppyHCquezRAI=", false, function() {
    return [
        useFileUploadItemContext
    ];
})), "oy9IClmx9Jg4xOgppyHCquezRAI=", false, function() {
    return [
        useFileUploadItemContext
    ];
});
_c11 = FileUploadItemPreview;
FileUploadItemPreview.displayName = ITEM_PREVIEW_NAME;
const FileUploadItemMetadata = /*#__PURE__*/ _s13((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = _s13((props, forwardedRef)=>{
    _s13();
    const { asChild, size = "default", children, className, ...metadataProps } = props;
    const context = useFileUploadContext(ITEM_METADATA_NAME);
    const itemContext = useFileUploadItemContext(ITEM_METADATA_NAME);
    if (!itemContext.fileState) return null;
    const ItemMetadataPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemMetadataPrimitive, {
        "data-slot": "file-upload-metadata",
        dir: context.dir,
        ...metadataProps,
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-w-0 flex-1 flex-col", className),
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    id: itemContext.nameId,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("truncate font-medium text-sm", size === "sm" && "font-normal text-[13px] leading-snug"),
                    children: itemContext.fileState.file.name
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 1140,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    id: itemContext.sizeId,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("truncate text-muted-foreground text-xs", size === "sm" && "text-[11px] leading-snug"),
                    children: formatBytes(itemContext.fileState.file.size)
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 1149,
                    columnNumber: 11
                }, this),
                itemContext.fileState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    id: itemContext.messageId,
                    className: "text-destructive text-xs",
                    children: itemContext.fileState.error
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 1159,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 1131,
        columnNumber: 5
    }, this);
}, "GbuDlKEH5cowjbrETGsRSZrzPas=", false, function() {
    return [
        useFileUploadContext,
        useFileUploadItemContext
    ];
})), "GbuDlKEH5cowjbrETGsRSZrzPas=", false, function() {
    return [
        useFileUploadContext,
        useFileUploadItemContext
    ];
});
_c13 = FileUploadItemMetadata;
FileUploadItemMetadata.displayName = ITEM_METADATA_NAME;
const FileUploadItemProgress = /*#__PURE__*/ _s14((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = _s14((props, forwardedRef)=>{
    _s14();
    const { variant = "linear", size = 40, asChild, forceMount, className, ...progressProps } = props;
    const itemContext = useFileUploadItemContext(ITEM_PROGRESS_NAME);
    if (!itemContext.fileState) return null;
    const shouldRender = forceMount || itemContext.fileState.progress !== 100;
    if (!shouldRender) return null;
    const ItemProgressPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    switch(variant){
        case "circular":
            {
                const circumference = 2 * Math.PI * ((size - 4) / 2);
                const strokeDashoffset = circumference - itemContext.fileState.progress / 100 * circumference;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemProgressPrimitive, {
                    role: "progressbar",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": itemContext.fileState.progress,
                    "aria-valuetext": `${itemContext.fileState.progress}%`,
                    "aria-labelledby": itemContext.nameId,
                    "data-slot": "file-upload-progress",
                    ...progressProps,
                    ref: forwardedRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2", className),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "rotate-[-90deg] transform",
                        width: size,
                        height: size,
                        viewBox: `0 0 ${size} ${size}`,
                        fill: "none",
                        stroke: "currentColor",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "text-primary/20",
                                strokeWidth: "2",
                                cx: size / 2,
                                cy: size / 2,
                                r: (size - 4) / 2
                            }, void 0, false, {
                                fileName: "[project]/components/ui/file-upload.tsx",
                                lineNumber: 1234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "text-primary transition-[stroke-dashoffset] duration-300 ease-linear",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeDasharray: circumference,
                                strokeDashoffset: strokeDashoffset,
                                cx: size / 2,
                                cy: size / 2,
                                r: (size - 4) / 2
                            }, void 0, false, {
                                fileName: "[project]/components/ui/file-upload.tsx",
                                lineNumber: 1241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/file-upload.tsx",
                        lineNumber: 1226,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 1211,
                    columnNumber: 9
                }, this);
            }
        case "fill":
            {
                const progressPercentage = itemContext.fileState.progress;
                const topInset = 100 - progressPercentage;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemProgressPrimitive, {
                    role: "progressbar",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": progressPercentage,
                    "aria-valuetext": `${progressPercentage}%`,
                    "aria-labelledby": itemContext.nameId,
                    "data-slot": "file-upload-progress",
                    ...progressProps,
                    ref: forwardedRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-primary/50 transition-[clip-path] duration-300 ease-linear", className),
                    style: {
                        clipPath: `inset(${topInset}% 0% 0% 0%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 1261,
                    columnNumber: 9
                }, this);
            }
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemProgressPrimitive, {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": itemContext.fileState.progress,
                "aria-valuetext": `${itemContext.fileState.progress}%`,
                "aria-labelledby": itemContext.nameId,
                "data-slot": "file-upload-progress",
                ...progressProps,
                ref: forwardedRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-1.5 w-full overflow-hidden rounded-full bg-primary/20", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full flex-1 bg-primary transition-transform duration-300 ease-linear",
                    style: {
                        transform: `translateX(-${100 - itemContext.fileState.progress}%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-upload.tsx",
                    lineNumber: 1299,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/file-upload.tsx",
                lineNumber: 1284,
                columnNumber: 9
            }, this);
    }
}, "H+MFrMC4r76TpHOaBkPyRnwnx0E=", false, function() {
    return [
        useFileUploadItemContext
    ];
})), "H+MFrMC4r76TpHOaBkPyRnwnx0E=", false, function() {
    return [
        useFileUploadItemContext
    ];
});
_c15 = FileUploadItemProgress;
FileUploadItemProgress.displayName = ITEM_PROGRESS_NAME;
const FileUploadItemDelete = /*#__PURE__*/ _s15((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c16 = _s15((props, forwardedRef)=>{
    _s15();
    const { asChild, ...deleteProps } = props;
    const store = useStoreContext(ITEM_DELETE_NAME);
    const itemContext = useFileUploadItemContext(ITEM_DELETE_NAME);
    const propsRef = useAsRef(deleteProps);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadItemDelete.useCallback[onClick]": (event)=>{
            propsRef.current?.onClick?.(event);
            if (!itemContext.fileState || event.defaultPrevented) return;
            store.dispatch({
                variant: "REMOVE_FILE",
                file: itemContext.fileState.file
            });
        }
    }["FileUploadItemDelete.useCallback[onClick]"], [
        store,
        itemContext.fileState,
        propsRef.current?.onClick
    ]);
    if (!itemContext.fileState) return null;
    const ItemDeletePrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemDeletePrimitive, {
        type: "button",
        "aria-controls": itemContext.id,
        "aria-describedby": itemContext.nameId,
        "data-slot": "file-upload-item-delete",
        ...deleteProps,
        ref: forwardedRef,
        onClick: onClick
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 1345,
        columnNumber: 5
    }, this);
}, "PsyjvDleYVhGsb7omU+tM8Vbg2U=", false, function() {
    return [
        useStoreContext,
        useFileUploadItemContext,
        useAsRef
    ];
})), "PsyjvDleYVhGsb7omU+tM8Vbg2U=", false, function() {
    return [
        useStoreContext,
        useFileUploadItemContext,
        useAsRef
    ];
});
_c17 = FileUploadItemDelete;
FileUploadItemDelete.displayName = ITEM_DELETE_NAME;
const FileUploadClear = /*#__PURE__*/ _s16((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c18 = _s16((props, forwardedRef)=>{
    _s16();
    const { asChild, forceMount, disabled, ...clearProps } = props;
    const context = useFileUploadContext(CLEAR_NAME);
    const store = useStoreContext(CLEAR_NAME);
    const propsRef = useAsRef(clearProps);
    const isDisabled = disabled || context.disabled;
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUploadClear.useCallback[onClick]": (event)=>{
            propsRef.current?.onClick?.(event);
            if (event.defaultPrevented) return;
            store.dispatch({
                variant: "CLEAR"
            });
        }
    }["FileUploadClear.useCallback[onClick]"], [
        store,
        propsRef
    ]);
    const shouldRender = forceMount || useStore({
        "FileUploadClear.useStore": (state)=>state.files.size > 0
    }["FileUploadClear.useStore"]);
    if (!shouldRender) return null;
    const ClearPrimitive = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClearPrimitive, {
        type: "button",
        "aria-controls": context.listId,
        "data-slot": "file-upload-clear",
        "data-disabled": isDisabled ? "" : undefined,
        ...clearProps,
        ref: forwardedRef,
        disabled: isDisabled,
        onClick: onClick
    }, void 0, false, {
        fileName: "[project]/components/ui/file-upload.tsx",
        lineNumber: 1394,
        columnNumber: 5
    }, this);
}, "3gWxIHnq6qtiDqD6O/9v1Sxrmc0=", false, function() {
    return [
        useFileUploadContext,
        useStoreContext,
        useAsRef,
        useStore
    ];
})), "3gWxIHnq6qtiDqD6O/9v1Sxrmc0=", false, function() {
    return [
        useFileUploadContext,
        useStoreContext,
        useAsRef,
        useStore
    ];
});
_c19 = FileUploadClear;
FileUploadClear.displayName = CLEAR_NAME;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "FileUploadRoot$React.forwardRef");
__turbopack_context__.k.register(_c1, "FileUploadRoot");
__turbopack_context__.k.register(_c2, "FileUploadDropzone$React.forwardRef");
__turbopack_context__.k.register(_c3, "FileUploadDropzone");
__turbopack_context__.k.register(_c4, "FileUploadTrigger$React.forwardRef");
__turbopack_context__.k.register(_c5, "FileUploadTrigger");
__turbopack_context__.k.register(_c6, "FileUploadList$React.forwardRef");
__turbopack_context__.k.register(_c7, "FileUploadList");
__turbopack_context__.k.register(_c8, "FileUploadItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "FileUploadItem");
__turbopack_context__.k.register(_c10, "FileUploadItemPreview$React.forwardRef");
__turbopack_context__.k.register(_c11, "FileUploadItemPreview");
__turbopack_context__.k.register(_c12, "FileUploadItemMetadata$React.forwardRef");
__turbopack_context__.k.register(_c13, "FileUploadItemMetadata");
__turbopack_context__.k.register(_c14, "FileUploadItemProgress$React.forwardRef");
__turbopack_context__.k.register(_c15, "FileUploadItemProgress");
__turbopack_context__.k.register(_c16, "FileUploadItemDelete$React.forwardRef");
__turbopack_context__.k.register(_c17, "FileUploadItemDelete");
__turbopack_context__.k.register(_c18, "FileUploadClear$React.forwardRef");
__turbopack_context__.k.register(_c19, "FileUploadClear");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Homepage (/route)
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$HelloComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/HelloComponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/file-upload.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Home() {
    const handleUpload = async (files, options)=>{
        // Handle file upload here
        for (const file of files){
            try {
                // Simulate upload progress
                for(let i = 0; i <= 100; i += 10){
                    options.onProgress(file, i);
                    await new Promise((resolve)=>setTimeout(resolve, 100));
                }
                options.onSuccess(file);
            } catch (error) {
                options.onError(file, error);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$HelloComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUpload"], {
                    onUpload: handleUpload,
                    accept: "image/*",
                    maxSize: 1024 * 1024 * 2,
                    multiple: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploadDropzone"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploadTrigger"], {
                                children: "Click or drag files to upload"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploadList"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploadItemPreview"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploadItemMetadata"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploadItemProgress"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploadItemDelete"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_656b5eaf._.js.map