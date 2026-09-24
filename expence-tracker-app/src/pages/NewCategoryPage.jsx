import "./NewCategoryPage.css"
import carTrainIcon from "../assets/categoryIcons/carTrainIcon.png"
import degreeCapIcon from "../assets/categoryIcons/degreeCapIcon.png"
// import carTrainIcon from "../assets/categoryIcons/carTrainIcon.png"
import dumbelIcon from "../assets/categoryIcons/dumbelIcon.png"
import favouriteIcon from "../assets/categoryIcons/favouriteIcon.png"
import forkSpoonIcon from "../assets/categoryIcons/forkSpoonIcon.png"
import homeIcon from "../assets/categoryIcons/homeIcon.png"
import shoppingCartIcon from "../assets/categoryIcons/shoppingCartIcon.png"
import teaCupIcon from "../assets/categoryIcons/teaCupIcon.png"

import { useState } from "react";

function NewCategoryPage({ categories, setCategories }) {

    const [categoryName, setCategoryName] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (categoryName.trim() === "") {
            alert("please enter category name");
            return;
        }

        if (selectedIcon === "") {
            alert("please select an icon");
            return;
        }
        if (selectedColor === "") {
            alert("please select a color");
            return;
        }

        const newCategory = {
            id: Date.now(),
            name: categoryName,
            icon: selectedIcon,
            color: selectedColor
        };

        setCategories((prevCategories) => [
            ...prevCategories,
            newCategory
        ]);

        setCategoryName("");
        setSelectedIcon("");
        setSelectedColor("");
    };


    const colors = [
        "#10A674",
        "#3B82F6",
        "#8B5CF6",
        "#EC4899",
        "#F59E0B",
        "#EF4444"
    ];
    const categoriesIcons = [
        {
            id: 1,
            name: "shopping",
            icon: shoppingCartIcon
        },
        {
            id: 2,
            name: "food",
            icon: forkSpoonIcon
        },
        {
            id: 3,
            name: "transport",
            icon: carTrainIcon
        },
        {
            id: 4,
            name: "education",
            icon: degreeCapIcon
        },
        {
            id: 5,
            name: "favourite",
            icon: favouriteIcon
        },
        {
            id: 6,
            name: "home",
            icon: homeIcon
        },
        {
            id: 7,
            name: "fitness",
            icon: dumbelIcon
        },
        {
            id: 8,
            name: "tea",
            icon: teaCupIcon
        }
    ];
    return (
        <>
            <div className="mainContent">
                <h5>Back to Categories</h5>
                <h1>Add New Category</h1>
                <h3>Define a new spending bucket to keep your scholarship and savings organized.</h3>
                <div className="formContent">

                    <form onSubmit={handleSubmit}>

                        <div className="inputGroup">

                            <label>Category Name</label>

                            <input
                                type="text"
                                placeholder="e.g., Monthly Subscriptions"
                                value={categoryName}
                                onChange={(event) => setCategoryName(event.target.value)}
                            />

                        </div>

                        <div className=" inputGroup iconContainerMain">

                            <label>Choose Icon</label>

                            <div className="iconsRow">
                                {
                                    categoriesIcons.map((categoryIcon) => (
                                        <div className="iconContainerDiv" key={categoryIcon.id}>
                                            <div
                                                className="iconContainer"
                                                onClick={() => setSelectedIcon(categoryIcon.name)}
                                            >
                                                <img src={categoryIcon.icon} alt="" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className="inputGroup pickColor">

                            <label>Pick Category Color</label>

                            <div className="categoryColor">

                                {colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="colorCircle"
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>

                        </div>


                        <div className="expenseButtons">
                            <button type="submit" className="saveExpenseButton">Create Category</button>
                            <button type="button" className="cancelButton">Cancel</button>

                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default NewCategoryPage;