import React, {useState, useEffect, useContext} from 'react';
import Pagination from './Pagination';
import CardDish from './CardDish';
import { Allmenu } from './AllMenuContext';


function FilteredDishes(props) {
    let [res, setRes] = useState([]);
    let [active, setActive] = useState();
    let [noItemMessage, setNOItemMessage] = useState('');
    let [currentPage, setCurrentPage] = useState(1);
    const {data , categories} = useContext(Allmenu); // destructre the all menu value
    const itemsPerPage = 4;
    
    useEffect(()=>{
        categories.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
        filterData();
    }, []
    );

    function filterData(category = "Beef"){
        setActive(category);
        setCurrentPage(1);
        let arr = data.filter((val)=>{
            return val.strCategory === category            
        })
        //console.log(arr.length,arr)
        if(arr.length < 1){
            setNOItemMessage(`No ${category} items left...!`)
            setRes([]);
        }
        else{
            let values = arr.map(val => {
                return (
                    <CardDish val={val} setShowPopup={props.setShowPopup} setCurrentDish={props.setCurrentDish}/>
                )
            });
            setRes(values);
            setNOItemMessage([])
        }
    } 

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const display = res.slice(firstIndex, lastIndex);

    let result = categories.map((val)=>{
        return(
            <button  
            key={val.strCategory}
            className={(val.strCategory === active) ? "active" : "" } onClick={()=>{
                filterData(val.strCategory)
            }}>{val.strCategory}
            </button>
        )
    })
  return (
    <>
    <div className='button-container'>
            <div className="btnText text-center">
            <h3>Choose your dishes</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, architecto autem perspiciatis, tempora, doloribus quibusdam repellendus voluptatum itaque sapiente vitae ipsa enim facere libero! </p>
            </div>
        <div className='buttons flex flex-wrap'>
            {result}
        </div>
    </div>
    <div className="filterList text-center">
        <ul className='flex flex-wrap '>
            {res.length > 0 ? display : <li><h3>{noItemMessage}</h3></li>}  {/*conditional rendereing*/}
        </ul>
    </div>
    <Pagination totalValues={res} itemsPerPage={itemsPerPage} 
    setCurrentPageFn={setCurrentPage} currentPage={currentPage}
    />
    </>
  )
}

export default FilteredDishes;