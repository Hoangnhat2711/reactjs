import React, { useState } from 'react';
import { useEffect } from 'react';

function ThanhToan(props) {

    const [count,setCount] = useState(0);
    const[status,setStatus] = useState(true);
    useEffect(() => {
        setCount(count + 1 );
      },[status]);

    return (
        <div>
            <h1>{count}</h1>
             <button onClick={() => setStatus(!status)}>++</button>
        </div>
    );
}

export default ThanhToan;