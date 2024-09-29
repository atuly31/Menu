import "./App.css";
import { Menu, In_progess } from "./components/menu";
let time = new Date().getHours();

function App() {
  let open_hours = false;
  if (time >= 12 && time <= 20) open_hours = true;

  return (
    <div className="container">
      <header>
        {" "}
        <h1>PIZZA HUB</h1>{" "}
      </header>
      {open_hours ? <Menu /> : <In_progess />}
      <footer>
        We are Happy to serve to Between 12:00 and 20:00. Come Visit us or Order
        Online
      </footer>
      
    </div>
  );
}

export default App;
