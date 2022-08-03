import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

type StoreItem = {
  id: number
  title: string
  image: string
}

export function StoreItem () {
  const [item, setItem] = useState<null | StoreItem>(null)
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/store/${params.itemId}`)
      .then(resp => resp.json())
      .then(itemFromServer => setItem(itemFromServer))
  }, [])

  if (item === null)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )

  if (item.id === undefined) return <Navigate to='/store' />

  return (
    <div>
      <h1>Product details {item.id}</h1>
      <h2>{item.title}</h2>
      <img width='100%' src={item.image} alt='' />
    </div>
  )
}
