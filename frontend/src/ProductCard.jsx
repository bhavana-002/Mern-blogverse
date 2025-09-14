
const ProductCard=()=>{
    return(
        <div className="border-2 border-black w-[300px] flex flex-col items-center gap-10 p-4 rounded-2xl ">
            <img src="demon slayer.jpeg" alt="blank" className ="w-[250px] h-[150px] border-1 border-black-600 rounded-full shadow-lg" />
            <div className="flex flex-col gap-5 items-center ">
            <h2 className="font-bold text-4xl text-black-400">DemonSlayer</h2>
            <p className="text-xl text-gray-700 text-center" >Tanjiro,a boy who fights against demons</p>
            <p className="font-bold text-4xl text-black-200">$20.00</p>
            </div>
            <button className="bg-blue-600 text-white w-[90%] py-1 rounded-2xl cursor-pointer hover:bg-blue-900">Add to Cart</button>
        </div>
    )



 
}
export default ProductCard;