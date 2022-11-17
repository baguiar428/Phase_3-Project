import React from "react";

function SideBarIconAbout({ icon, text = 'About' }) {
    return (
        <div className="sidebar-icon group">
            {icon}

            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default SideBarIconAbout;