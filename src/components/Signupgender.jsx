import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "../context/Provider";

const SignupGender = () => {

    const {formdata,setformdata}=useContext(Usercontext)

    const navigate=useNavigate()

    const handleuser=(evt)=>{
        setformdata({...formdata,name:evt.target.value})
    }
    const handlegender=(evt)=>{
        setformdata({
            ...formdata,gender:evt.target.value
        })
    }

    const handledateofbirth=(evt)=>{
        setformdata({
            ...formdata,dateofbirth:evt.target.value
        })
    }
    const signup=async ()=>{
        let userregex=/^[A-Za-z\s]+$/
        if(!userregex.test(formdata.name)){
            alert("Enter your name")
            return
        }
        if(!formdata.gender){
            alert("Select your gender")
            return
        }
        navigate("/signup/terms")
       
        
    }
    return(
         <main className="min-h-screen bg-[#121212] text-white flex flex-col">

        <header className="w-full flex justify-center pt-8">
            <div className="text-white text-4xl font-bold">
                MusicFlow
            </div>
        </header>

        <section className="w-full max-w-[450px] mx-auto px-6 py-10">

            <header className="mb-8">

                <p className="text-sm font-bold text-[#b3b3b3] mb-3">
                    Step 3 of 4
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold">
                    This is how you'll appear to other listeners.
                </h1>

            </header>

            <form>

                <div className="mb-6">

                    <label htmlFor="username" className="block text-sm font-bold mb-2">
                        Name
                    </label>

                    <input id="username" onChange={handleuser} value={formdata.name||""}
                        name="username" type="text" placeholder="Enter your name"
                        className="w-full h-14 px-4 rounded-md bg-[#121212]
                        border border-[#727272] text-white placeholder-[#a7a7a7]
                        outline-none focus:border-white focus:ring-1 focus:ring-white"/>

                    <p className="text-xs text-[#a7a7a7] mt-2">
                        This name will appear on your profile.
                    </p>

                </div>

                <div className="mb-7">

                    <label
                        htmlFor="dateofbirth"
                        className="block text-sm font-bold mb-2">
                        Date of birth
                    </label>

                    <input id="dateofbirth" onChange={handledateofbirth} value={formdata.dateofbirth||""}
                        name="dateofbirth" type="date" className="w-full h-14 px-4 rounded-md bg-[#121212]
                        border border-[#727272] text-white outline-none focus:border-white
                        focus:ring-1 focus:ring-white"/>

                </div>

                <fieldset>

                    <legend className="text-sm font-bold mb-4">
                        How do you identify?
                    </legend>

                    <div className="space-y-4">

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="gender" value="Man" checked={formdata.gender==="Man"}
                                onChange={handlegender} className="w-5 h-5 accent-[#1ed760]"/>
                            Man
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="gender" value="Woman"
                                checked={formdata.gender==="Woman"} onChange={handlegender} className="w-5 h-5 accent-[#1ed760]"
                            />
                            Woman
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="gender" value="Non-binary" checked={formdata.gender==="Non-binary"}
                                onChange={handlegender} className="w-5 h-5 accent-[#1ed760]"
                            />
                            Non-binary
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio" name="gender" value="Something else" checked={formdata.gender==="Something else"}
             onChange={handlegender}
                                className="w-5 h-5 accent-[#1ed760]"
                            />
                            Something else
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="gender" value="Prefer not to say" checked={formdata.gender==="Prefer not to say"} onChange={handlegender}
                                className="w-5 h-5 accent-[#1ed760]"/> Prefer not to say
                        </label>

                    </div>

                </fieldset>

                <button type="button" onClick={signup} className="w-full h-14 mt-9 bg-[#1ed760] hover:bg-[#1fdf64] active:scale-[0.98] rounded-full text-black font-bold transition duration-200">
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

export default SignupGender;