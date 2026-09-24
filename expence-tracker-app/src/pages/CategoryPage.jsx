import "./CategoryPage.css"
import CategoryCard from "./components/CategoryCard"

function CategoryPage({categories, setCurrentPage,  setCategories,}){

    const handleAddCategory = () => {
        setCurrentPage("New Category");
    };
    return(
        <>
            <div className="categoryMainContent">

                <div className="mainHeading">
                    <div>
                        <h3>Categories</h3>
                        <p>Organize your spending habits efficiently.</p>
                    </div>

                    <button onClick={handleAddCategory}>Add New Category</button>
                </div>

                

            </div>
            <CategoryCard categories={categories} setCategories={setCategories}/>
        </>
    )
}

export default CategoryPage;