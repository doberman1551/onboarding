import React from 'react'
import { useContext, useState } from 'react'
import AppContext from './AppContext'

const Stepper = ({step}) => {
    const context=useContext(AppContext)
    const [active,setActive]=useState(0);
    console.log(active);
  return (
    <ol className="space-y-4 w-72">
    <li onClick={()=>{context.setStepContext(0);setActive(0)}}>
        <div className={`  w-full p-4 rounded-lg
        ${active===0
            ?  "text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
            : " text-gray-900 bg-gray-100 border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        }
       `} role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">User info</span>
                <h3 className="font-medium">1. User info</h3>
                
            </div>
        </div>
    </li>
    <li onClick={()=>{context.setStepContext(1);setActive(1)}} >
    <div className={`  w-full p-4 rounded-lg
        ${active===1
            ?  "text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
            : " text-gray-900 bg-gray-100 border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        }
       `} role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">Account info</span>
                <h3 className="font-medium">2. Account info</h3>
              
            </div>
        </div>
    </li>
    <li onClick={()=>{context.setStepContext(2);setActive(2)}}>
    <div className={`  w-full p-4 rounded-lg
        ${active===2
            ?  "text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
            : " text-gray-900 bg-gray-100 border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        }
       `} role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">Social accounts</span>
                <h3 className="font-medium">3. Social accounts</h3>
               
            </div>
        </div>
    </li>
   
        <li>
        <div className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">Confirmation</span>
                <h3 className="font-medium">5. Confirmation</h3>
            </div>
        </div>
    </li>
</ol>
  )
}

export default Stepper