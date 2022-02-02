export function ToDoList () {

    const tasks = [
        "Fazer compras",
        "Renovar CNH",
        "Pagar contas",
        "Estudar React",
        "Fazer Minilab",
    ];
    

    return (
        <>
            {tasks.map((task) => {
                return (
                    <li class="list-group-item">

                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        {task}
                        
                    </li>
                )
            })}

        </>
    )
}