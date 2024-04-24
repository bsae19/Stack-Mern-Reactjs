import React, {useState} from 'react';
import Navbar from "../Component/Navbar.jsx";

function Subscribe() {
    const [lastname,setLastname] = useState("");
    const [firstname,setFirstname] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (email.length === 0 || password.length === 0 || lastname.length === 0 || firstname.length === 0 || username.length === 0) return setError("Email ou Mot de passe vide")
            const req = await fetch('http://localhost:3001/api/v1/registration',
                {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type':  'application/json'
                    },
                    body: JSON.stringify({
                        username:username,
                        firstname:firstname,
                        lastname:lastname,
                        password: password,
                        email: email,
                    })
                })
            const res = await req.json()
            if (!req.ok) return setError("information incorrect ou l'utilisateur existe déja")
            console.log(res)
            window.location.href = '/login'
        } catch (e) {
            console.error(e.message)
        }
    }
    return (
        <>
            <Navbar/>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#"
                           className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        </a>
                        <div
                            className="w-full bg-gray-600 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Connexion
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="lastname"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                        <input type="text" name="lastname" id="lastname" placeholder="Nom"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               onChange={(e) => setLastname(e.target.value)} required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="firstname"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                                        <input type="text" name="firstname" id="firstname" placeholder="Prénom"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               onChange={(e) => setFirstname(e.target.value)} required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="username"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur</label>
                                        <input type="text" name="username" id="username" placeholder="utilisateur"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               onChange={(e) => setUsername(e.target.value)} required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email" id="email"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="name@company.com" onChange={(e) => setEmail(e.target.value)}
                                               required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot
                                            de passe</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               onChange={(e) => setPassword(e.target.value)} required=""/>
                                    </div>
                                    {
                                        error.length > 0 && <p className="text-red-500">{error}</p>
                                    }
                                    <div className="flex items-center justify-center">
                                        <button type="submit"
                                                className="text-white bg-primary-600 bg-blue-500 w-1/3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-300">Connexion
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Subscribe;