import Logout from "../icons/Logout"
import { cookies } from "next/headers";
import { handleLogout } from "@/utils/handleLogout";

export default async function DashboardHeader(){
    const cookiesStore=await cookies();
    const name = cookiesStore.get("name")?.value;
    console.log(name);
    return (
        <header className="flex justify-between py-4 px-4 border-b-2 border-b-black">
            <h1>Bienvenido {name} a tu dashboard</h1>
            <Logout onClick={handleLogout} />
        </header>
    )
}