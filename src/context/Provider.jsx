import { createContext } from "react";
import { useState } from "react";

export const Usercontext = createContext();

const Provider = ({ children }) => {

    const [user, setuser] = useState([
        {
            id: 1,
            name: "Ish",
            mail: "iswarya@gmail.com",
            password: "123",
            confirmpassword: "123"
        }
    ]);

    const [formdata, setformdata] = useState({
        name: "",
        mail: "",
        password: "",
        confirmpassword: "",
        gender: "",
        dateofbirth: "",
        marketing: false,
        sharedata: false
    });

    // IMPORTANT:
    // logindata is object, not array because i do this mistake
    const [logindata, setlogindata] = useState({
        mail: "",
        password: ""
    });

    return (
        <Usercontext.Provider
            value={{
                user,
                setuser,
                formdata,
                setformdata,
                logindata,
                setlogindata
            }}
        >
            {children}
        </Usercontext.Provider>
    );
};

export default Provider;