import React from 'react'
import { useEffect, useState,useContext} from 'react'
import supabase from '@/utils/supabaseClient'
import Stepper from '@/components/stepper';
import Step1 from '@/components/steps/step1';
import Step2 from '@/components/steps/step2';
import Step3 from '@/components/steps/step3';
import AppContext from '@/components/AppContext';
import Tiptap from '@/components/RichTextEditor/TipTap';
import parse from 'html-react-parser';

const index = () => {
    const [isAuthenticated, setIsAuthenticated]=useState('false');
    const [userId,setUserId]=useState('');
    const [htmldesc,setHtmldesc]=useState('');
    const [url, setUrl]=useState('');
    const [step,setStep]=useState(0);
    const [editorContent, setEditorContent] = useState('');
    const context=useContext(AppContext)
 
    const fieldGroups=[
      <Step1/>,
      <Step2/>,
      <Step3/>
    ]

    /*useEffect(()=>{
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
    },[]

    const handleEditorChange = (content) => {
      setEditorContent(content);
    }
  )*/
  

    const addNewLink= async()=>{
      try{
       
        const {data, error }=await supabase
        .from('onboardlinks')
        .insert({
          description:editorContent.content[0].content[0].text
         
        })
        .select();
        if (error) throw error;
        console.log(data)
        //setlinks(data)
      }
      catch (error){
        console.log("error:", error)
      }
      
    }



  


  return (
    <div className="grid grid-cols-5 gap-8">
   
    {/* <div className="bg-neutral-50 p-4 shadow-lg col-span-3 ">
    < div className=''>
      <Stepper className='col-span-1' step={step}/>
      <div className='col-span-2'>
       {fieldGroups[context.stepContext]}
        
        <button hidden={context.stepContext>=2} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{context.setStepContext((currpage)=>currpage+1)}} >
        Next
    </button>
      </div
    </div>
    </div>>*/}
    <div className="col-span-5 xl:col-span-3">
    <div className="mt-4  border border-1 py-4 bg-white ">
    <Tiptap  { ...{ setEditorContent, setHtmldesc} }/>
        </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
  
  
  
    <div className="col-span-5 xl:col-span-2 ">
     <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
      <div className="flex flex-col space-y-1.5 p-6"><h3 className="text-lg font-semibold leading-none tracking-tight">
        Preview </h3>
        <p className="text-sm prose">
        { parse(htmldesc)}
          
      </p>
    </div>

    </div>
    </div>
   </div>
  )
}

export default index


{/* 

 <label className="font-semibold text-xs mt-3" htmlFor="title">Title</label>
          <input className="flex items-center h-12 px-4 w-64mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
          name="title"
          onChange={(e)=>setTitle(e.target.value)}/>
          <label className="font-semibold text-xs mt-3" htmlFor="url">Url</label>
              <input className="flex items-center h-12 px-4 w-64 mt-2 rounded focus:outline-none focus:ring-2"
              type="text" name="url"
              onChange={(e)=>setUrl(e.target.value)}/>
              <button type="button"
              className="inline-flex items-ceenter rounded-md border bg-indigo-600 text-white p-4 my-4"
          onClick={addNewLink}>
           Create Onboarding
      </button>
*/} 