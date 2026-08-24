import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import { Usercontext } from "../context/provider";

const Signupterms=()=>{
const {formdata,setformdata}=useContext(Usercontext)

const navigate=useNavigate()

const [marketing,setmarketing]=useState(false)
const [sharing,setsharing]=useState(false)
const signup=async ()=>{
    try{
        const response=await axios.post("http://localhost:3000/signup",{
    username:formdata.name,
    email:formdata.mail,
    password:formdata.password,
    confirmpass:formdata.confirmpassword,
    gender:formdata.gender,
    dateofbirth:formdata.dateofbirth
})
        console.log(response.data)
        alert("signupsuccessful")
        setformdata({
            name:"",
            mail:"",
            password:"",
            confirmpassword:"",
            gender:""
        })
        navigate("/")
    }
    catch(error){
        console.log(error)
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert("server error")
        }
    }
}
return(
    <main className="min-h-screen bg-[#121212] text-white flex flex-col">

        <header className="w-full flex justify-center pt-8">
            <div className="text-white text-4xl font-bold">
                MusicFlow
            </div>
        </header>

        <section className="w-full max-w-[500px] mx-auto px-6 py-10">

            <header className="mb-8">

                <p className="text-sm font-bold text-[#b3b3b3] mb-3">
                    Step 4 of 4
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold">
                    You're almost ready!
                </h1>
                <span className="text-sm">Make your music experience yours</span>

            </header>

            <div className="space-y-6">

                <label className="flex items-start gap-4 cursor-pointer">

                    <input type="checkbox" checked={marketing} onChange={(evt)=>setmarketing(evt.target.checked)}
                        className="mt-1 w-5 h-5 accent-[#1ed760] shrink-0"/>

                    <span className="text-sm leading-6 text-[#d9d9d9]">
                        Get personalized updates about new releases, artists, playlists, and music you'll love.
                    </span>

                </label>

                <label className="flex items-start gap-4 cursor-pointer">

                    <input type="checkbox" checked={sharing} onChange={(evt)=>setsharing(evt.target.checked)}
                        className="mt-1 w-5 h-5 accent-[#1ed760] shrink-0"/>

                    <span>Let us use your preferences to create better music recommendations and discover new sounds.
                    </span>

                </label>

            </div>

            <div className="mt-8 space-y-4 text-sm text-[#b3b3b3] leading-6">

                <p>
                    Your choices help us understand your music taste and create a more personal listening experience.
                </p>

                <p>
                    By selecting "Create account", you confirm that you've read and agree to our Privacy Policy and Terms of Service.
                </p>

            </div>

            <div className="flex items-center justify-between mt-10 gap-4">

                <button type="button" onClick={()=>navigate("/signup/profile")} className="h-12 px-8 rounded-full
                    border border-[#727272] hover:border-white font-bold transition duration-200">
                    Back
                </button>

                <button type="button" onClick={signup} className="h-12 px-8 rounded-full bg-[#1ed760] hover:bg-[#1fdf64] text-black
                    font-bold active:scale-[0.98]transition duration-200">
                    Signup
                </button>

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
export default Signupterms