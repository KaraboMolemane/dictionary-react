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
      const apiKey = 'a38b9950-2c3e-446c-94bd-02c7c25cbf22';
      //const apiURL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key='+apiKey;     
      //const apiURL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+userWord+'?key='+apiKey;
      const apiURL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'.concat(userWord,'?key=',apiKey);
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

  let results = '';
  if (error) {
    results =  <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    results = <div>{userWord === ''? 'Enter a word above and click "Get Definition"' : 'Loading...'}</div>;
  } else {
    console.log('items:', items);
    results = (
      <>
        <h6>Definition(s)</h6>
        <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.shortdef}
          </li>
        ))}
      </ul>
      <h6>Usage Notes</h6>
      {/** https://www.dictionaryapi.com/products/json#sec-2.uns */}
        <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.uns}
          </li>
        ))}
      </ul>
      <h6>Usage Discussion</h6>
      {/** https://www.dictionaryapi.com/products/json#sec-2.usages  */}
        <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.usages}
          </li>
        ))}
      </ul>
      </>

    );
  }

  return (
    <div className="container my-5">
    <div className="p-5 text-center bg-body-tertiary rounded-3">
        <FontAwesomeIcon icon={faBook} size='6x' />
        <br />
        <h1 className="text-body-emphasis">Dictionary</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          This dictionary application allows you to enter a word and it will show you the definition and the example usage. Go ahead and try it!
        </p>
        <div className="bd-example">
      <form>
        <div className="w-50 p-3" style={{marginLeft: '30%'}} >
          <input type="text" className="form-control d-inline-flex align-items-center" id="userInputWord" aria-describedby="emailHelp" placeholder='Type a word here to get the definition'/>          
        </div>       
      </form>
      <br />
        <div className="d-inline-flex gap-2 mb-5">
            <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button" onClick={() => setUserWord(document.getElementById('userInputWord').value)}>
                Get definition
            </button>
        </div>
      <h4 className='text-uppercase'>{userWord}</h4>
      <span>{results}</span>
      </div>

    </div>
</div>
);
}

export default App;
