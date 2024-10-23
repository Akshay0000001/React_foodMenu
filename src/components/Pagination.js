import React, { useEffect, useState } from 'react'

function Pagination(props) {
    //console.log(props.itemsPerPage);
    //console.log(props.totalValues.length)
    const [active, setActive] = useState(1);

    useEffect(()=>{
        setActive(props.currentPage)
    }, [props.currentPage])

    const arr = [];
    for(let i=1; i<=Math.ceil(props.totalValues.length/props.itemsPerPage); i++){
        arr.push(i);
    }

    function handleClick(val){
        props.setCurrentPageFn(Number(val));
        setActive(Number(val));
    }

    const data = arr.map(val =>{
        return(
            <li key={val} className={(val == active) ? 'active' : ''} onClick={()=>
                handleClick(val)
            } >{val}</li>
        )
    })
  return (
    <ul className='pagination flex'>
        {data}
    </ul>
  )
}

export default Pagination;