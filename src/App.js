import "./App.css";
import Body from "./components/Body";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "/watch",
      element: <WatchPage/>
    },
    {
      path: "/demo",
      element: <><Demo/><Demo2/></>,
    },


  ]

}])

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
