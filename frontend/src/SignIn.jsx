

const SignIn = () => {
    return (
        <div className="flex items-center justify-center flex-col min-h-screen bg-blue-50 gap-5">

            <form className="flex flex-col border-1 border-gray-200 w-1/3 p-2 py-5 items-center gap-5 rounded-3xl shadow-2xl bg-white">
                <div className="w-[90%] flex flex-col gap-5">
                    <h1 className="text-2xl text-black font-bold text-center">Sign In</h1>

                    <p className="text-l text-gray-400 text-center font-semibold">Access your account</p>
                    <p className="text-md text-gray-700 font-semibold">Email Address</p>
                    <input className="border-1 border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" type="text" placeholder="✉️sample@gmail.com" />

                </div>
                <div className="w-[90%] flex flex-col gap-5">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input className="border-1 relative  border-gray-300 w-full px-2 py-2 rounded-full focus:outline-none focus:border-blue-500" type="password" placeholder="🔒sample123"/>
                    <span classNmae="absolute-right-4 bottom-5">👁️</span>

                </div>
                <div className="flex gap-2  w-[90%] py-2  items-center px-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-5 w-5" />
                        <span>Remember me</span>
                    </label>
                    <span className="ml-auto text-blue-500 hover:underline cursor-pointer">
                        Forgot Password?
                    </span>
                </div>

                <button className="w-[90%] bg-blue-500 rounded-full py-4 cursor-pointer">
                    ⬅️Sign In
                </button>
                <div className="border-gray-100 border-1 w-[90%] mt-4"></div>
                <p className="font-semibold text-gray-400">Didn't have an Account?
                    <button className="text-blue-500 hover:underline cursor-pointer">
                        Create One here
                    </button>
                </p>


            </form>
        

        </div>
    )
}
export default SignIn