import CalendarCard from "./components/ui/CalendarCard";
import DashboardHeader from "./components/ui/DashboardHeader";
import TurnsCard from "./components/ui/TurnsCard";

export default function Home() {
  return (
    <main>
      <DashboardHeader />
      <TurnsCard />
      <CalendarCard />
    </main>
  );
}
