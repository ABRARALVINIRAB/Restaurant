import React, { useEffect, useState } from 'react';


const useData = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        const url = "data.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setDatas(data)
                
            });


    }, [])
  
    
    return (
        {
            datas,
        }
    );
};

export default useData;