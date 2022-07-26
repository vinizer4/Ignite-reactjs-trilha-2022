import { Header } from "./components/Header"
import { Post } from "./Post"

import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
      author="Diego Fernandes" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere dolorum eveniet, autem iste reiciendis! Est expedita inventore nesciunt soluta ipsam porro eius, quas dolores nihil enim temporibus non esse."
      />
      <Post 
      author="Gabriel Buzzi"
      content="Um novo post muito legal"
      />
    </div>
  )
}


