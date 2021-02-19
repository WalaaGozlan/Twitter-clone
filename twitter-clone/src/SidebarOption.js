import React from "react";
import "./SidebarOption.css"
/**
 * on hover turn blue
 * how to pass a component as a prop
 */
function SidebarOption ({ active, text, Icon }){
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}
 export default SidebarOption; 