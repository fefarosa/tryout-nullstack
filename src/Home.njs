import Nullstack from 'nullstack';
import axios from 'axios';
import './Home.scss';

class Home extends Nullstack {
  username = '';

  async fetchApi() {
    const response = await fetch(
      `https://api.github.com/users/${this.username}`
    );
    const data = await response.json();
    console.log(data);
    this.user = data;
  }

  renderSearchBar() {
    return (
      <form onsubmit={this.fetchApi}>
        <div class='input-group flex-nowrap'>
          <span class='input-group-text' id='addon-wrapping'>
            @
          </span>
          <input
            bind={this.username}
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
      </form>
    );
  }

  renderResults() {
    if (!this.user) return false;
    return (
      <div class='container-column'>
        <h2>{this.user.login}</h2>
        <h4>{this.user.name}</h4>
          <img class='image' src={this.user.avatar_url} />
       
      </div>
    );
  }

  render() {
    return (
      <div>
        <div class='container'>
          <SearchBar />
        </div>
        <Results />
      </div>
    );
  }
}

export default Home;
