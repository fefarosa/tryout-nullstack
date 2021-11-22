import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';

class Application extends Nullstack {
  static async start(context) {
    await this.startProject(context);
  }

  static async startProject({ project }) {
    project.name = 'Github Finder';
    project.domain = 'localhost';
  }

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
        crossorigin='anonymous'
      ></link>
    );
  }

  renderNavbar() {
    return (
      <nav class='navbar navbar-light bg-light'>
        <div class='container-fluid'>
          <span class='navbar-text'>Github finder</span>
        </div>
      </nav>
    );
  }



  render() {
    return (
      <main>
         <Head />
        <Navbar />
        <Home />
      </main>
    );
  }
}

export default Application;
