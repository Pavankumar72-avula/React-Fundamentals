//import ProductCard from "./ProductCard.jsx"
//import "./App.css"
//import "./ProductCard.css";
import UserAvatar from "./UserAvatar.jsx";
/*function App() {
  const productName = "Pencil";
  //const isAvailable1 = true;
  //const isAvailable2 = false;
    const price = "9";
    const isAvailable = false;
const isXo=true;

  return (
    <div className="container1">
      <p className="card1"><ProductCard  myName={productName} bee={price} cold={isAvailable}/></p>
      <p className="card2"><ProductCard  myName={productName}  bee={price} ford={isXo}/></p>
    </div> 
   
  )
}*/

function App() {
  const user= "Name:Pavan";
  const year="Year:2023-2027";
  const course="Course:BTech";
  const branch="Branch:CSE";

  return (
    <div className="app-container">
      <p className:avatar1> <UserAvatar 
       Name={user} Year={year}  Course={course} Branch={branch}/></p>
    </div>
  );
}


export default App
