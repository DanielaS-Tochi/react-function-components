import { useState } from "react"

function FuncComponent() {
    // console.log(useState("hola"))
    // const state = useState(100)
    // const value = state[0]
    // const updateValue = state[1]

    // Forma actualizada al 2024: 

    const [value, setValue] = useState(0)
    return (
        <div>Componente funcional
            <p>
                <button onClick={() => setValue(value - 1)}>-</button> {value}
                <button onClick={() => setValue(value + 1)}>+</button>

            </p>


        </div>
    )
}

export default FuncComponent

//En esta parte el instructor Harland nos explica las diferencias entre los componentes de clases y los componentes funcionales. Es recomendable usar componentes funcionales, ya que necesitamos menos líneas de código y queda más limpio y fácil de comprender.