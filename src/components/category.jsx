import React, { Component } from 'react';

const CategoryCard = (props) => {
const cat = props.cat;
const onClick = props.onClick;


        return(
            <button className='category' onClick={()=> {onClick(cat)}}>
                {cat.toUpperCase()}
                </button>
        )

}

export default CategoryCard