import { useState } from 'react'
import './RickAndMortyCard.css'

export default function RickAndMortyCard({ name, img, species, toReplace }) {
  const [areDetailsShown, setAreDetailsShown] = useState(false)

  return (
    <section className="Card">
      <h2
        dangerouslySetInnerHTML={{
          __html: toReplace
            ? name.replace(
                new RegExp(toReplace, 'gi'),
                match => `<mark>${match}</mark>`
              )
            : name,
        }}
      ></h2>
      <button
        onClick={() => setAreDetailsShown(!areDetailsShown)}
        className="Card__button"
      >
        {areDetailsShown ? 'Hide Details' : 'Show Details'}
      </button>
      {areDetailsShown && <p>Species: {species}</p>}
      {areDetailsShown && <img src={img} alt={''} />}
    </section>
  )
}
