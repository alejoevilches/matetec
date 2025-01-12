import Logout from "@/components/icons/Logout"

export default function DashboardHeader(){
    return (
        <header className="flex justify-between py-4 px-6 border border-black">
            <h1>Bienvenido Alejo a tu dashboard</h1>
            <Logout />
        </header>
    )
}