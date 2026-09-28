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
                // Backend endpoints return a paginated Spring Data Page<T>, not a raw array.
                const response = await AxiosAPI.get('http://localhost:8080/users/getUser?size=1000');
                setUsers(response.content);
                setNumberOfUsers(response.totalElements);
            }
            catch (error) {
                console.error("Erreur lors de la requête : ", error);
            }
        };

        const getJobs = async () => {
            try {
                const response = await AxiosAPI.get('http://localhost:8080/jobs?size=1000');
                setJobs(response.content);
                setNumberOfJobs(response.totalElements);
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
