// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../ingredient.jsx";

const IngredientList = ({ ingredients, addToBurger }) => {
  const handleSubmit = (newIngredient) => {
    addToBurger(newIngredient);
  };

  const ingList = true;

  return (
    <ul>
      {ingredients.map((ingredient, idx) => {
        // the function needs to return something in order for it to be rendered
        return (
          <Ingredient
            key={idx}
            ingredient={ingredient}
            handleSubmit={handleSubmit}
            ingList={ingList}
          />
        );
      })}
    </ul>
  );
};

export default IngredientList;

// Original code without reusable ingredient component:
// return (
//   <ul>
//     {ingredients.map((ingredient, idx) => {
//       // the function needs to return something in order for it to be rendered
//       return (
//         <li key={idx} style={{ backgroundColor: ingredient.color }}>
//           {ingredient.name}
//           <button onClick={() => handleSubmit(ingredient)}>+</button>
//         </li>
//       );
//     })}
//   </ul>
// );
