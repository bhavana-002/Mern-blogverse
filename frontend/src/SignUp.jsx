import NavBar from "./NavBar.jsx"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react'
import { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors,setErrors]=useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="please"
        }
        if(!formData.email){
            newErrors.email="please"
        }
        if(!formData.password){
            newErrors.password="please"
        }
        if(!formData.confirmPassword){
            newErrors.confirmPassword="please"
        }
        else if(formData.password !== formData.confirmPassword){
            newErrors.confirmPasswords="passwords doesnt match"
        }
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors);

        }
        else{
            setSuccess("your acc has created sucessfully")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""

            })
           
        }

       {/*} if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("plz fill all the details")
        }
        else if (formData.password !== formData.confirmPassword) {
            setError("your password doesnt match")
        }
        else {
            setSuccess("your acc is created successfully")
            setError("")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""

            })
        }*/}
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const handlePassword = () => {
        setShowPassword((Previouspassword) => !Previouspassword)

    }
    const handleconfirmPassword = () => {
        setShowconfirmPassword((Previouspassword) => !Previouspassword)

    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
        setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))

    }
    return (
        <div className="flex items-center flex-col w-full  rounded-full">
            <NavBar />
            <h1 className="text-2xl text-blue-600 font-bold">Join BlogVerse</h1>
            <p className="text-l text-gray-400 text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-gray-200 sm:w-[90%] lg:w-1/3 p-2 py-5 items-center gap-5 rounded-4xl shadow-xl">
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div className="relative">
                        <input
                            className="border-2 border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" value={formData.fullName} onChange={handleChange} type="text" name="fullName" placeholder="     Enter your full name" />
                        <UserRound className="absolute stroke-gray-400 left-2 w-4.5  top-2" />
                        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}</div>
                </div>
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input
                        className="border-1 border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter your email" />
{errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <div className="relative w-full">
                        <input

                            className="border border-gray-300 w-full px-4 py-2 rounded-full focus:outline-none focus:border-blue-500"
                            value={formData.password}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                        <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-4 top-2 stroke-gray-400" /> : <EyeOff className="absolute right-4 top-2 stroke-gray-400" />}</p>
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>

                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <div className="relative w-full">
                        <input

                            className="border border-gray-300 w-full px-4 py-2 rounded-full focus:outline-none focus:border-blue-500"
                            value={formData.confirmPassword}
                            type={showconfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                        <p onClick={handleconfirmPassword}>{showconfirmPassword ? <Eye className="absolute right-4 top-2 stroke-gray-400" /> : <EyeOff className="absolute right-4 top-2 stroke-gray-400" />}</p>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                </div>

                <div className="flex gap-2 border-1 border-gray-200 w-[90%] py-2 rounded-full justify-center items-center">
                    <input type="checkbox" className="h-5 w-5 " />
                    <p>I agree to the terms of services and conditions</p>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="flex flex-col relative w-[90%] bg-blue-500 rounded-full py-5 px-7 cursor-pointer">
                    <CircleUser className="absolute left-30 " /><p>Create an account </p>
                </button>
                <div className="border-gray-100 border-1 w-[90%] mt-4"></div>
                <p className="font-semibold text-gray-400">Already have an Account? <Link to="/signin" className=" text-blue-500">Sign In here</Link></p>
                <button className="text-gray-400 font-semibold hover:bg-blue-500 cursor-pointer py-3 px-3 w-[90%] rounded-full"><Link to="/" className="text-blue-500">Back to Home</Link></button>

            </form>

        </div>
    )
}
export default SignUp