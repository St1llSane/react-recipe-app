import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=51f736d4a32042f3ad0dd72d9c21d64a`
      )
      setRecipe(res.data)
    }
    fetchRecipe()
  }, [params.name])

  return (
    <div className="recipe">
			<img src={recipe.images} alt={recipe.title} />
      <h4>{recipe.title}</h4>
    </div>
  )
}

export default Recipe
