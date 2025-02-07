// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../ingredient.jsx";

const BurgerStack = (props) => {
  const handleClick = (ingredient) => {
    props.removeFromBurger(ingredient);
  };

  const ingList = false;

  return (
    <ul>
      {props.stack < 1 ? <p>No Ingredients</p> : null}
      {props.stack.map((ingredient, idx) => {
        return (
          <Ingredient
            key={idx}
            ingredient={ingredient}
            handleClick={handleClick}
            ingList={ingList}
          />
        );
      })}
    </ul>
  );
};

export default BurgerStack;

// Orignal code without reusable ingredient component::
// return (
//   <ul>
//     {props.stack.map((ingredient, idx) => {
//       return (
//         <li key={idx} style={{ backgroundColor: ingredient.color }}>
//           {ingredient.name}
//           <button onClick={() => handleClick(ingredient)}>X</button>
//         </li>
//       );
//     })}
//   </ul>
// );
