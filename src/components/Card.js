export default function Card({ title, text, isTextVisible, onShowText }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Show Text</button>
    </section>
  )
}
