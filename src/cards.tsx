import { useState } from 'react'
import './cards.css'

type Props = {
  title: string
  text: string
}

export default function Cards({ title, text }: Props) {
  const [likes, setLikes] = useState(0)

  return (
    <div className="card">
      <h1>{title}</h1>
      <img src="https://picsum.photos/200/300" alt="random image" />
      <p>{text}</p>
      <div className="card-actions">
        <button className="like-btn" onClick={() => setLikes(prev => prev + 1)}>
          👍 {likes}
        </button>
        <a className="card-link" href="./second_page.html">Second Page →</a>
      </div>
    </div>
  )
}