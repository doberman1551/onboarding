import React from 'react'
import { useEffect, useState } from 'react'
import supabase from '@/utils/supabaseClient'

const index = () => {
    const [isAuthenticated, setIsAuthenticated]=useState('false');
    const [userId,setUserId]=useState('');

    useEffect(()=>{
        const getUser=async()=>{ 
        const user= await supabase.auth.getUser();
        console.log(user)
        if(user){
          const userId=user.data.user?.id;
          setIsAuthenticated(true);
          setUserId(userId);
        }
        };
        getUser()
    },[])


    const addNewLink= ()=>{

    }


  return (
    <div>
     {isAuthenticated&&(
    <>
     <label className="font-semibold text-xs mt-3" htmlFor="title">Title</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
         type="text"
         name="title"
         onChange={(e)=>setTitle(e.target.value)}/>
         <label className="font-semibold text-xs mt-3" htmlFor="url">Url</label>
             <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text" name="url"
             onChange={(e)=>setUrl(e.target.value)}/>
             <button type="button"
            className="inline-flex items-ceenter rounded-md border bg-indigo-600 text-white p-4 my-4"
         onClick={addNewLink}>
     Create Onboarding
    </button>
  </>)}

    </div>
  )
}

export default index