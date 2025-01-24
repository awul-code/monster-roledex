
import { useEffect, useState } from 'react';

// Import Component Header, SearchBox, dan CardLIst
import Header from './components/Header/index';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList/index';

function App() {
  const [searcField, setSearchField] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filteredMOnsters, setFilteredMonsters] = useState(monsters);
  const apiUrl = import.meta.env.VITE_API_URL;

  // Mengambil data dari API
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, [])

  // Title berubah berdasarkan monster yang di ketik.
  useEffect(() => {
    document.title = searcField || "Monster Roledex"
  }, [searcField])

  // Memfilter monsters berdasarkan input pencarian
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searcField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searcField])


  // Mengupdate State berdasarkan perubahan Input pencarian
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className=' min-h-screen h-full w-full '>
      <Header />
      <SearchBox type='search' onChangeHandler={onSearchChange} Placeholder={"Search Monsters..."} />
      <CardList monsters={filteredMOnsters} />
    </div >
  )
}

export default App
