import Jokes from "./projects/Jokes/Jokes";
import dataJokes from "./projects/Jokes/dataJokes";
import Home from "./projects/Blogs1/Home";
import db2 from "./projects/Blogs1/db2";
import Home2 from "./projects/Blogs1/Home2";


function App() {
// const title = 'Welcome to the new blog';
// const likes = 50;


  const JokesElement = dataJokes.map(joke =>
    {return(
      <Jokes
        key = {joke.id}
        joke = {joke}
      />
    )}
    )

    // const HomeElement = db2.map((blog) => {
    //   return(
    //     <Home
    //       key={blog.id}
    //       blog={blog}
    //       />
    //   )}
    // )

  return (
    <div className="App">
      {/* {JokesElement} */}
      <Home></Home>



    </div>
  );
}

export default App;
