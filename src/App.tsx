import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { About, Contact, Home, Service } from "./page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
    >
      <Route
        path=''
        element={<Home />}
      />
      <Route
        path='/contact'
        element={<Contact />}
      />
      <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/service'
        element={<Service />}
      />
    </Route>
  )
);

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-dvh'>
      <RouterProvider router={router} />
    </div>
  );
}
