import Results from "../../components/Results/Results";

function App() {
  const correctAnswers = 12;

  return (
    <div className="App">
      <Results correctAnswers={correctAnswers} />
    </div>
  );
}

export default App;
