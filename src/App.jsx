import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './card';
import Carditem from './carditem';
import { useState } from 'react';

function App() {
  const products=[
    {
      id:1,
      title :"iphone",
      price: 4000
    },
    {
      id:2,
      title :"imac",
      price: 40000
    },
    {
      id:3,
      title :"iwatch",
      price: 94000
    },
    {
      id:4,
      title :"ipad",
      price: 84000
    },
    {
      id:5,
      title :"icloud",
      price: 7094000
    },
  ]
  const[cart,setcard]=useState([])
  const[total,settotal]=useState(0)
  let addtocart=(item)=>{
    setcard([...cart,item])
    settotal(total+item.price)
  }
  let removecard =(item)=>{
//alert(item.title)
let index=cart.findIndex((obj)=> obj.id===item.id);
cart.splice(index,1)
setcard([...cart])
settotal(total-item.price)
  }
  return (
    <div className="App">
     <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
           {
            products.map((item)=>{
              return<Card item={item} handletocard={addtocart}  carditems={cart}></Card>
            })
           }
          </div>
        </div>
        <div className="col-lg-4">
          {
            cart.length===0 ?<div>no items to display</div>:<div className="row">
            <ol class="list-group list-group-numbered">
   {
    cart.map((item)=>
    {
  return<Carditem carditem={item} remove={removecard}></Carditem>
    })
   }
   
   
  
  </ol>
  <h1>{total}</h1>
            </div>
          }
        </div>
      </div>


     </div>
    </div>
  );
}

export default App;
