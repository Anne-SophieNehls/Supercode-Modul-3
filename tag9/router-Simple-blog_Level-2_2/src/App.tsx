import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarDetail from "./pages/CarDetails";
import HomeCars from "./pages/CarsHome";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeCars />,
    },
    {
      path: "/cars/:id",
      element: <CarDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}
