import './cards.css'

type Props = {
  title: string
  text: string
}

export default function Cards({ title, text }: Props) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <img src="https://picsum.photos/200/300" alt="random image" />
      <p>{text}</p>
            <link rel="second page" href="C:\Users\lukas\Riedman\react_projects\react-basics\src\second_page.html" />

    </div>
    
  )
}
