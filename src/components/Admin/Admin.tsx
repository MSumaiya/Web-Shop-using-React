import React, {useEffect, useState} from 'react';
import axios from 'axios';



interface IOrder{
    id:number,
    createdBy: string
} 


export default function Admin() {

    
    const defaultOrder:IOrder[]=[];
    const [orders, setOrders] = useState(defaultOrder);
    useEffect(()=>{
        axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=5490')
            .then(result=>{
                setOrders(result.data);
    })
    },[]);

   

   let orderHtml = orders.map((order:IOrder)=>{
        return(
            <div>
                <p>Order id is: {order.id} and created by: {order.createdBy}</p>
                
            </div>
        );
   });

    return (
        <>
            {orderHtml}
        </>
    );
}