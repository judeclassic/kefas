import Image from 'next/image'
import { Inter } from 'next/font/google'

"use client"
import axios from 'axios'
import { useState,useEffect } from 'react'


const Cart = () => {
  const  [ data, setData ]=useState<{away: string; home : string}[]>([])

  async function getData() {
    try {
      const response = await axios.get('/api/user/getsport');
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const timer=setInterval(() => {
      getData();
    },(60 * 1000))
  }, [])

  return (
   <>
   its working
   <table>
     <thead>
       <th>home</th>
       <th>away</th>
     </thead>
     <tbody>

    {
      data.map((element:any,index) => {
        return (
          <td key={index}>
            <tr> <div> {element.home} </div> </tr>
            <tr> <div> {element.away} </div></tr>
          </td>
        )
      })
   }
   </tbody>
   </table>
   
   </>
  );
};

export default Cart;