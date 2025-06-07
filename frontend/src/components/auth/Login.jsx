import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading,user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-purple-100">
          <Navbar />
          <div className="flex flex-1 items-center justify-center p-6">
            <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                <p className="mt-2 text-sm text-gray-600">
                  New here?{' '}
                  <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                    Create an account
                  </Link>
                </p>
              </div>
    
              <form className="space-y-6" onSubmit={submitHandler}>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Email address</Label>
                    <Input
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={changeEventHandler}
                      required
                      placeholder="user@gmail.com"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
    
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      value={input.password}
                      onChange={changeEventHandler}
                      required
                      placeholder="••••••••"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
    
                  <div className="flex justify-between items-center">
                    <RadioGroup className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="role"
                          value="student"
                          checked={input.role === 'student'}
                          onChange={changeEventHandler}
                          className="cursor-pointer"
                        />
                        <Label className="text-sm text-gray-700">Student</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="role"
                          value="recruiter"
                          checked={input.role === 'recruiter'}
                          onChange={changeEventHandler}
                          className="cursor-pointer"
                        />
                        <Label className="text-sm text-gray-700">Recruiter</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
    
                <div>
                  {loading ? (
                    <Button
                      disabled
                      className="w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex justify-center items-center"
                    >
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex justify-center items-center"
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Login