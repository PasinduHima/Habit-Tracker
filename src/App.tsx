import { HabbitForm } from "./components/HabitForm";
import { HabbitList } from "./components/HabitList";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div>
      <Header/>
      <HabbitForm/>
      <HabbitList/>
    </div>
  );
}

function HabbitForm() {
  return null
}
