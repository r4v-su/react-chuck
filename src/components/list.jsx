import React from "react";
import CategoryCard from "./category.jsx";
import { useEffect } from "react";

const List = (props) => {
	let cats = props.categories;

	return (
		<div>
			{cats.map((cat) => {
				return (
					<CategoryCard
						cat={cat}
						key={cat}
						onClick={props.onChoose}
					/>
				);
			})}
		</div>
	);
};
export default List;
