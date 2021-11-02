import NavBar from "componets/NavBar";
import Footer from "componets/Footer"
import DataTable from "componets/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
