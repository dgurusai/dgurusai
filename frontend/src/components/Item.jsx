

const Item = ({ item }) => {
    //console.log(item)
    const { imageUrl, name, description, items, category } = item
    return (
        <div className=" bg-[#2d2d2d] text-[#fffc] px-5 py-3 rounded-xl shadow-2xl transition hover:-translate-y-3 transition duration-300 cursor-pointer  hover:ease-in-out">
            <div className="flex gap-x-5 items-center my-1 h-[50px]">
                <img alt={name} src={imageUrl} className="w-10 h-10" />
                <p className="text-2xl font-semibold ">{category}</p>
            </div>
            <div className="h-[100px]">
                <p className="text-lg text-gray-400">{description}</p>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2 my-3  ">
                {
                    items.map((val, index) => (
                        <button key={index} className="text-white text-sm font-semibold py-2 px-4  rounded-xl bg-[#3D3D3D]">{val.name}</button>
                    ))
                }
            </div>
        </div>
    )
}



export default Item