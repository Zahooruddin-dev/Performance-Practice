import React from "react"

export default function GrandChild() {
    sleep(30)
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
    return (
        <div className="grandchild">
            <p>GrandChild Component</p>
        </div>
    )
}
