import React from "react"
import Child from "./Child"
export default function Parent({valu}) {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div className="parent">
            <p>Parent Component</p>
            <p>{valu}</p>
            <Child />
            <Child />
        </div>
    )
}
