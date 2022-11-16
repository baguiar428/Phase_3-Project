import React from "react";

function SideBarIcon({ icon, text = 'tool-tip' }) {
return (
    <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
</div>
)
}

export default SideBarIcon;