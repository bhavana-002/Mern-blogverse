
const SignUp=()=>{
    return(
        <div className="flex items-center flex-col mt-5 gap-5 rounded-full">
            <h1 className="text-2xl text-blue-600 font-bold">Join BlogVerse</h1>
            <p className="text-l text-gray-400 text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
            <form className="flex flex-col border-1 border-gray-200 w-1/3 p-2 py-5 items-center gap-5 rounded-4xl shadow-xl">
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input className="border-1 border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your full name"/>

                </div>
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input className="border-1 border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" type="email" placeholder="Enter your email"/>

                </div>
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input className="border-1 border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" type="password" placeholder="Enter your password"/>

                </div>
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <input className="border-1 border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" type="password" placeholder="Enter your password"/>

                </div>
                <div className="flex gap-2 border-1 border-gray-200 w-[90%] py-2 rounded-full justify-center items-center">
                    <input type="checkbox" className="h-5 w-5 "/>
                    <p>I agree to the terms of services and conditions</p>
                </div>
                <button className="w-[90%] bg-blue-500 rounded-full py-4 cursor-pointer">
                    Create an account
                </button>
                <div className="border-gray-100 border-1 w-[90%] mt-4"></div>
                <p className="font-semibold text-gray-400">Already have an Account? <span className=" text-blue-500">Sign In here</span></p>
                <button className="text-gray-400 font-semibold hover:bg-blue-500 cursor-pointer py-3 px-3 w-[90%] rounded-full">Back to Home</button>

            </form>

        </div>
    )
}
export default SignUp