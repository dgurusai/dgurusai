


const ProjectItem = ({ item }) => {

    console.log(item)
    const { imageUrl, category, description, usedSkills, githubUrl, liveUrl, name } = item

    return (
        <div className=" bg-[#2d2d2d] text-[#fffc] px-5 py-3 rounded-xl shadow-2xl transition hover:-translate-y-3 transition duration-300 cursor-pointer  hover:ease-in-out">
            <div className="flex gap-x-5 items-center my-1 ">
                <img alt={category} src={imageUrl} className="h-[160px] sm:h-[200px] w-full" />

            </div>

            <div className="my-4 h-[50px]">
                <p className="text-md font-bold my-1 text-[#fffc]  ">{name}</p>
                {/**  <p className="text-lg text-gray-400">{description}</p> */}
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2 my-3 ">
                {
                    usedSkills.map((val, index) => (
                        <button key={index} className="text-white text-xs font-semibold py-2 px-2  rounded-xl bg-[#3D3D3D]">{val}</button>
                    ))
                }
            </div>
            <div className="my-5 sm:my-7 grid grid-cols-2 gap-x-4 h-[80px] items-center">

                <button className="px-4 py-2 bg-purple-500 text-[#F8FAFC] rounded-lg outline-none text-md sm:text-xl hover:bg-purple-700 font-semibold cursor-pointer">
                    <a href={liveUrl} target="_blank">Live Preview</a>
                </button>
                <button className="px-4 py-2  bg-transparent rounded-lg outline-none text-md sm:text-xl text-purple-500 border border-purple-500 hover:bg-purple-200 font-semibold cursor-pointer">
                    <a href={githubUrl} target="_blank">Code</a>
                </button>
            </div>


        </div>
    )
}





export default ProjectItem