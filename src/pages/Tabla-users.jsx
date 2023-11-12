import React, { useEffect, useState } from "react";
import MenuDash from "../components/MenuDash";
import axios from "axios";
import imagen from "../img/header.png";

function TablaUsers(){

     //Obtener usuarios
  const [ Users, setUsers ] = useState([]);
  useEffect( () => {
    fetchUsers();
  },[]);

  const fetchUsers = async () => {
    
    const response = await axios.get('http://localhost:3000/users')
    setUsers(response.data)
    console.log(response)    
  }

   //Eliminar usuarios
   const HandeDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/users/${id}`);

    if(response.status == 200){
      alert("El usuario se borro correctamente");
    }else{
      alert("Error");
    }
    fetchUsers();
  }

    return(
        <>
        <MenuDash />
        <div className="max-w-screen-xl ml-60 mt-12 mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-blue-800 text-xl font-bold sm:text-2xl">
                        Usuarios
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Aquí tenemos registros de todos los usuarios de la plataforma.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href="javascript:void(0)"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Agregar usuario 
                    </a>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-white font-medium border-b bg-gray-800">
                        <tr>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Apellido</th>
                            <th className="py-3 px-6">Password</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                            {Users.map((users) =>(
                                <tr key={users.id}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={imagen} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{users.UserName}</span>
                                            <span className="block text-gray-700 text-xs">{users.email || "email@gmail.com"}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{users.Nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{users.Apellido}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{users.Password}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Editar
                                        </a>
                                        <button onClick={() => HandeDelete(users.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default TablaUsers;