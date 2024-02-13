// EthenicDropdown.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericDropdown from './genericdropdown';

const LoungeDrop = () => {
  const categories = [
   {
    categoryTitle: 'COLLECTIONS',
    items: [
      {
        label: 'NIGHT SUITS',
        link:'',
        subcategories: [
          { label: 'FABRIC', items: [{ label: 'POLY CREPE', link: '#' }, { label: 'COTTON', link: '#' },{ label: 'COTTON', link: '#' },
          { label: 'RAYON', link: '#' },{ label: 'GEORGETTE', link: '#' },{ label: 'CHIFFON', link: '#' }] },

        

          { label: 'STYLE', items: [{ label: 'ANARKALI', link: '#' }, { label: 'A-LINE', link: '#' },{ label: 'STRAIGHT', link: '#' }, { label: 'ANGRAKHA', link: '#' }] },
          
          { label: 'PRINT & PATTERN', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
        ],
      },
      
      
      
    
      {
        label:'SHOP ALL',
        link:''
      },
     
      
    ],
  },
 
];

  return (
    <NavLink to="/lounge-wear" className='no-underline'>
      <GenericDropdown title="LOUNGEWEAR" categories={categories} />
    </NavLink>
  );

  
};

export default LoungeDrop;
