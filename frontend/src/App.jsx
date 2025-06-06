import Login from "./Components/Auth/Login";
import Registration from "./Components/Auth/Registration";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
function App() {
  return (
    <div >
      <Tabs className="flex flex-col items-center justify-center">
        <TabList className="absolute top-20 flex gap-4">
          <Tab
            selectedClassName="bg-white text-purple-500 font-semibold"
            className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer px-4 py-2 rounded-sm">
            Login
          </Tab>
          <Tab
            selectedClassName="bg-white text-purple-500 font-semibold"
            className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer px-4 py-2 rounded-sm">
            Registration
          </Tab>
        </TabList>
        <TabPanel className="items-center justify-center w-screen">
          <Login />
        </TabPanel>
        <TabPanel className="items-center justify-center w-screen">
          <Registration />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;