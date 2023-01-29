import { useState, useEffect } from 'react'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=e4a35b7fa49748e680ddc0683c34eb66&number=9`
      )
      const data = await api.json()
      setPopular(data.recipes)
    }
    fetchData()
  }, [])

	console.log(popular)

  return <div className="popular">Popular</div>
}

export default Popular
