import Nullstack from 'nullstack';
import axios from 'axios';
import './Home.scss';

class Home extends Nullstack {
  users = []

  static async fetchApi() {
    axios.get(`https://api.github.com/users/${user}`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  renderSearchBar() {
    return (
      <div>
        <div class='input-group flex-nowrap'>
          <span class='input-group-text' id='addon-wrapping'>
            @
          </span>
          <input
            type='text'
            class='form-control'
            placeholder='Username'
            aria-label='Username'
            aria-describedby='addon-wrapping'
          />
        </div>
        <div class='container'>
          <button type='submit' class='btn btn-light'>
            Search
          </button>
        </div>
      </div>
    );
  }

  renderResults() {

  }

  render() {
    return (
      <div>
       <div class='container'>
          <SearchBar />
          <Results />
        </div>
      </div>
    );
  }
}

export default Home;
