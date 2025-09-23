// Example of List component with props, default props, prop types, sorting and filtering

import './List.css'
import PropTypes from 'prop-types'

const List = ({items=[], category="Category"}) => {
    
    // In place sorting.
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Descending Alphabetical order
    // fruits.sort((a,b) => a.calorie - b.calorie); //Ascending order of calories

    // Filtering example
    // const lowCalorieFruits = props.filter(fruit => fruit.calorie < 100);

      // const itemList = props.items;
      // const category = props.category;

      const listItems = items.map((fruit, index) => 
        <li key={index}>{fruit.name} - {fruit.calorie} calories</li>
    ); 

  return (
    <div>
      <h2 className="list-category">{category} List</h2>
      <ol className="list-items">
        {listItems}
      </ol>
    </div>
  );
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        calorie: PropTypes.number.isRequired
    })),
    category: PropTypes.string
}

export default List