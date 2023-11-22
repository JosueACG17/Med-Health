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
            setShowDeleteSuccessMessage(true);
            setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
            fetchUsers();
        }else{
            alert("Error");
        }
        fetchUsers();
    }

    //Mostrar mensaje cuando se elimine un usuario correctamente
    const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);


    //Editar usuarios
    const handleEdit = async (id) => {
        const user = Users.find((user) => user.id === id);
        setUserToEdit(user);
        setEditForm(true);
    };

    //Mostrar alerta cuando se registre nuevo usuario
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleUserAdded = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Ocultar mensaje después de 3 segundos

    fetchUsers(); // Recargar la lista de usuarios
    };

    //Mensaje de confirmacion
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    const openDeleteConfirm = (userId) => {
        setUserIdToDelete(userId);
        setShowDeleteConfirm(true);
      };

      const confirmDelete = async () => {
        if (userIdToDelete) {
          await HandeDelete(userIdToDelete);
          setShowDeleteConfirm(false);
          setUserIdToDelete(null);
        }
      };
      
      const cancelDelete = () => {
        setShowDeleteConfirm(false);
        setUserIdToDelete(null);
      };
      



    return(
        <>
            <MenuDash />
            <div className="max-w-screen-xl ml-80 mt-12 mx-auto px-4 md:px-8">
    {showSuccessMessage && (           
     <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md mb-4 mx-64">
        <div class="flex items-center justify-center w-12 bg-emerald-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-emerald-500">Registro Exitoso</span>
                <p class="text-sm text-gray-600 ">El usuario se ha registrado</p>
            </div>
        </div>
    </div>
    )}

{showDeleteSuccessMessage && (
  <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md mb-4 mx-64">
        <div class="flex items-center justify-center w-12 bg-emerald-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-emerald-500">Eliminacion Exitosa</span>
                <p class="text-sm text-gray-600 ">El usuario se ha eliminado</p>
            </div>
        </div>
    </div>
)}

{/* Confirmacion */}
    <div className={`${showDeleteConfirm ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Seguro que quieres eliminar este usuario?</h3>
                <button onClick={confirmDelete} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    Si, estoy seguro
                </button>
                <button onClick={cancelDelete} data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
            </div>
        </div>
    </div>
</div>
        
                <div className="items-start justify-between md:flex w-4/5">
                    <div className="max-w-lg">
                        <h3 className="text-blue-800 text-xl font-bold sm:text-2xl">
                            Usuarios
                        </h3>
                        <p className="text-gray-800 font-medium mt-2">
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
                                        <button onClick={() => openDeleteConfirm(user.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {mostrarForm && <FormMod onCerrar={handleCerrarForm} onUserAdded={handleUserAdded}/>}
            {mostrarEditForm && userToEdit && <FormEditMod user={userToEdit} onCerrar={handleCerrarEdit} />}
        </>
    )
}

export default TablaUsers;
