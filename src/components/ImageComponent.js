import React from "react";
import cars from "../assets/cars.jpg"


const ImageComponent = () => {
    return (
        <div style={{
            backgroundImage: `url(${cars})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",
            height: 600, width: 600
        }}>

        </div>
    );
}

export default ImageComponent;