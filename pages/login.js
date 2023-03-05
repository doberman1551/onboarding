import React from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'

const Login = () => {
    const supabase = useSupabaseClient()

    const customTheme = {
        default: {
          colors: {
            brand: 'hsl(270, 100%, 50%)',
            brandAccent: 'hsl(270, 100%, 30%)',
            brandButtonText: 'white',
            // ..
        },
        dark: {
          colors: {
            brandButtonText: 'white',
            defaultButtonBackground: '#2e2e2e',
            defaultButtonBackgroundHover: '#3e3e3e',
            //..
          },
        },
        // You can also add more theme variations with different names.
        evenDarker: {
          colors: {
            brandButtonText: 'white',
            defaultButtonBackground: '#1e1e1e',
            defaultButtonBackgroundHover: '#2e2e2e',
            //..
          },
        },
      }}

  return (
    <div className='grid h-screen place-items-center'> 
           <div>
            <h1 className="text-2xl font-bold"> Login</h1>
          <Auth supabaseClient={supabase} appearance={{ theme: customTheme }} theme="default" />
          </div>
    </div>
  )
}

export default Login