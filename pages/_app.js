import '../styles/globals.css'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState, createContext } from 'react'
import AppContext from '@/components/AppContext'


export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const [stepContext,setStepContext]=useState(0);
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <AppContext.Provider value={{stepContext,setStepContext}}>
  
      
      <Component {...pageProps} />
    
      </AppContext.Provider>
    </SessionContextProvider>
  )
 
}
