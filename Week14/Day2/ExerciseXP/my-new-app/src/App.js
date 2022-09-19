import logo from "./logo.svg";
import "./App.css";
import User from "./user";
import UserFavoriteColors from "./UserFavoriteColors";
import Exercise4 from "./Exercise4";
// function App() {
//   return (
//     <div className="App">
//       <h3>{User.first_name}</h3>
//       <h3>{User.last_name}</h3>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       {User.fav_animals.map((animal) => {
//         return <UserFavoriteColors animals={animal} />;
//       })}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Exercise4 />
    </div>
  );
}
export default App;
