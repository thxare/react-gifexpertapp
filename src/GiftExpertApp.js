import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import PropTypes from 'prop-types'
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {


    const [categories, setcategories] = useState(['One punch man'])
    // const handleAdd = () => {
    //     setcategories([...categories, {inputValue}])


    // }
    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category =>
                       
                        <GifGrid
                        key = {category}
                        category= {category}/>
                    )
                }
            </ol>
        </div>
    )
}

AddCategory.propTypes = {

    setcategories: PropTypes.func.isRequired,
}

// export default GiftExpertApp;
