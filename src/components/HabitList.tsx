
export function HabbitList(){

    const habits = [{id:1, name: "Hi2"},
        {id:2, name:"Bye"},
    ]

    if (habits.length === 0){
        return (
             <p className="text-center text-zinc-500 py-12">
            no habbit yet. add one above to get started!
            </p>
        )
    }
    return( <div className="flex flex-col gap-3">
        {habits.map(habit => 
        (
             <HabitItem key={habit.id} habit = {habit} />
        ))}
    </div>
    )
}

type HabitItemProps = {
    habit : {id: string; name: string}
}

function HabitItem({habit} : HabitItemProps){

    return <h1>{habit.name}</h1>
}