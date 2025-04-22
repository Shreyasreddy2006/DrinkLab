export function Recipe({item , index}){
    return (
      <div className="recipe-card" key={index}>
        <h3 className="recipe-title">{item.name}</h3>
        <div className="recipe-ingredients">
          <h4>Ingredients</h4>
          <ul>
            {item.ingredients.map((mat , i) => <li key={i}>{mat}</li>)}
          </ul>
        </div>
        <div className="recipe-instructions">
          <h4>Instructions</h4>
          <p>{item.instructions}</p>
        </div>
      </div>
    );
}