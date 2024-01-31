
import './App.css';
import { LoginSocialGoogle } from 'reactjs-social-login'
import { GoogleLoginButton } from 'react-social-login-buttons';
import AuthComponent from './AuthComponent';

function App() {

  return (
    <>
       <h2> Google LoginHere </h2>
       <AuthComponent />


       {/* <LoginSocialGoogle client_id = {
        //  process.env.ClientID
        '772089059216-e7772rg8vbus72v8bdiuoani9i3jm28a.apps.googleusercontent.com'
       }
       scope='openid profile email'
       discoveryDocs='claims_supported'
       access_type='offline'
       onResolve={({ provider,data }) => {
         console.log('provider',provider);
         console.log('data',data);
       }}
       onReject={(err) => {
         console.log('error -',err);
       }}
       >
          <GoogleLoginButton />
       </LoginSocialGoogle> */}
    </>
  )
}

export default App
