import FileExplorer from './Components/FileExplorer';
import items from "./Data/files.json"
import "./Components/FileExplorer.css"

function App() {
  return (
    <div className="App">
        <FileExplorer files = {items}/>
    </div>
  );
}

export default App;
