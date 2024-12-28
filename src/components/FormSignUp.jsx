//el useEffect lo quitamos del import porque comentamos las líneas 13 a 15 de useEffect
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { FormControl } from '@mui/material';

function FormSignUp() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Debe contener al menos 3 caracteres",
        },
    })

    function validarNombre(nombre) {
        if (nombre.length >= 3) {
            return { name: { error: false, message: "" } }
        } else {
            return {
                name: { error: true, message: "Debe contener al menos 3 caracteres" }
            }
        }
    }
    // useEffect(() => {
    //     console.log("Nombre ha cambiado: ", name)
    // }, [name])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                console.log({ name, lastName, email, prom, nov })
            }}
        >
            <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) =>
                    // console.log(e.target.value)
                    setName(e.target.value)
                }
                value={name}
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}

                onBlur={(e) => {
                    setErrors(validarNombre(e.target.value))
                }}
            />
            <TextField
                id="lastname"
                label="Apellido"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) =>
                    setLastName(e.target.value)
                }
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={prom} onChange={(e) => setProm(e.target.checked)
                    } />}
                    label="Promociones"
                />
                <FormControlLabel
                    control={<Switch checked={nov} onChange={(e) => setNov(e.target.checked)

                    } />}
                    label="Novedades"
                />

            </FormGroup>

            {/* Por ejemplo, dentro de Button podemos agregar más clases: color="success" */}
            <Button variant="contained" type="submit">Registrarse</Button>
        </form>
    )
}

export default FormSignUp