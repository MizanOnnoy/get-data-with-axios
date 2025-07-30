// import axios from 'axios';
// import React from 'react';
// import NewsList from './components/newsList';

// class App extends React.Component {
//   state = {
//     news: [],
//   }
//   componentDidMount() {
//   const url = `${import.meta.env.VITE_NEWS_URL}?apiKey=${import.meta.env.VITE_NEWS_API_KEY}&category=technology`;
//   axios
//     .get(url)
//     .then((res) => {
//       this.setState({
//         news: res.data.articles,
//       });
//     })
//     .catch((e) => {
//       console.error("Error fetching news:", e);
//     });
//     console.log(this.state.news);
//     console.log(url);
    
    
// }

//   render(){
//   return(
//     <div>
//       <h1>React Core Concepts</h1>
//       <NewsList news={this.state.articles}/>
//       </div>
//   )
// }
// }


// export default App
import axios from 'axios';
import React from 'react';
import NewsList from './components/newsList';

class App extends React.Component {
  state = {
    news: [],
  }

  componentDidMount() {
    const url = `${import.meta.env.VITE_NEWS_URL}?apiKey=${import.meta.env.VITE_NEWS_API_KEY}&category=technology`;

    axios.get(url)
      .then((res) => {
        this.setState({
          news: res.data.articles,
        }, () => {
          // ✅ Log AFTER state is updated
          console.log("Fetched news:", this.state.news);
        });
      })
      .catch((e) => {
        console.error("Error fetching news:", e);
      });

    console.log("Fetching from URL:", url);
  }

  render() {
    return (
      <div>
        <h1>React Core Concepts</h1>
        {/* ✅ Fixed the prop name here */}
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default App;

