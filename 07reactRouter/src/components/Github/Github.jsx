import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

const Github = () => {
    // const data = useLoaderData()

   const [data, setData] = useState({});
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/sugambhr')
            .then(response => response.json())
            .then(data => setData(data));

        fetch('https://api.github.com/users/sugambhr/repos')
            .then(response => response.json())
            .then(repos => setRepos(repos));
    }, []);

    return (
        <>

            {data.avatar_url && (
                <div className="text-center">
                    <img src={data.avatar_url} alt="GitHub Profile" width={300} className="rounded-full mx-auto" />
                </div>
            )}
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github Followers: {data.followers}
            </div>

            

            <div>
                <h3 className="text-center mt-4 bg-gray-600 text-white p-4 text-3xl">Repositories:</h3>
                <ul className="list-none bg-gray-400 p-4">
                    {repos.map(repo => (
                        <li key={repo.id} className="mb-2">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                                {repo.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Github;

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/sugambhr')
//     return response.json()
// }
