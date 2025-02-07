export default function Ingredient(props) {
  return (
    <li style={{ backgroundColor: props.ingredient.color }}>
      {props.ingredient.name}
      {props.ingList ? (
        <button onClick={() => props.handleSubmit(props.ingredient)}>+</button>
      ) : (
        <button onClick={() => props.handleClick(props.ingredient)}>X</button>
      )}
    </li>
  );
}

// If i didn't want to pass a boolean property: 
// but not best practice if the submit functions have the same name 

//   {
//     props.handleSubmit && (
//       <button onClick={() => props.handleSubmit(props.ingredient)}>
//         +
//       </button>
//     );
//   }
//   {
//     props.handleClick && (
//       <button onClick={() => props.handleClick(props.ingredient)}>X</button>
//     );
//   }
