import './App.css';
import { AddTicketPage } from './page/new-ticket/AddTicketPage';
import { DefaultLayout } from "./layout/DefaultLayout";
//import { DashboardPage } from "./page/dashboard/DashboardPage";
//import {EntryPage} from "../src/page/entry/EntryPage"

function App() {
  return (
    <div className="App">
      {/*<EntryPage />*/}
      <DefaultLayout >
        {/*<DashboardPage />*/}
        <AddTicketPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
