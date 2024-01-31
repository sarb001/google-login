import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const AuthComponent = () => {

  const {  user , loginWithRedirect , isAuthenticated , logout } = useAuth0();
  console.log('user current -',user);

  return (
    <div>
      { isAuthenticated &&   <h3> Hello {user.name} </h3> }
      { isAuthenticated ? (
        <button onClick={(e) => logout()}> Logout </button>
       ) : (
       <button onClick={(e) => loginWithRedirect()}> 
         Login with Redirect 
       </button>
      ) }
    </div>
  )
}

export default AuthComponent