// EthenicDropdown.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericDropdown from './genericdropdown';

const WesternDrop = () => {
  const categories = [
   {
    categoryTitle: 'COLLECTIONS',
    items: [
      {
        label: 'JUMPSUITS',
        link:'',
        subcategories: [
          { label: 'FABRIC', items: [{ label: 'POLY CREPE', link: '#' }, { label: 'COTTON', link: '#' },{ label: 'COTTON', link: '#' },
          { label: 'RAYON', link: '#' },{ label: 'GEORGETTE', link: '#' },{ label: 'CHIFFON', link: '#' }] },

         

          { label: 'STYLE', items: [{ label: 'ANARKALI', link: '#' }, { label: 'A-LINE', link: '#' },{ label: 'STRAIGHT', link: '#' }, { label: 'ANGRAKHA', link: '#' }] },
          
          { label: 'PRINT & PATTERN', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
        ],
      },
      
      
     
     
     
      
      {
        label: 'TOPS',
        link:'',
        subcategories: [
          { label: 'Subcategory 1', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory ', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 2', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          { label: 'Subcategory 3', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
         
        ],
      },

      {
        label: ' DRESSES',
        link:'',
        subcategories: [
          { label: 'Subcategory 1', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 2', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          { label: 'Subcategory 3', items: [{ label: 'Item 1', link: '#' }, { label: 'Item 2', link: '#' }] },
          { label: 'Subcategory 4', items: [{ label: 'Item 3', link: '#' }, { label: 'Item 4', link: '#' }] },
          
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
    <NavLink to="/western-wear" className='no-underline'>
      <GenericDropdown title="WESTERN WEAR" categories={categories} />
    </NavLink>
  );

  
};

export default WesternDrop;
