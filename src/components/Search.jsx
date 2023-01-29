import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../styles/c_styles/search.scss'

const Search = () => {
  const [search, setSearch] = useState('')
	const navigate = useNavigate()

	const onSubmitHandler = (e) => {
		e.preventDefault()
		navigate(`/searched/${search}`)
	}

  return (
    <form className="search" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch />
    </form>
  )
}

export default Search
