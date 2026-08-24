import axios from "axios"

import { Link } from "react-router-dom"

import { useContext } from "react"

import { Usercontext } from "../context/Provider"

const Login=()=>{

    const {logindata,setlogindata}=useContext(Usercontext)

    // const [mail,setmail]=useState()

    // const [pass,setpass]=useState()

    const handlemail=(evt)=>{

        setlogindata({...logindata,mail:evt.target.value})   

    }

    const handlepass=(evt)=>{

        setlogindata({...logindata,password:evt.target.value})

    }

    const check=()=>{

        let mailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/  // + for one or more  ^ start $ end [^]- this means not   \ for excape symbol \s -white space 

        let passregex=/^[^\s]+$/

        if(!mailregex.test(logindata.mail)){

            alert("enter crt mail")

            return;

        }

        if(!passregex.test(logindata.password)){

            alert("enter valid password")

            return;

        }

        let logindetails=axios.post("http://localhost:3000/login",

            {

                email:logindata.mail,

                password:logindata.password

            }

        )

        logindetails.then(function(response){

            console.log(response.data)

            console.log(response)

            alert("login successful")

            setlogindata({

                mail:"",

                password:""

            })

        }).catch(function(error){

            console.log("servererror:",error)

            if(error.response){

                console.log(error.response.data)

                alert(error.response.data.message)

            }

            else{

                alert("server not reachable")

            }

        })

    }

    // return(<div>

    //     <input onChange={handlemail} value={logindata.mail || ""} name="mail" placeholder="Enter mail.."></input> 

    //     <input onChange={handlepass} value={logindata.password || ""} name="password" type="password" placeholder="enter password"></input>{/*value={logindata.mail || ""} "" for controll the state without state being uncontrolled */}

    //     <button onClick={check}>Login</button>

    //     <p>dont have an account?{""}<Link to="/signup">signup</Link></p>

    //     </div>
    return(
 <main className="min-h-screen bg-[#121212] text-white flex flex-col">

        <header className="w-full flex justify-center pt-8">
            <div className="text-white text-4xl font-bold">
                MusicFlow
            </div>
        </header>

        <section className="w-full max-w-[450px] mx-auto px-6 py-12">

            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Welcome back
            </h1>

            <div className="space-y-5">

                <div>

                    <label
                        htmlFor="mail"
                        className="block text-sm font-bold mb-2"
                    >
                        Email address
                    </label>

                    <input id="mail" onChange={handlemail} value={logindata.mail || ""} name="mail"
                        type="email" placeholder="Enter mail.." className="w-full h-14 px-4 rounded-md bg-[#121212]
                        border border-[#727272]
                        text-white placeholder-[#a7a7a7] outline-none focus:border-white
                        focus:ring-1 focus:ring-white transition duration-200"/>

                </div>

                <div>

                    <label htmlFor="password" className="block text-sm font-bold mb-2" >
                        Password
                    </label>

                    <input id="password" onChange={handlepass} value={logindata.password || ""} name="password"
                        type="password" placeholder="Enter password" className="w-full h-14 px-4 rounded-md bg-[#121212] border border-[#727272]
                        text-white placeholder-[#a7a7a7] outline-none focus:border-white
                        focus:ring-1 focus:ring-white transition duration-200"/>

                </div>

                <button onClick={check} className="w-full h-14 mt-3 bg-[#1ed760] hover:bg-[#1fdf64] active:scale-[0.98]
                    rounded-full text-black font-bold transition duration-200">
                    Log in
                </button>

                <div className="text-center pt-5">

                    <p className="text-[#b3b3b3] text-sm">
                        Don't have an account?
                    </p>

                    <Link to="/signup" className="inline-block mt-2 text-white font-bold
                        underline hover:text-[#1ed760]">
                    Create account
                    </Link>

                </div>

            </div>

        </section>

        <footer className="mt-auto text-center px-6 py-8 text-xs text-[#a7a7a7]">
            <p>
                A music streaming UI inspired by Spotify
            </p>
        </footer>

    </main>
    )

    

}

export default Login