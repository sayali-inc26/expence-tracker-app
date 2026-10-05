import { useState } from "react";

// import food from "../../assets/food.png";
// import travel from "../../assets/travel.png";
// import tution from "../../assets/tution.png";
// import entertainment from "../../assets/entertainment.png";

import deleteButton from "../../assets/deleteButton.png";

import shoppingCartIcon from "../../assets/categoryIcons/shoppingCartIcon.png";
import forkSpoonIcon from "../../assets/categoryIcons/forkSpoonIcon.png";
import carTrainIcon from "../../assets/categoryIcons/carTrainIcon.png";
import degreeCapIcon from "../../assets/categoryIcons/degreeCapIcon.png";
import favouriteIcon from "../../assets/categoryIcons/favouriteIcon.png";
import homeIcon from "../../assets/categoryIcons/homeIcon.png";
import dumbelIcon from "../../assets/categoryIcons/dumbelIcon.png";
import teaCupIcon from "../../assets/categoryIcons/teaCupIcon.png";


import { deleteCategory } from "../../utils/categories";

import "./CategoryCard.css"

function CategoryCard({ categories,setCategories }) {

    const categoryIcons = {
        shopping: shoppingCartIcon,
        food: forkSpoonIcon,
        transport: carTrainIcon,
        education: degreeCapIcon,
        favourite: favouriteIcon,
        home: homeIcon,
        fitness: dumbelIcon,
        tea: teaCupIcon
    };

    
    const handleDelete = async(id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this category?"
        );

        if (!confirmDelete) {
            return;
        }

        try 
            { 
                await deleteCategory(id); 
                setCategories((prevCategories) => 
                    prevCategories.filter( 
                        (category) => 
                            category.id !== id 
                    ) 
                ); 
                        
                alert( "Category deleted successfully!" ); 
            } catch (error) { 
                console.error( "Failed to delete category:", error ); 
                alert( error.message || "Failed to delete category" 

                ); 
            }

        // setCategories((prevCategories) =>
        //     prevCategories.filter(
        //         (category) => category.id !== id
        //     )
        // );
    };

    return (
        <div className="specificCategoryCard">

            {
            categories.map((category) => (

                <div
                    className="singleCategoryCard"
                    key={category.id}
                    
                >

                    <div className="categoryTop">

                        <img
                            className="categoryIcon"
                            src={categoryIcons[category.icon]}
                            alt={category.name}
                            style={{
                        backgroundColor: category.color
                    }}
                        />

                        <img
                            src={deleteButton}
                            alt="delete category"
                            className="categoryDeleteButton"
                            onClick={() => handleDelete(category.id)}
                        />

                    </div>

                    <h3>{category.name}</h3>

                    <div className="categoryInfo">
                        <span className="expense">
                            { category.type === "INCOME" ? "Income" : "Expense" }
                        </span>

                        <span>
                            { category.transactions !== undefined ? `${category.transactions} Transactions` : "0 Transactions" }
                        </span>
                    </div>

                </div>

            ))}

        </div>
    );
}

export default CategoryCard;