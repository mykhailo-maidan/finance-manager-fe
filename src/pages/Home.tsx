import { useAuth0 } from "@auth0/auth0-react"

export default function Home(){
    const {logout} = useAuth0();
    return (
    <div>
        <div>
            <h1>Finance Manager</h1>
            <button onClick={() => logout()}>Log Out</button>
        </div>
        <div>
            <p>Information about product</p>
        </div>
    </div>
    )
}
