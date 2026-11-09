import "./App.css";
import Cards from "./cards";

function App() {
  return (
    <>
      <div className="container">
        <Cards
          title="Title1"
          text="hallo mein namefdasfdas nfdajk fdas fjsaklf dsajfkl safjsaldkf jadslkf sjdafkldsa fjdasklf djaslkdf jdaslfk dasjlk ist lukas"
        />
        <Cards title="Title2" text="hallo mein name ist max" />
        <Cards title="Title3" text="hallo mein name ist Anna" />
      </div>
    </>
  );
}

export default App;
