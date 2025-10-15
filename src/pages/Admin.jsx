import AdminAuthForm from '../components/AdminAuthForm';
import Navbar from '../components/Navbar';
import '../styles/AdminPage.css';

export default function Admin() {
  return (
    <> 
    <Navbar />
    <section className="admin-section">
    <AdminAuthForm mode="login" />
    </section>
    </>
  );
}
