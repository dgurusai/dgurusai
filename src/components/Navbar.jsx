import { useState, useEffect, useContext } from "react"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import Item from "./Item";
import ProjectItem from "./ProjectItem"

const skillsList = [
    {
        category: "Frontend",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Technologies I use to build modern, responsive, and user-friendly interfaces.",
        items: [
            { name: "HTML", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Bootstrap", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
        ]
    },

    {
        category: "Backend",
        imageUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%238b5cf6'><path d='M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z'/></svg>",
        description: "Tools and frameworks used to develop APIs, business logic, and server-side systems.",
        items: [
            { name: "Node.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "REST APIs", imageUrl: "https://cdn-icons-png.flaticon.com/512/1490/1490871.png" }
        ]
    },

    {
        category: "Databases",
        imageUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%238b5cf6'><path d='M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z'/></svg>",
        description: "Technologies used for storing, managing, and organizing application data.",
        items: [
            { name: "MongoDB", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "SQLite", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
        ]
    },

    {
        category: "Cloud & DevOps",
        imageUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' fill='%238b5cf6'><path d='M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z'/></svg>",
        description: "Platforms and tools I use for development, version control, and deployment.",
        items: [
            { name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Postman", imageUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { name: "VS Code", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Vercel", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "AWS EC2", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "Nginx", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
            { name: "PM2", imageUrl: "https://pm2.keymetrics.io/images/pm2-logo-1.png" }
        ]
    },


]



const socialMediaList = [
    {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/jppremkumar/",
        "icon": "https://cdn-icons-png.flaticon.com/512/174/174857.png"
    },
    {
        "name": "GitHub",
        "url": "https://github.com/JPPREMKUMAR",
        "icon": "https://img.icons8.com/?size=512&id=12598&format=png&color=ffffff"
    },
    {
        "name": "LeetCode",
        "url": "https://leetcode.com/u/jppremkumar/",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
    },
    {
        "name": "Email",
        "url": "mailto:jppremkumar012@gmail.com",
        "icon": "https://cdn-icons-png.flaticon.com/512/732/732200.png"
    },
    {
        "name": "WhatsApp",
        "url": "https://wa.me/916303845985",
        "icon": "https://cdn-icons-png.flaticon.com/512/733/733585.png"
    }
]




/*/
const projectsList = [
    {
        name: "Cab Booking System",
        description:
            "A complete cab booking application where users can book cabs, view ride details, and receive WhatsApp notifications. Admin can manage bookings, rides, users, and drivers from the backend.",
        usedSkills: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Msg91 WhatsApp API",
            "JWT Authentication"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1763640653/cab_booking_qgqa7s.png",
        liveUrl: "https://booking-one-sage.vercel.app",
        githubUrl: "https://github.com/JPPREMKUMAR/booking"
    },
    {
        name: "Garments & Clothing Admin Panel",
        description:
            "A custom admin dashboard developed for a garments business to manage products, categories, orders, and stock. Included secure authentication, product management, and a clean UI for smooth operations.",
        usedSkills: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Auth",
            "Cloudinary",
            "Vercel"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1763640653/cab_booking_qgqa7s.png",
        liveUrl: "https://booking-one-sage.vercel.app",
        githubUrl: "https://github.com/JPPREMKUMAR/booking"
    },



    {
        name: "Cleaning Services Website",
        description:
            "A responsive and modern website developed for a cleaning services company with service listing, pricing details, and a contact form integrated using EmailJS.",
        usedSkills: [
            "React.js",
            "Tailwind CSS",
            "EmailJS",
            "Framer Motion",
            "Vercel Hosting"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1763640653/cab_booking_qgqa7s.png",
        liveUrl: "https://booking-one-sage.vercel.app",
        githubUrl: "https://github.com/JPPREMKUMAR/booking"
    },

    {
        name: "Personal Portfolio Website",
        description:
            "An interactive portfolio built to showcase skills, projects, and experience with smooth animations, responsive design, and polished UI.",
        usedSkills: [
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel",
            "Responsive UI/UX"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1763640653/cab_booking_qgqa7s.png",
        liveUrl: "https://booking-one-sage.vercel.app",
        githubUrl: "https://github.com/JPPREMKUMAR/booking"
    },

    {
        name: "WhatsApp Notification API Setup",
        description:
            "Integrated Msg91 WhatsApp API to send automated booking updates, OTP verification messages, and important alerts for client systems.",
        usedSkills: [
            "Node.js",
            "Express.js",
            "Msg91 WhatsApp API",
            "REST API",
            "JavaScript ES6"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1763640653/cab_booking_qgqa7s.png",
        liveUrl: "https://booking-one-sage.vercel.app",
        githubUrl: "https://github.com/JPPREMKUMAR/booking"
    }
]

/*/

const projectsList = [
    {
        name: "RKN Airport Taxi – Live Production System",
        description:
            "A live production airport cab booking platform where users can book pickup and drop rides, select travel date & time, and submit booking requests. Built with secure JWT authentication and deployed on AWS EC2 with Nginx and PM2 for production-grade server management.",
        usedSkills: [
            "React.js",
            "Context API",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "bcrypt",
            "AWS EC2",
            "Nginx",
            "PM2",
            "Axios"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1772507176/rkn_aaa_kgszt8.png",
        liveUrl: "https://www.rknairporttaxi.com/",
        githubUrl: "https://github.com/JPPREMKUMAR/RKN-Airport-Taxi.git"
    },

    {
        name: "JackStore – Full Stack E-Commerce Platform",
        description:
            "A complete full-stack e-commerce platform where users can browse products, add items to cart, place orders, and manage accounts. Includes protected admin routes for product and order management with Cloudinary image uploads and secure JWT-based authentication.",
        usedSkills: [
            "React.js",
            "Context API",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "bcrypt",
            "Cloudinary",
            "Axios",
            "Vercel"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1772507323/jack_zpezok.png",
        liveUrl: "https://jack-store-client.vercel.app/",
        githubUrl: "https://github.com/JPPREMKUMAR/JackStore.git"
    },

    {
        name: "Tasty Foods – Online Food Ordering Application",
        description:
            "A full-stack food ordering application where users can browse food items, add them to cart, place orders, and securely authenticate. Built with REST APIs, JWT authentication, and a responsive UI for smooth ordering experience.",
        usedSkills: [
            "React.js",
            "Context API",
            "React Router",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "CSS",
            "Axios",
            "js-cookie",
            "react-toastify",
            "Vercel"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1772507474/tasrtyyy_ukzyrp.png",
        liveUrl: "http://tasty-foods-prem.vercel.app/",
        githubUrl: "https://github.com/JPPREMKUMAR/TastyFoods.git"
    },

    {
        name: "Personal Portfolio Website",
        description:
            "An interactive and fully responsive portfolio website built to showcase projects, technical skills, and experience with smooth animations and modern UI design. Designed for strong recruiter impression and clean user experience.",
        usedSkills: [
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel",
            "Responsive UI/UX"
        ],
        imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1772507538/jppkree_nklkb5.png",
        liveUrl: "https://jppremkumar.vercel.app/",
        githubUrl: "https://github.com/JPPREMKUMAR/jppremkumar.git"
    }
];



const Navbar = () => {



    const [isMenu, setIsMenu] = useState(false)

    const [bio, setBio] = useState('')
    const [des, setDes] = useState('')


    const addName = () => {
        let count = 0;
        const timerId = setInterval(() => {
            const fullBio = "Full Stack Developer "

            const presentName = fullBio.slice(0, count)
            setBio(presentName)


            //console.log(presentName)
            if (count === fullBio.length) {
                clearInterval(timerId)
                //console.log("Clear Interval")
            }
            count += 1;
        }, 100)

    }


    const addDes = () => {
        let count = 0;
        const timerId = setInterval(() => {
            const fullDes = "   Full-Stack Developer specializing in the MERN stack.I create fast, scalable, and modern web applications with clean code and great UI/UX. Experienced with React, Node.js, Express, MongoDB/MySQL, REST APIs, and deployments. I enjoy building real-world projects that solve user problems end-to-end.Always learning new technologies to improve performance, architecture, and user experience."

            const presentName = fullDes.slice(0, count)
            setDes(presentName)


            //console.log(presentName)
            if (count === fullDes.length) {
                clearInterval(timerId)
                //console.log("Clear Interval")
            }
            count += 1;
        }, 20)

    }
    useEffect(() => {
        addName()
        addDes()

    }, [])

    const today = new Date()


    return (
        <div>


            <div className="  font-[Sans serif]  py-3 px-8 sm:px-10 sm:py-5 w-full shadow-md bg-[#1a1a1a] min-h-screen">

                <div className="sm:w-full sm:fixed w-[90%] fixed backdrop-blur-sm  ">

                    <div className="w-full  flex justify-between items-center ">
                        <a className="text-3xl font-bold h-[45px]">
                            <span className="text-white">
                                D
                            </span>

                            <span className="text-purple-500"> Guru Sai</span>
                        </a>
                        <div className="sm:hidden  font-[Sans serif] ">
                            {
                                isMenu ? <IoClose className="w-[30px] h-[30px] text-white " onClick={() => setIsMenu((prev) => !prev)} /> : <IoMenu className="w-[30px] h-[30px] text-white " onClick={() => setIsMenu((prev) => !prev)} />
                            }
                        </div>
                        <div className="hidden sm:block w-1/2 sm:flex gap-x-3 mr-10">

                            <div className="w-1/5">

                                <a href="#home" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Home</a>

                            </div>

                            <div className="w-1/5">

                                <a href="#about" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >About</a>

                            </div>

                            <div className="w-1/5">

                                <a href="#skills" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Skills</a>

                            </div>

                            <div className="w-1/5">

                                <a href="#projects" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Projects</a>

                            </div>

                            <div className="w-1/5">

                                <a href="#contact" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Contact</a>

                            </div>




                        </div>


                    </div>

                    <button type="button" className="bg-purple-500 w-5 h-5 rounded-[50%] animate-bounce"></button>






                </div>


                {/* Small Devices  */}

                <div className="sm:hidden ">
                    {
                        isMenu ? <div className=" min-h-screen  w-[90%]  mt-20 fixed z-50 backdrop-blur-sm   h-[900px] bg-[#2d2d2d] text-[#fffc] rounded-lg px-6 py-6 flex flex-col gap-y-4 ">



                            <div>

                                <a href="#home" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Home</a>

                            </div>

                            <div>

                                <a href="#about" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >About</a>

                            </div>

                            <div>

                                <a href="#skills" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Skills</a>

                            </div>

                            <div>

                                <a href="#projects" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Projects</a>

                            </div>

                            <div>

                                <a href="#contact" className="text-white text-md transition duration-300 hover:underline hover:text-purple-500  " onClick={() => setIsMenu(false)} >Contact</a>

                            </div>





                        </div> : null
                    }
                </div>


                <div className="mt-20 sm:mt-30">



                    <div className="my-2 sm:px-20  sm:my-30 sm:w-full flex flex-col gap-x-4 gap-y-10 sm:flex-row " id="home">

                        <div className="sm:1/2 sm:my-5 flex flex-col justify-center ">
                            <div className="w-2/3 sm:w-full">
                                <h1 className="text-3xl text-white font-bold sm:text-5xl ">Hi, I'm D <span className="text-purple-500 font-bold">Guru Sai</span></h1>


                            </div>

                            <div className="my-3 sm:my-5">
                                <p className="text-2xl sm:text-4xl font-semibold text-white">{bio}<span className="text-purple-500">|</span></p>

                            </div>
                            <div className="my-3 sm:my-5">
                                <p className="text-gray-400 text-lg sm:text-xl">
                                    {des}
                                </p>
                            </div>

                            <div className="my-3 sm:my-5 flex gap-x-4 items-center">

                                <button className="px-6 py-3 bg-purple-500 text-[#F8FAFC] rounded-lg outline-none text-lg hover:bg-purple-700 font-semibold cursor-pointer">
                                    <a href="#projects">View Work</a>
                                </button>
                                <button className="px-6 py-3  bg-transparent rounded-lg outline-none text-lg text-purple-500 border border-purple-500 hover:bg-purple-200 font-semibold cursor-pointer">
                                    <a href="#contact">Contact Me</a>
                                </button>
                            </div>

                        </div>


                        <div className="hidden sm:w-1/2 flex flex-col justify-center items-center my-10 ">

                            <div className="sm:w-80 sm:h-80 w-60 h-60 bg-purple-500 rounded-[50%] transition duration-700  relative animate-[bounce_10s_ease-in-out_infinite] ">

                                <img
                                    alt="img"
                                    src="https://res.cloudinary.com/dokbp23jt/image/upload/v1763633974/profile_-_Copy_x7fuks.jpg"
                                    className="hidden relative animate-[bounce_10s_ease-in-out_infinite] sm:w-80 sm:h-80 w-70 h-64 rounded-[50%]"
                                />
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    <p className="text-center text-white text-xl sm:text-2xl"> </p>
                                </div>




                            </div>



                        </div>





                    </div>

                    <div className="my-20 sm:px-20  sm:my-30 sm:w-full flex flex-col gap-x-4 gap-y-10 sm:flex-row " id="skills">

                        <div className="sm:my-5 w-full flex flex-col justify-center items-center ">
                            <div className="sm:w-2/3 w-full text-center">
                                <h1 className="text-3xl text-white font-bold sm:text-5xl ">My <span className="text-purple-500 font-bold">Skills</span></h1>

                                <p className="text-gray-400 text-lg my-2  sm:text-xl">Technologies I work with to bring ideas to life</p>

                            </div>





                            <div className="my-3 sm:my-5 grid grid-cols-1 sm:grid-cols-3 gap-y-7 gap-x-7">
                                {
                                    skillsList.map((item, index) => (
                                        <Item key={index} item={item} />
                                    ))
                                }
                            </div>



                        </div>







                    </div>


                    {/** Projects */}
                    <div className="my-20 sm:px-20 sm:my-30 sm:w-full flex flex-col gap-x-4 gap-y-10 sm:flex-row " id="projects">

                        <div className="sm:my-5 w-full flex flex-col justify-center items-center ">
                            <div className="sm:w-2/3 w-full text-center">
                                <h1 className="text-3xl text-white font-bold sm:text-5xl ">My <span className="text-purple-500 font-bold">Projects</span></h1>

                                <p className="text-gray-400 text-lg my-2  sm:text-xl">A selection of my recent work</p>

                            </div>





                            <div className="my-3 sm:my-5 grid grid-cols-1 sm:grid-cols-3 gap-y-7 gap-x-7">
                                {
                                    projectsList.map((item, index) => (
                                        <ProjectItem key={index} item={item} />
                                    ))
                                }
                            </div>



                        </div>


                    </div>



                    {/** ABout Us */}
                    <div className="my-20 sm:px-20 sm:my-30 sm:w-full flex flex-col gap-x-4 gap-y-10 sm:flex-row " id="about">

                        <div className="sm:my-5 w-full flex flex-col justify-center items-center ">
                            <div className="sm:w-2/3 w-full text-center">
                                <h1 className="text-3xl text-white font-bold sm:text-5xl ">About <span className="text-purple-500 font-bold">Us</span></h1>

                                <p className="text-gray-400 text-lg my-2  sm:text-xl">Get to know more about my background and passion</p>

                            </div>
                            <div className="my-4">
                                <p className="text-gray-400 text-lg my-2  sm:text-xl">

                                    My journey in tech started with simple curiosity—building small HTML and CSS pages just to see something come alive on the screen. Over time, that curiosity grew into a deep passion for creating real, meaningful digital experiences.

                                    To take my skills to the next level, I joined NxtWave CCBP, where I learned industry-ready development with a strong foundation in Frontend, Backend, Databases, and Deployment. This structured learning helped me understand how real applications are designed, built, and deployed at scale.

                                    Through continuous hands-on practice, I transitioned from building basic layouts to developing full-stack MERN applications with modern tools like React, Node.js, Express, MongoDB, GitHub, Vercel, and cloud environments. I also worked on real-world projects that helped me understand user experience, clean architecture, and problem-solving at a deeper level.
                                </p>

                            </div>






                        </div>







                    </div>




                    {/** Contact Us */}
                    <div className="my-20 sm:my-30 sm:w-full flex flex-col gap-x-4 gap-y-10 justify-center items-center " id="contact">

                        <div className="sm:my-5 w-full flex flex-col justify-center items-center ">
                            <div className="sm:w-2/3 w-full text-center">
                                <h1 className="text-3xl text-white font-bold sm:text-5xl ">Get <span className="text-purple-500 font-bold">In Touch </span></h1>

                                <p className="text-gray-400 text-lg my-2  sm:text-xl">Have a project in mind or want to collaborate? Let's talk!</p>

                            </div>







                        </div>
                        <div className="my-4 sm:w-1/2 w-full">
                            <form className="flex flex-col gap-y-3">

                                <div>
                                    <label htmlFor="name" className="text-lg sm:xl text-white " >Your Name</label>
                                    <div className=" bg-[#2d2d2d] text-[#fffc] px-5 py-3 rounded-lg my-2">
                                        <input id="name" className="w-full outline-none" placeholder="Enter Your Name" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-lg sm:xl text-white " >Your Email</label>
                                    <div className=" bg-[#2d2d2d] text-[#fffc] px-5 py-3 rounded-lg my-2">
                                        <input id="email" type="email" className="w-full outline-none" placeholder="Enter Your Email" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-lg sm:xl text-white " >Your Email</label>
                                    <div className=" bg-[#2d2d2d] text-[#fffc] px-5 py-3 rounded-lg my-2">
                                        <textarea id="message" className="w-full outline-none" placeholder="Enter Your Message" rows="7" ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button className="text-white bg-purple-500 text-md font-bold rounded-md px-5 py-2 outline-none w-full cursor-pointer" >Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full">


                            <h1 className="text-white font-semibold text-xl sm:text-2xl text-center ">Follow Me</h1>

                            <div className="my-4 sm:px-5 py-4 w-full flex justify-center rounded-lg items-center sm:gap-x-15 gap-x-5 ">

                                {
                                    socialMediaList.map((item, index) => (

                                        <a key={index} href={item.url} target="_blank" className="cursor-pointer transition hover:-translate-y-2 ease-in-out" >
                                            <img alt={item.name} src={item.icon} className="w-5 h-5" />
                                        </a>
                                    ))
                                }

                            </div>

                        </div>








                    </div>


                </div>



            </div>


            <footer className="flex justify-center items-center px-10 py-10 bg-[#2d2d2d] text-[#fffc] ">
                <p className="text-lg  text-center ">    © {today.getFullYear()} Created By JP Prem Kumar. All rights reserved.</p>

            </footer>
        </div>
    )
}



export default Navbar