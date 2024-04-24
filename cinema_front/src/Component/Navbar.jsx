import React from 'react';

function Navbar(props) {
    return (
        <nav className="w-full bg-gray-200 dark:bg-gray-800 text-white py-2 flex flex-col gap-4">
            <div className="w-full"><h1 className="text-center mx-auto"><a href="/" className="hover:text-red-500 px-2 py-1 hover:cursor-pointer">Accueil</a></h1></div>
            <ul className="w-full flex gap-4 justify-center items-center">
                <li><a href="/login" className="hover:bg-blue-500 px-4 py-1 rounded-lg">Connexion</a></li>
                <li><a href="/subscribe" className="hover:bg-blue-500 px-4 py-1 rounded-lg">Inscription</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;