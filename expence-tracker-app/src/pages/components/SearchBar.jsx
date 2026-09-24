import notification from "../../assets/notification.png"
import profileIcon from "../../assets/profileIcon.png"

import "./SearchBar.css";



function SearchBar() {

    return (
        <>
            <div className="searchBar">
                {/* <h2>vcshdvc hjDBS H</h2> */}
                <input
                    type="text"
                    placeholder=" 🔍 Search transactions, categories..."
                />
                <div className="searchBarIcons">
                    <img src={notification} alt="notification" />
                    <img src={profileIcon} alt="profilePic" />
                </div>
            </div>
        </>
    )
}

export default SearchBar;