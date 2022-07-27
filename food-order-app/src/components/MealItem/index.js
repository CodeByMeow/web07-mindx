import "./MealItem.css";
const MealItem = (props) => {
   const {
      meal: { name, description, price, image, id },
   } = props;
   return (
      <div className="meal-item">
         <div className="meal-item-info">
            <div className="meal-item-image">
               <img src={image} />
            </div>
            <div className="meal-item-desc">
               <h4>{name}</h4>
               <p>{description}</p>
               <span>${price}</span>
            </div>
         </div>
         <div className="meal-add-to-cart">
            <div className="amount">
               <label htmlFor={id}>Amount</label>
               <input type="number" id={id} min={0} />
            </div>
            <button className="btn btn-add">Add +</button>
         </div>
      </div>
   );
};

export default MealItem;
