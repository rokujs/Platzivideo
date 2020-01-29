import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h3 tabIndex='0' className='categories--title'>{title}</h3>
    {children}
  </div>
);

export default Categories;
