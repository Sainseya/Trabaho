import LoginAdminForm from "../components/Autentification Form/LoginAdminForm";

const AdminAuthentification = () => {
  return (
    <div className="flex flex-row h-screen bg-white">
      <div id="container" className="flex-1 m-2 sm:m-6">
        <div className="flex flex-col items-center justify-center h-full border-4 border-bleu bg-blanc_creme rounded-2xl">
          <h2 className="mb-12 text-2xl font-semibold">Admin Login</h2>
          <LoginAdminForm />
        </div>
      </div>
    </div>
  );
};

export default AdminAuthentification;
