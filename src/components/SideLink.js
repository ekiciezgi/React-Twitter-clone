import React from 'react'

export default function SideLink({ name, Icon, active, onMenuItemClick }) {
    const isActive = active === name
    return (

        <li className="group " onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="mb-2 text-xl block cursor-pointer">
                <div className="inline-block">
                    <div className={`flex items-center pl-3 pr-8 py-3 rounded-full group-hover:text-primary-base group-hover:bg-primary-light 
                ${isActive ? "text-primary-base" : ""}`}>
                        <span><Icon /></span>
                        <span className="ml-4 font-bold ">{name}</span>
                    </div>
                </div>
            </a>

        </li>

    )
}
