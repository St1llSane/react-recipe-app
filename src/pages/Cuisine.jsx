import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/c_styles/cuisine.scss'

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  const params = useParams()
	console.log(params)

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
    <motion.div
      className="cuisine"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {cuisine.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="cuisine__item">
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </div>
        </Link>
      ))}
    </motion.div>
  )
}

export default Cuisine
