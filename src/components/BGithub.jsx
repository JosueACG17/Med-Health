import React from "react";
import { FaGithub } from 'react-icons/fa';

function BGithub() {
    return (
        <>
            <div>
                <button
                onClick={()=>{
                const popup = window.open("http://localhost:3000/auth/github", 
                "targetWindow", 
                `toolbar = no, 
                location = no, 
                status=no, 
                menubar = no, 
                scrollbars= yes, 
                resizable = yes, 
                width=620, 
                height=700`);

                window.addEventListener("message", (event) => {
                    if(event.origin == "http://localhost:3000"){
                        if(event.data){
                            localStorage.setItem("user", JSON.stringify(event.data))
                            popup?.close();
                        }
                    }
                })
                }}
                    type="submit"
                    className="w-full items-center block py-2 mb-2.5 text-base font-bold text-center bg-black  text-white transition duration-500 ease-in-out transform border-2 border-gray-300 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-orange-900 hover:text-white"
                >
                    <div className="flex items-center justify-center">
                        <FaGithub></FaGithub>
                        <span className="ml-4">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    GitHub
                                </font>
                            </font>
                        </span>
                    </div>
                </button>
            </div>
        </>
    )
}

export default BGithub;