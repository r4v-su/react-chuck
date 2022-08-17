import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';

import SortButton from "./components/sortbutton.jsx";
import List from './components/list';
import Modal from './components/modal.js';

function App() {
  const [categories, setCategories] = useState([])
  const [chosenCategory, chooseCategory] = useState([]);
  const [joke, setJoke] = useState('');
  const [sort, setSort] = useState(true);

const getCats = async () => {
    fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json()).then((response) => {
       return setCategories(response);
    }
  )}

const getJoke = (category) => {
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then((response) => response.json().then((data)=>{setJoke(data.value)})
  )

}
  useEffect(()=>{
    document.title = chosenCategory;
  }, [chosenCategory])

  useEffect(()=> {
    getCats();
  },[]);

  useEffect(()=>{
    getJoke(chosenCategory);
  },[chosenCategory])

  return (
    <div className="App">
      <SortButton sort={sort} onClick = {setSort} categories={categories} setCategories={setCategories} />
        <List categories={categories} onChoose={chooseCategory} />
        {
          (chosenCategory != '' && chooseCategory != 'undefined' && <Modal joke={joke} closeModal={chooseCategory}/>)
        }


    </div>
  );
}

export default App;


