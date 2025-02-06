"use client"

import Logout from "../icons/Logout"

export default function DashboardHeader(){
    const name=localStorage.getItem("name")
    return (
        <header className="flex justify-between py-4 px-4 border-b-2 border-b-black">
            <h1>Bienvenido {name} a tu dashboard</h1>
            <Logout />
        </header>
    )
}