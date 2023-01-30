import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../styles/c_styles/cuisine.scss'

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  const params = useParams()

  useEffect(() => {
    const getCuisine = async (name) => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=51f736d4a32042f3ad0dd72d9c21d64a&cuisine=${name}`
      )
      setCuisine(res.data.results)
    }
    getCuisine(params.type)
  }, [params.type])

  return (
    <div className="cuisine">
      {cuisine.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`}>
          <div className="cuisine__item" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cuisine
