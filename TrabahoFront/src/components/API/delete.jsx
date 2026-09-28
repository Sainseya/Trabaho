import AxiosAPI from './AxiosAPI';

const deleteUser = async (userId) => {
    try {
        const response = await AxiosAPI.delete(`http://localhost:8080/users/${userId}`);
        console.log("Utilisateur supprimé avec succès", response);
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur : ", error);
    }
}

export default deleteUser;
