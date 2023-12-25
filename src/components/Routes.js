import App from "./App"
import About from "./About"
import Locations from "./Locations"

const Routes = [
    {
        path: "/",
        element: <App />
      },
    {
      path: "/home",
      element: <App />
    }, 
    {
      path: "/about",
      element: <About />
    },
    {
        path: "/locations",
        element: <Locations />
      }
  ];
  
  export default Routes;