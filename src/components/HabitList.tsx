import { format, isSameDay } from "date-fns"
import { useHabits } from "../context/useHabits"
import { Button } from "./Button"

type HabitListProps = {
  visibleDates: Date[]
}

export function HabitList({ visibleDates }: HabitListProps) {
  const { habits, toggleHabit, deleteHabit } = useHabits()

  if (habits.length === 0) {
    return (
      <p className="text-zinc-400 text-center py-8">
        No habits yet. Add one above!
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map(habit => (
        <div
          key={habit.id}
          className="flex items-center justify-between bg-zinc-800 rounded-lg p-3"
        >
          <div className="flex items-center gap-3">
            <Button onClick={() => deleteHabit(habit.id)}>✕</Button>
            <span className="font-medium">{habit.name}</span>
          </div>

          <div className="flex gap-1">
            {visibleDates.map(date => {
              const done = habit.completions.some(c => isSameDay(c, date))
              return (
                <button
                  key={date.toISOString()}
                  onClick={() => toggleHabit(habit.id, date)}
                  title={format(date, "EEE, MMM d")}
                  className={`w-8 h-8 rounded-md text-xs font-semibold transition-colors ${
                    done
                      ? "bg-green-500 text-white"
                      : "bg-zinc-700 text-zinc-400 hover:bg-zinc-600"
                  }`}
                >
                  {format(date, "d")}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}