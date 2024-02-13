// CategoryDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../../data';

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === parseInt(categoryId));

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h2>{category.title}</h2>
      <p>{category.description}</p>
      {/* Add more details based on your data structure */}
    </div>
  );
};

export default CategoryDetail;
