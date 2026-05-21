import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout';
import Overview from './Pages/Overview/Overview';
import { AllData } from './Data/AllData';
import Pending from "./Pages/Pending/Pending";
import ReviewApplication from './Pages/ReviewApplication/ReviewApplication';
import ManageUsers from './Pages/ManageUsers/ManageUsers';
import Providers from './Pages/Providers/Providers';
import CategoryDetails from './Pages/CategoryDetails/CategoryDetails';
import ProviderProfile from './Pages/ProviderProfile/ProviderProfile';
import Finance from './Pages/Finance/Finance';
import LoginPage from './Pages/LoginPage/LoginPage';
import './tailwind.css';
import { Navigate } from 'react-router-dom';

let router = createBrowserRouter([

  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />
      },
      { path: "overview", element: <Overview /> },
      { path: "pending", element: <Pending /> },
      { path: "pending/:id", element: <ReviewApplication /> },
      { path: "users", element: <ManageUsers /> },
      { path: "providers", element: <Providers /> },
      { path: "category/:categoryType", element: <CategoryDetails /> },
      { path: "category/:categoryType/:providerId", element: <ProviderProfile /> },
      { path: "finance", element: <Finance /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AllData>
    <RouterProvider router={router} />
  </AllData>
);