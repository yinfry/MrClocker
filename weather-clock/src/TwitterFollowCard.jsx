import { useState } from "react"


export function TwitterFollowCard ({children, userName}) {
    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? `dejar de seguir` : `Seguir`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt = "avatar"
                    src = {`https://unavatar.io/${userName}`}/>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button" onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
