import { useContext } from "react";
import { MainContext } from "./Main";

function Gallery() {
	const  {library} = useContext(MainContext);

	return (
	<div className="gallery">
		{library.map(item => <div>{item.word}</div>)}
		gallery
	</div>
	);
}

export default Gallery;