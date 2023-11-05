import React, { useEffect, useState } from 'react';
import { FcGoogle} from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

function BGoogle() {

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || []);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    const userProfile = res.data;
                    setProfile(userProfile);
                    localStorage.setItem('userProfile', JSON.stringify(userProfile));
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    useEffect(() => {
        if (profile && profile.name && profile.email) {
            window.location.href = '/home';
        }
    }, [profile]);

    return (
        <>
            <div>
            <button
                    type="submit"
                    onClick={login}
                    className="w-full items-center block px-12 py-1.5 mb-2.5 text-base text-center bg-white  text-blue-800 font-bold transition duration-500 ease-in-out transform border-2 border-gray-400 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-black hover:text-white"
                >
                    <div className="flex items-center justify-center">
                        <FcGoogle></FcGoogle>
                        <span className="ml-4">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    Google
                                </font>
                            </font>
                        </span>
                    </div>
                </button>
            </div>

        </>
    )
}

export default BGoogle;