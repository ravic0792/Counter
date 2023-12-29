import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import PrivacyMessage from "./components/privacyMessage";
import { useSelector} from "react-redux";

function App() {
 
  const privacyVal = useSelector(store => store.privacy); 
  return (
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacyVal?<PrivacyMessage/>:<DisplayCounter/>}
            <Controls/>
          </div>
        </Container>
      </center>
  );
}

export default App;
