import { Header } from "./components/Header";
import { Headliners } from "./components/Headliners";
import { Ticket } from "./components/Ticket";
import { Lineup } from "./components/Lineup";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Headliners />
        <Ticket />
        <Lineup />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
