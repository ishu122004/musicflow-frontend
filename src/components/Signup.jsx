// import { Link, useNavigate } from "react-router-dom"

// import { Usercontext } from "../context/provider"

// import { useContext } from "react"

// import axios from "axios"

// const Signup = () => {

//     //// const [user,setuser]=useState()

//     // const [email,setemail]=useState()

//     // const [pass,setpass]=useState()

//     // const [confirm,setconfirm]=useState()

//     // const [user, setuser] = useState([

//     //     {

//     //         id: 1,

//     //         name: "Ish",

//     //         mail: "iswarya@gmail.com",

//     //         password: "123",

//     //         confirmpassword: "123"

//     //     }

//     // ])

//     // const [formdata, setformdata] = useState({

//     //     name: "",

//     //     mail: "",

//     //     password: "",

//     //     confirmpassword: ""

//     // })//

//     const {user,setuser,formdata,setformdata}=useContext(Usercontext)
//     const [step,setstep]=useState(1)
//     const navigate=useNavigate()

//     const handleuser = (evt) => {

//         setformdata({

//             ...formdata,

//             name: evt.target.value

//         })

//     }

//     const handleemail = (evt) => {

//         setformdata({

//             ...formdata,

//             mail: evt.target.value

//         })

//     }

//     const handlepass = (evt) => {

//         setformdata({

//             ...formdata,

//             password: evt.target.value

//         })

//     }

//     const handleconfirmpass = (evt) => {

//         setformdata({

//             ...formdata,

//             confirmpassword: evt.target.value

//         })

//     }

//     const signup = async () => {   //async functionality is for await usability

//         let userregex = /^[A-Za-z\s]+$/

//         let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//         let passregex = /^\S+$/

//         if (!userregex.test(formdata.name)) {

//             alert("Enter your name")

//             return

//         }

//         if (!emailregex.test(formdata.mail)) {

//             alert("Enter correct mail")

//             return

//         }

//         if (!passregex.test(formdata.password)) {

//             alert("Enter correct password")

//             return

//         }

//         if (formdata.password !== formdata.confirmpassword) {

//             alert("Enter correct password for confirm")

//             return

//         }

//         let newuser = {

//             id: user.length + 1,

//             name: formdata.name,

//             mail: formdata.mail,

//             password: formdata.password,

//             confirmpassword: formdata.confirmpassword

//         }

//         setuser((previoususers) => [

//             ...previoususers,

//             newuser

//         ])

//         //// let signupdetails = axios.post(

//         //     "http://localhost:3000/signup",

//         //     {

//         //         username: formdata.name,

//         //         email: formdata.mail,

//         //         password: formdata.password,

//         //         confirmpass: formdata.confirmpassword

//         //     }

//         // )  //send objecct as a json

//         // signupdetails

//         //     .then(function (data) {

//         //         console.log(data)

//         //         console.log("Signup success")

//         //         navigate("/")

//         //     })

//         //     .catch(function (error) {

//         //         console.log(error)

//         //     })

//         // setformdata({

//         //     name: "",

//         //     mail: "",

//         //     password: "",

//         //     confirmpassword: ""

//         // })//

//         try {

//             const response = await axios.post(

//                 "http://localhost:3000/signup",

//                 {

//                     username: formdata.name,

//                     email: formdata.mail,

//                     password: formdata.password,

//                     confirmpass: formdata.confirmpassword

//                 }

//             )

//             console.log(response.data)

//             alert("Signup successful")

//             setformdata({

//                 name: "",

//                 mail: "",

//                 password: "",

//                 confirmpassword: ""

//             })

//             navigate("/")

//         } catch (error) {

//             console.log(error)

//             if (error.response) {

//                 alert(error.response.data.message)

//             }

//         }

//     }

//     return (

//         <div>

//             <input

//                 onChange={handleuser} value={formdata.name || ""} name="username" placeholder="Name"

//             />   {/*value for controlled ref for uncrolled

//                    Controlled   Uncontrolled

//             React controls input     DOM controls input

//             Uses value               Usually uses ref

//             Uses onChange + state     Doesn't need state for value

//             React is source of truth  DOM is source of truth

//             Common for forms         Useful for simple forms/file inputs

//             */}

//             <input onChange={handleemail} value={formdata.mail || ""} name="email" placeholder="Email address"

//             />      {/*name  → identifies the field value → contains the field's current data */}

//             <input onChange={handlepass} value={formdata.password || ""} name="password" placeholder="Password"

//                 type="password"/>

//             <input onChange={handleconfirmpass} value={formdata.confirmpassword || ""} name="confirmpass" placeholder="Confirm password"

//               type="password"

//             />

//             <button onClick={signup}>

//                 Signup

//             </button>

//             <p>if you have account already login to continue<Link to="/">Login</Link></p>

//             {/* Display users */}

//             {user.map((item) => (

//                 <div key={item.id}>

//                     <p>{item.id}</p>

//                     <p>{item.name}</p>

//                     <p>{item.mail}</p>

//                 </div>

//             ))}

//         </div>

//     )

// }

// export default Signup


import {Link,useNavigate} from "react-router-dom"
import { useContext } from "react"
import axios from "axios"
import { Usercontext } from "../context/provider"

const Signup=()=>{
    const {formdata,setformdata}=useContext(Usercontext)
    const navigate=useNavigate()
    const handleemail=(evt)=>{
        setformdata({
            ...formdata,mail:evt.target.value
        })
    }
    const signup =async ()=>{
        let emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailregex.test(formdata.mail)){
            alert("enter correct email")
            return
        }
            navigate("/signup/password")

        
        
    }
    return(
        <main className="min-h-screen bg-[#121212] text-white flex flex-col">
            <header className="w-full flex justify-center pt-8">
                <div className="text-4xl text-white font-bold">MusicFlow</div>
            </header>
            <section className="w-full max-w-[450px] mx-auto px-6 py-10">
                <h1 className="text-3xl text-center font-bold sm:text-4xl leading-tight mb-10 text-white">Create your account<br/>
                Start your music journey</h1>
               
                <form onSubmit={(evt)=>{
                    evt.preventDefault()
                    signup()
                }}>
                    <div className="mb-5"><label htmlFor="email" className="text-white font-bold text-sm mb-2 block">
                        Email address</label>
                        <input id="email" type="email" name="email" value={formdata.mail||""} onChange={handleemail} className="w-full h-12 sm:h-14 px-4 rounded-md bg-[#121212] border border-[#727272] text-white placeholder-[#a7a7a7] outline-none
                        focus:border-white active:border-white focus:ring-1 active:ring-1 focus:ring-white active:ring-white transition duration-700" placeholder="name@example.com"/></div>
                        <button type="submit" className="bg-[#3BE477] w-full h-12 sm:h-14 mt-5 rounded-full text-black text-base font-bold hover:bg-[#3BE477] active:scale-[0.98] transition duration-700"><Link to="/signup/password">Next</Link></button>
                </form>
                <div className="flex items-center gap-4 my-8"><span className="">or</span></div>
                <div className="space-y-3">
                    <button type="button" className="w-full h-12 rounded-full border border-[#727272] hover:border-white font-bold transition duration-200">Sign up with your phone number</button>
                    <button type="button" className="w-full h-12 rounded-full border border-[#727272] hover:border-white font-bold transition duration-200">Sign up with your google</button>
                    <button type="button" className="w-full h-12 rounded-full border border-[#727272] hover:border-white font-bold transition duration-200">Sign up with Apple</button>
                </div>
                <div className="border-t border-[#292929] my-8"></div>
                <p className="text-center text-[#b3b3b3] text-sm">Already have an account?</p><Link to="/" className="block text-center text-white font-bold underline mt-2 hover:text-[#3BE477]">Log in</Link>
            </section>
            <footer className="mt-auto text-center px-6 py-8 text-xs text-[#a7a7a7]">
                <p className="mb-2">A music streaming UI inspired by Spotify</p>
                <p>
                    <a href="#" className="underline">
                        Privacy Policy
                    </a>
                    {" "}and{" "}
                    <a href="#" className="underline">
                        Terms of Service
                    </a>
                    {" "}apply.
                </p>
            </footer>
        </main>
    )
}
export default Signup
    