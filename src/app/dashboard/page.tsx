import DashboardHeader from "./components/DashboardHeader";
import TurnsComponent from "./components/TurnsComponent";
import CalendarComponent from "./components/CalendarComponent";

export default function Dashboard(){
    return (
        <main>
            <DashboardHeader />
            <div className="grid grid-cols-2 grid-rows-2 bg-gray-50">
                <TurnsComponent />
                <CalendarComponent />
            </div>
        </main>
    )
}