import "./Directory.styles.scss";
import CateogyItem from "../category-item/Category-item.component";

const Directory = ({categories}) => {
  

  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CateogyItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;