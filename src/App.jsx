
import { useState } from 'react';
import Header from './components/Header/index';
import SearchBox from './components/SearchBox';
function App() {
  const [searcField, setSearchField] = useState("")
  const [title, setTitle] = useState("")
  const [monster, setMonster] = useState([])

  return (
    <div className=' min-h-screen h-full w-full '>
      <Header />
      <SearchBox />
    </div>
  )
}

export default App
