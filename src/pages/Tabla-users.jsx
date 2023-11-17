import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuDash from "../components/MenuDash";
import axios from "axios";
import imagen from "../img/header.png";
import FormMod from "../components/FormMod";
import FormEditMod from "../components/FormEditMod";

function TablaUsers(){

    //Mostrar formulario
    const [mostrarForm, setMostrarForm] = useState(false);
    const [mostrarEditForm, setEditForm] = useState(false);
    const [userToEdit, setUserToEdit] = useState(null);

    //Cerrar formulario
    const handleCerrarForm = () => {
        setMostrarForm(false);
    };

    const handleCerrarEdit = () => {
        setEditForm(false);
        setUserToEdit(null);
    };  

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

    //Editar usuarios
    const handleEdit = (id) => {
        const user = Users.find((user) => user.id === id);
        setUserToEdit(user);
        setEditForm(true);
    };

    return(
        <>
            <MenuDash />
            <div className="max-w-screen-xl ml-60 mt-12 mx-auto px-4 md:px-8">
                <div className="items-start justify-between md:flex w-4/5">
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
                            onClick={() => setMostrarForm(true)}
                            href="javascript:void(0)"
                            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                        >
                            Agregar usuario 
                        </a>
                    </div>
                </div>
                <div className="w-4/5 mt-12 mb-6 shadow-sm border rounded-lg overflow-x-auto ">
                    <table className="table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-white font-medium border-b bg-gray-800">
                            <tr>
                                <th className="py-3 px-6">Usuario</th>
                                <th className="py-3 px-6">Nombre</th>
                                <th className="py-3 px-6">Correo Electronico</th>
                                <th className="py-3 px-6"></th>

                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {Users.map((user) =>(
                                <tr key={user.id}>
                                    <td className="flex items-center gap-x-1 py-3 px-6 whitespace-nowrap">
                                        <img src={imagen} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{user.UserName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.Nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.Apellido || "email@gmail.com"}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg" onClick={() => handleEdit(user.id)}>
                                            Editar
                                        </button>
                                        <button onClick={() => HandeDelete(user.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {mostrarForm && <FormMod onCerrar={handleCerrarForm} />}
            {mostrarEditForm && userToEdit && <FormEditMod user={userToEdit} onCerrar={handleCerrarEdit} />}
        </>
    )
}

export default TablaUsers;
