import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {
    return (
        <section className="app">
            <TwitterFollowCard userName="elonmusk">
                Hola UwU
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev">
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard userName="pablo">
                Pablo Emilio Escobar
            </TwitterFollowCard>
        </section>
    )
}

