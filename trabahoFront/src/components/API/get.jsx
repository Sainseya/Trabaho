import AxiosAPI from './AxiosAPI';
import { useEffect, useState } from 'react';


const AdminPI = () => {
    const [users, setUsers] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [numberOfJobs, setNumberOfJobs] = useState(0);


    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await AxiosAPI.get('http://localhost:8080/users');
                setUsers(response);
                setNumberOfUsers(response.length);
            }             
            catch (error) {
                console.error("Erreur lors de la requête : ", error);
            }
        };

        const getJobs = async () => {
            try {
                const response = await AxiosAPI.get('http://localhost:8080/jobs');
                setJobs(response);
                setNumberOfJobs(response.length);
            }             
            catch (error) {
                console.error("Erreur lors de la requête : ", error);
            }
        }

        getUsers();
        getJobs();
        // deleteUser(userId);
    }, []);

    return { users, jobs, numberOfUsers, numberOfJobs };
};

export default AdminPI;
