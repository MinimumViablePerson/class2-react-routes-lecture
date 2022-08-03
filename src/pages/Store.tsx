import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type StoreItem = {
  id: number
  title: string
  image: string
}

export function Store () {
  const [store, setStore] = useState<StoreItem[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/store')
      .then(resp => resp.json())
      .then(storeFromServer => setStore(storeFromServer))
  }, [])

  return (
    <div>
      <h1>Welcome to our Store</h1>

      <ul className='store-list'>
        {store.map(item => (
          <li className='store-item'>
            <Link to={`/store/${item.id}`}>
              <h2>{item.title}</h2>
              <img src={item.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
