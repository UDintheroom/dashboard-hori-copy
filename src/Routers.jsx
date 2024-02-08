import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Marketplace from "./views/marketplace/Marketplace";
import DataTables from "./views/datatables/DataTables";
import Profile from "./views/profile/Profile";
import Signin from "./views/signin/Signin";
import Layout, { LayoutNone } from "./components/layout/Layout";

const routeArr = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/marketplace',
    element: <Marketplace />,
  },
  {
    path: '/datatables',
    element: <DataTables />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  // {
  //   path: '/signin',
  //   element: <Signin />,
  // },
]

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/datatables" element={<DataTables />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<LayoutNone />}>
          <Route path="/signin" element={<Signin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers