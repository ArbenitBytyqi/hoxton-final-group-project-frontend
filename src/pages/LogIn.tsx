import { useNavigate } from "react-router-dom"

export function LogIn({ setCurrentUser }: any) {
    const navigate = useNavigate()
    return (
        <form className="login" onSubmit={(e) => {
            const formData = {
                email: e.target.email.value,
                password: e.target.password.value
            }
            e.preventDefault()
            fetch(`http://localhost:6677/sign-in`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.user) {
                        localStorage.token = data.token
                        setCurrentUser(data)
                        navigate("/home")
                    }
                    else alert(data.error)

                })
        }}>
            <h1>LOGIN FORM</h1>
            <input placeholder="email" name="email"></input>
            <input type="password" placeholder="password" name="password"></input>
            <button>LogIn</button>
        </form>
    )
}