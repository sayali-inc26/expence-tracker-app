import "./CategoryPage.css"
import CategoryCard from "./components/CategoryCard"

import { useEffect } from "react";
import { getCategories } from "../utils/categories";

function CategoryPage({ categories, setCurrentPage, setCategories, }) {
    useEffect(() => 
        { 
            const loadCategories = async () => { 
                try { 
                    const data = await getCategories(); 
                    console.log("Categories from backend:", data); 
                    setCategories(data); 
                } catch (error) { 
                    console.error("Failed to load categories:", error); 
                    alert(error.message || "Failed to load categories"); 
                } 
            }; 
                    
            loadCategories(); 
                
        }, [setCategories]);

    const handleAddCategory = () => {
        setCurrentPage("New Category");
    };
    return (
        <> 
            <div className="categoryMainContent"> 
                <div className="mainHeading"> 
                    <div> 
                        <h3> Categories </h3> 
                        <p> Organize your spending habits efficiently. </p> 
                    </div> 

                    <button onClick={handleAddCategory} > Add New Category </button> 
                    
                </div> 
            </div> 

                <CategoryCard categories={categories} setCategories={setCategories} /> 
        </>);
}

export default CategoryPage;