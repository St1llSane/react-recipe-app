import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../styles/c_styles/searched.scss'

const Searched = () => {
  const [searched, setSearched] = useState([])
  const params = useParams()

  useEffect(() => {
    const getSearched = async (name) => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=51f736d4a32042f3ad0dd72d9c21d64a&query=${name}`
      )
      setSearched(res.data.results)
    }
    getSearched(params.search)
    console.log(params.search)
  }, [params.search])

  return (
    <div className="searched">
      {searched.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`}>
          <div className="searched__item" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Searched
