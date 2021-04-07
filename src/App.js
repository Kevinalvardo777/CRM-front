import './App.css';
import { DefaultLayout } from "./layout/DefaultLayout";
import { DashboardPage } from "./page/dashboard/DashboardPage";
//import {EntryPage} from "../src/page/entry/EntryPage"

function App() {
  return (
    <div className="App">
      {/*<EntryPage />*/}
      <DefaultLayout >
        <DashboardPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
