import React, { useEffect, useState } from 'react';
import Navbar from "../Component/Navbar.jsx";
import AjoutCinema from "../Component/AjoutCinema.jsx";

function Home() {
    const [cinema, setCinema] = useState([]);
    const [data, setData] = useState({});
    const [modal, setmodal] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("data") !== null) {
            setData(JSON.parse(localStorage.getItem("data")));
        }
    }, []);

    useEffect(() => {
        if (data) {
            getCinema();
        }
    }, [data]);

    async function getCinema() {
        try {
            const req = await fetch('http://localhost:3001/api/v1/cinemas', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': data["token"],
                },
                body: JSON.stringify({
                    userid: data["user"]["_id"],
                })
            });
            const res = await req.json();
            if (req.ok) {
                setCinema(res.message);
            }
        } catch (e) {
            console.error(e.message);
        }
    }
    async function changeStatut(id,state){
        try {
            const req = await fetch(`http://localhost:3001/api/v1/cinema/statut/`+id, {
                method: "PATCH",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': data["token"],
                },
                body: JSON.stringify({
                    state: !state,
                })
            });
            const res = await req.json();
            if (req.ok) {
                getCinema()
            }
        } catch (e) {
            console.error(e.message);
        }
    }
    async function Deletecinema(id){
        try {
            const req = await fetch(`http://localhost:3001/api/v1/cinema/`+id, {
                method: "DELETE",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': data["token"],
                }
            });
            const res = await req.json();
            if (req.ok) {
                getCinema()
            }
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <>
            <Navbar />
            {!data ?
                <h2 className="text-lg w-full mt-4 font-semibold text-center text-gray-900">
                    Bienvenue au Classement des Cinema
                </h2>
                : <>
                    <div className="flex flex-wrap items-center justify-end">
                    <button type="button" onClick={() => setmodal(!modal)}
                            className="w-1/8 mx-2 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajout</button>
                    </div>
                        {modal ? <AjoutCinema id={data["user"]["_id"]} getCinema={getCinema}/> : null}
                    <div className="flex flex-col items-center justify-center w-full mt-6 gap-4">
                        {cinema.map((element, index) => {
                            return (
                                <div key={element["_id"]}
                                     className="w-1/4 px-4 py-2 rounded-lg flex flex-col bg-gray-500 items-center justify-between">
                                    <h3>{element.title}</h3>
                                    <p>{element.notice}</p>
                                    <div className="flex items-center mb-4 gap-2">
                                        <label htmlFor="default-checkbox"
                                               className="ms-2 text-sm text-black">Vue?</label>
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            checked={element.state}
                                            onChange={() => changeStatut(element._id, element.state)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <div><button type="button" class="text-red-500 underline" onClick={()=>Deletecinema(element._id)}>suprimmer</button></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </>
    );
}

export default Home;
