import { motion } from 'framer-motion'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <motion.div
      className="home"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  )
}

export default Home
