import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [userWord, setUserWord] = useState('');


  useEffect(() => {
    if(userWord !== ''){
      const apiKey = '0478b4ca-8e6d-4800-b8a1-1e7170815716';
      //const apiURL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key='+apiKey;     
      //const apiURL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'+userWord+'?key='+apiKey;
      const apiURL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'.concat(userWord,'?key=',apiKey);
      //console.log('apiURL;', apiURL);
      
      fetch(apiURL)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }

  }, [userWord])

  let text = '';
  if (error) {
    text =  'Error:'+error.message;
  } else if (!isLoaded) {
    text = 'Enter your word above';
  } else {
    console.log('items:', items);
    text = <div>{items[0].shortdef[0]}</div>;
  }

  return (
    <div className="container my-5">
    <div className="p-5 text-center bg-body-tertiary rounded-3">
        <FontAwesomeIcon icon={faBook} size='6x' />
        <br />
        <h1 className="text-body-emphasis">Dictionary</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          This react app allows you to enter a word and it will show you the definition and the example usage. Go ahead and try it!
        </p>
        <div className="bd-example">
      <form>
        <div className="w-50 p-3" style={{marginLeft: '30%'}} >
          <input type="text" className="form-control d-inline-flex align-items-center" id="userInputWord" aria-describedby="emailHelp" placeholder='Type a word here to get the definition'/>          
        </div>       
      </form>
      <h4>{userWord}</h4>
      <span>{text}</span>
      </div>
        <br />
        <div className="d-inline-flex gap-2 mb-5">
            <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button" onClick={() => setUserWord(document.getElementById('userInputWord').value)}>
                Get definition
            </button>
        </div>
    </div>
</div>
);
}

export default App;
