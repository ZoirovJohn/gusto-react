import { Link } from "react-router-dom";

function CategoriesCardV2({
  icon,
  title,
  items,
  path, // Add path parameter
}: {
  icon: React.ReactNode | string;
  title: string;
  items: number;
  path: string; // Add path to type definition
}) {
  return (
    <Link to={path} className="category-card">
      <div className="categories-item" data-aos="fade-up">
        <div className="categories-icon">
          <div className="icon">
            <span>{icon}</span>
          </div>
        </div>

        <div className="categories-item-text">
          <h3>{title}</h3>
          <h4> {items} items</h4>
        </div>
      </div>
    </Link>
  );
}

export default CategoriesCardV2;