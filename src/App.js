import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CardPage from "pages/CardPage";
// import AuthPage from "pages/AuthPage";
import Container from './components/Container/Container';


function App() {
  return (
    <Container>
      <CardPage />
{/* <AuthPage/> */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggablePercent={60}
        pauseOnHover
        limit={3}
      />
    </Container>
  );
}

export default App;
