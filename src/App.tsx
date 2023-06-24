import Tile from "./components/Tile/Tile";
import TextInput from "./components/TextInput";

function App() {
  const leftContent = (
    <>
      <p>Left content</p>
      <TextInput
        placeholder="Net Income"
        onChange={(val) => console.log(val)}
      />
    </>
  );

  return (
    <div className="d-flex justify-content-center">
      <Tile name="Left" margin="auto" content={leftContent} />
      <Tile name="Right" margin="auto" />
    </div>
  );
}

export default App;
