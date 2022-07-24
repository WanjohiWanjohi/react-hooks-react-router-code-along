import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
  
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
