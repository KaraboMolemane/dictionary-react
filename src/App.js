import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
      <div class="container my-5">
      <div class="p-5 text-center bg-body-tertiary rounded-3">
          <FontAwesomeIcon icon={faBook} size='6x' />
          <br />
          <h1 class="text-body-emphasis">Dictionary</h1>
          <p class="col-lg-8 mx-auto fs-5 text-muted">
            This react app allows you to enter a word and it will show you the definition and the exaple usage. Go ahead and try it!
          </p>
          <div class="bd-example">
        <form>
          <div class="mb-3" style={{margin: '0 400px 0 400px'}}>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type a word here and submit'/>
            
          </div>
         
        </form>
        </div>
          <br />
          <div class="d-inline-flex gap-2 mb-5">
              <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button" onClick="window.location.reload();">
                  Get definition
              </button>
          </div>
      </div>
  </div>
  );
}

export default App;
