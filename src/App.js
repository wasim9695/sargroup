import "./assets/admin/assets/css/nucleo-icons.css";
import "./assets/admin/assets/css/soft-ui-dashboard.css";
import "./assets/admin/assets/css/custom.css";
import "./assets/admin/assets/css/nucleo-svg.css";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import FinancialYear from './component/Display/Financial';
import CompanyName from './component/Display/CompanyName';
import UserInformation from './component/Display/UserInformation';
import ClientGroup from './component/Display/ClientGroup';
import Clients from './component/Display/Clients';
import ItemTolerance from './component/Display/ItemTolerance';
import CountryStateCity from './component/Display/CountryStateCity';
import State from './component/Display/statelist';
import City from './component/Display/citylist';
//Dashboard imp ends//
import Default from "./component/Dashboard/Default";
import Signs from "./component/sign/sign";
import ClientBoutiqueDetail from './component/Display/ClientBoutiqueDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Layout>
            <Routes>
            <Route path="/admin/dashboard" exact={true} element={<Default />} />
            
            <Route
                path="/admin/financial"
                exact={true}
                element={<FinancialYear />}
              />
               <Route
                path="/admin/company"
                exact={true}
                element={<CompanyName />}
              />
              <Route
                path="/admin/users"
                exact={true}
                element={<UserInformation />}
              />
              <Route
                path="/admin/clientsgroup"
                exact={true}
                element={<ClientGroup />}
              />

<Route
                path="/admin/clients"
                exact={true}
                element={<Clients />}
              />

<Route
                path="/admin/clientBoutique"
                exact={true}
                element={<ClientBoutiqueDetail />}
              />
              <Route
                path="/admin/ItemTolerance"
                exact={true}
                element={<ItemTolerance />}
              />

<Route
                path="/admin/CountryStateCity"
                exact={true}
                element={<CountryStateCity />}/>
                <Route
                path="/admin/statelist"
                exact={true}
                element={<State />}/>
                 <Route
                path="/admin/citylist"
                exact={true}
                element={<City />}/>

                

              <Route
                path="/"
                exact={true}
                element={<Signs />}
              />

                 </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
