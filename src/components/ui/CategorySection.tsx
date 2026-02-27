import React from "react";
import { Category } from "../../types/home.types";

interface Props {
  categories: Category[];
}

const CategorySection: React.FC<Props> = ({ categories }) => {
  return (
    <section style={{ padding: 40 }}>
      <h2>Shop By Category</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 20
        }}
      >
        {categories.map((cat) => (
          <div key={cat.id}>
            <img
              src={cat.image}
              alt={cat.title}
              style={{
                width: "100%",
                height: 250,
                objectFit: "cover"
              }}
            />
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;