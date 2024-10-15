import React from "react"
import Parent from "./Parent"
function GrandParent({valu}) {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div className="grandparent">
            <p>GrandParent Component.</p>
            <p>{valu}</p>
            <Parent vla = {valu}/>
            <Parent />
        </div>
    )
}

export default React.memo(GrandParent)