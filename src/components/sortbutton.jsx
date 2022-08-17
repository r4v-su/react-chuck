import React from "react";

const SortButton = (props) => {
    const cats = props.categories;
    const changeOrder = props.setCategories;
    return (
        <button className="sortBtn" onClick={()=>{
            props.onClick(!props.sort)
            changeOrder(cats.reverse())
        }
    }>
        {props.sort ? 'A-Z' : 'Z-A'}
    </button>
    )
}

export default SortButton