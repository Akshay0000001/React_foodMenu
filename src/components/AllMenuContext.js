import React,{useEffect, useState} from "react"
import Loader from './Loader'

export const Allmenu = React.createContext()

const AllMenuContext = (props)=>{
    let [data, setData] = useState(null);
    let [categories, setCategories] = useState(null);
    let [loadingData, setLoadingData] = useState(true);
    let [loadingCategories, setLoadingCategories] = useState(true);
    let [error, setError] = useState(null);

    async function fetchData() {
        try {
            const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
            let response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch meals');
            let result = await response.json();
            setData(result.meals);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoadingData(false);
        }
    }

    async function fetchCategories() {
        try {
            let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            if (!response.ok) throw new Error('Failed to fetch categories');
            let result = await response.json();
            setCategories(result.categories);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoadingCategories(false);
        }
    }

    useEffect(() => {
        fetchData();
        fetchCategories();
    }, []);

    if (loadingData || loadingCategories) {
        return <Loader />;
    }

    if (error) {
        return <p>{error}</p>; // Render error message
    }

    return(
        <Allmenu.Provider value={{data, categories}}>
            {props.children}
        </Allmenu.Provider>
    )
}

export default AllMenuContext;