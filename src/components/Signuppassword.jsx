import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Usercontext } from "../context/Provider"
import axios from "axios"
const Signuppassword=()=>{

    const {formdata,setformdata}=useContext(Usercontext)

    const navigate=useNavigate()

    const handlepass=(evt)=>{
       setformdata({...formdata,password:evt.target.value})
    }

    const handleconfirmpass=(evt)=>{
        setformdata({...formdata,confirmpassword:evt.target.value})
    }

    const signup=async ()=>{
        
        const passregex=/^\S+$/
        if(!passregex.test(formdata.password)){
            alert("enter correct password")
            return
        }
        if(formdata.password!==formdata.confirmpassword){
            alert("enter correct password for confirm")
            return
        }
        
            navigate("/signup/profile")
            
       
        
        
    }

    return(<main className="min-h-screen bg-[#121212] text-white flex flex-col">

        <header className="w-full flex justify-center pt-8">
            <div className="text-white text-4xl font-bold">
                MusicFlow
            </div>
        </header>

        <section className="w-full max-w-[450px] mx-auto px-6 py-10">

            <header className="mb-8">

                <p className="text-sm font-bold text-[#b3b3b3] mb-3">
                    Step 2 of 4
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold">
                    Create your password
                </h1>
                <p className="text-xs">Choose a secure password for your account.</p>

            </header>

            <form>

                <div className="space-y-5">

                    <div>

                        <label htmlFor="password" className="block text-sm font-bold mb-2"
                        >
                            Password
                        </label>

                        <input id="password" onChange={handlepass} value={formdata.password||""} name="password" type="password"
                            placeholder="Enter password" className="w-full h-14 px-4 rounded-md bg-[#121212] border border-[#727272]
                            text-white placeholder-[#a7a7a7] outline-none focus:border-white focus:ring-1
                            focus:ring-white transition duration-200" />

                    </div>

                    <div>

                        <label htmlFor="confirmpassword" className="block text-sm font-bold mb-2" >
                            Confirm password
                        </label>

                        <input id="confirmpassword" onChange={handleconfirmpass} value={formdata.confirmpassword||""}
                            name="confirmpass" type="password" placeholder="Confirm password" className="w-full h-14 px-4 rounded-md
                            bg-[#121212] border border-[#727272] text-white placeholder-[#a7a7a7]
                            outline-none focus:border-white focus:ring-1 focus:ring-white transition duration-200"
                        />

                    </div>

                </div>

                <button type="button" onClick={signup} className="w-full h-14 mt-8 bg-[#1ed760] hover:bg-[#1fdf64] active:scale-[0.98] rounded-full text-black font-bold transition duration-200">
    Next
</button>

            </form>

        </section>

        <footer className="mt-auto text-center px-6 py-8 text-xs text-[#a7a7a7]">
            <p>
        A music streaming UI inspired by Spotify
            </p>
        </footer>

    </main>
    )

}
export default Signuppassword