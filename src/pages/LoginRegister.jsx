import { useState } from 'react';
import{postData} from "../utils/ApiHelper.js";
import { useNavigate } from 'react-router-dom';


const LoginRegister = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [secretKeyError, setSecretKeyError] = useState('');

    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPhoneError('');
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        clearErrors();
        postData('auth/login', {email,password}).then((res)=>{
            if(res?.status == 200){
                localStorage.setItem('token',res?.data?.token);
                navigate('/');
            }else{
                setEmailError(res?.response?.data?.emailError || '');
                setPasswordError(res?.response?.data?.passwordError || '');
            }
        });
        
    }

    const handleRegister = (e) => {
        e.preventDefault();
        clearErrors();

        if(secretKey !== import.meta.env.VITE_REACT_APP_SECRET_KEY){
          console.log()
            setSecretKeyError('Invalid secret key');
            return;
        }

        postData('auth/register', {email,password,name,phone}).then((res)=>{
            if(res.status == 200){
                localStorage.setItem('token',res.data.token);
                navigate('/');
                
            }else{
                setEmailError(res?.response?.data?.emailError || '');
                setPasswordError(res?.response?.data?.passwordError || '');
                setNameError(res?.data?.response?.nameError || '');
                setPhoneError(res?.data?.response?.phoneError || '');
            }
        });

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md transform transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              {isLogin ? 'Login' : 'Register'}
            </h2>
    
            <form>
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    emailError ? 'border-red-500' : ''
                  }`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>
    
              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    passwordError ? 'border-red-500' : ''
                  }`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>
    
              {!isLogin && (
                <>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        nameError ? 'border-red-500' : ''
                      }`}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                  </div>
    
                  {/* Phone Field */}
                  <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        phoneError ? 'border-red-500' : ''
                      }`}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                  </div>

                  {/* Secret Key */}
                  <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="phone">
                      Secret Key
                    </label>
                    <input
                      type="text"
                      id="Secret Key"
                      value={secretKey}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        secretKeyError ? 'border-red-500' : ''
                      }`}
                      onChange={(e) => setSecretKey(e.target.value)}
                    />
                    {secretKeyError && <p className="text-red-500 text-sm mt-1">{secretKeyError}</p>}
                  </div>
                </>
              )}
    
          
              <div className="mb-6">
                <button
                  type="submit"
                  onClick={isLogin ? handleLogin : handleRegister}
                  className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  {isLogin ? 'Login' : 'Register'}
                </button>
              </div>
            </form>
    
           
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
                >
                  {isLogin ? 'Register' : 'Login'}
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    };
    

export default LoginRegister;
