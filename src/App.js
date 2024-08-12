
import './App.css';
import pizzaData from './PizzaData';
import Cards from './components/Cards';

const createCard = (data)=>{
  console.log(data.SoldOut)
  return (
        <Cards
          name = {data.name}
          ingredients = {data.ingredients}
          image = {data.photoName}
          price = {data.price}
          quatity = {data.price}
          SoldOut = {data.soldOut}
        />
  )
}




const check = (val)=>{

      if(val===true)
      {
        return(
          <div className='menu'>
            <h2>Our menu</h2>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from all from one oven. All organic, All delicious</p>
            <div className='pizzas'>
            {pizzaData.map(createCard)}
           </div>
      </div>
        )
      }
      else 
      {
        return(
          <>
          
          <p>
            Currently working on the Menu. Be sure to Visit us Later :
          </p>
          <div className='order'><button className='btn'>Order</button></div>
          
          </>
        )
      }
}

let time= new Date().getHours();

function App() {
  let open_hours = false;
  if(time<12 && time <20) open_hours = true;
  
  return (
    <div className="container">
      <header> <h1>PIZZA HUB</h1> </header>
      {check(open_hours)}
      <footer>We are Happy to serve to Between 12:00 and 20:00. Come Visit us or Order Online</footer>
    </div>
  );
}



export default App;
