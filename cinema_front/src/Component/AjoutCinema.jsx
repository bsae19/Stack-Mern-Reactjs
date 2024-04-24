import React, {useState} from 'react';

function AjoutCinema({id, getCinema}) {
    const [title, setTitle] = useState("")
    const [notice, setNotice] = useState("")
    const [state, setState] = useState(false)
    async function AddCinema(e) {
        e.preventDefault()
        try {
            if (title.length === 0 || id.length === 0) return setError("Email ou Mot de passe vide")
            const req = await fetch('http://localhost:3001/api/v1/cinema',
                {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type':  'application/json',
                        'authorization': JSON.parse(localStorage.getItem("data"))["token"],
                    },
                    body: JSON.stringify({
                        title:title,
                        notice:notice,
                        userid:id,
                        state: state,
                    })
                })
            const res = await req.json()
            getCinema()

        } catch (e) {
            console.error(e.message)
        }
    }
    return (
        <>
            <div className="p-4 md:p-5 bg-gray-500 w-1/3 mx-auto">
                <form className="space-y-4" onSubmit={AddCinema}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                        <input type="text" name="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                               placeholder="titre" onChange={(e) => setTitle(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                        <input type="textarea" name="message" id="message" placeholder="Note"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                               onChange={(e) => setNotice(e.target.value)} required/>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="message"
                               className="block text-sm font-medium text-gray-900 dark:text-white">Vue ?</label>
                        <input
                            onChange={(e) => setState(e.target.checked)}
                            id="default-checkbox"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                    </div>
                    <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ajouter
                    </button>
                </form>
            </div>
        </>
    );
}

export default AjoutCinema;