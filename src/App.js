import "./assets/admin/assets/css/nucleo-icons.css";
import "./assets/admin/assets/css/soft-ui-dashboard.css";
import "./assets/admin/assets/css/custom.css";
import "./assets/admin/assets/css/nucleo-svg.css";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Dashboard from "./component/Dashboard/Dashboard";
import FinancialYear from './component/Display/Financial';
import CompanyName from './component/Display/CompanyName';
import UserInformation from './component/Display/UserInformation';
import ClientGroup from './component/Display/ClientGroup';
import Clients from './component/Display/Clients';
import ItemTolerance from './component/Display/ItemTolerance';
import CountryStateCity from './component/Display/CountryStateCity';
import Emplyee from './component/Display/emplyee';


//Dashboard imp ends//
import Default from "./component/Dashboard/Default";
import Ecommerce from "./component/Dashboard/Ecommerce";
import Orderdash from "./component/Dashboard/Orderdash";
import Commissiondash from "./component/Dashboard/Commissiondash";
import Sellerdash from "./component/Dashboard/Sellerdash";
import Analyticsdash from "./component/Dashboard/Analyticsdash";
//Dashboard imp ends//
import Invoice from "./component/Invoice/Invoice";
import Payout from "./component/Payout/Payout";
import Orderdetails from "./component/Ordermanagement/Inhouseorders/Orderdetails";
import ClientBoutiqueDetail from './component/Display/ClientBoutiqueDetail';
// User management imp starts//
import Userdetail from "./component/Usermanagement/Manageusers/Userdetail";
import Allusers from "./component/Usermanagement/Manageusers/Allusers";
import Alluserhistory from "./component/Usermanagement/Manageusers/Alluserhistory";
import Userbankdetails from "./component/Usermanagement/Manageusers/Userbankdetails";
import Orghistory from "./component/Usermanagement/Manageusers/Orghistory";
import Userpasshistory from "./component/Usermanagement/Manageusers/Userpasshistory";
import Userloginhis from "./component/Usermanagement/Manageusers/Userloginhis";
import KYC from "./component/Usermanagement/ManageKYC/KYC";
import KYChistory from "./component/Usermanagement/ManageKYC/KYChistory";
import Kycdetails from "./component/Usermanagement/ManageKYC/Kycdetails";
import Orderwiseearn from "./component/Usermanagement/Usergameearnings/Orderwiseearn";
import Totalearn from "./component/Usermanagement/Usergameearnings/Totalearn";
import Orderwisepoints from "./component/Usermanagement/Userpoints/Orderwisepoints";
import Totalpoints from "./component/Usermanagement/Userpoints/Totalpoints";
import Orderwisesearnings from "./component/Usermanagement/Usersponsor/Orderwisesearnings";
import Totalsearnings from "./component/Usermanagement/Usersponsor/Totalsearnings";
import Orderwiseproearning from "./component/Usermanagement/Userprocommission/Orderwiseproearning";
import TotalProearning from "./component/Usermanagement/Userprocommission/TotalProearning";
import Orderwiseseearnings from "./component/Usermanagement/Userspocommission/Orderwiseseearnings";
import Totalseearnings from "./component/Usermanagement/Userspocommission/Totalseearnings";
import Orderwisecashearnings from "./component/Usermanagement/Usercashback/Orderwisecashearnings";
import Totalcashearnings from "./component/Usermanagement/Usercashback/Totalcashearnings";
import Totalcommission from "./component/Usermanagement/Usercommt/Totalcommission";
import Availabalecommissions from "./component/Usermanagement/Usercommt/Availabalecommissions";
import Userteam from "./component/Usermanagement/Userteam/Userteam";
import Pending from "./component/Usermanagement/Userrewards/Pending";
import Processing from "./component/Usermanagement/Userrewards/Processing";
import Completed from "./component/Usermanagement/Userrewards/Completed";
import Rejected from "./component/Usermanagement/Userrewards/Rejected";
import Usertbonus from "./component/Usermanagement/Usernetwork/Usertbonus";
import Usernetworkbonus from "./component/Usermanagement/Usernetwork/Usernetworkbonus";
import Userdownlineearn from "./component/Usermanagement/Usernetwork/Userdownlineearn";
import Orderwiseshopamount from "./component/Usermanagement/Usershopmanage/Orderwiseshopamount";
import Totalshopamount from "./component/Usermanagement/Usershopmanage/Totalshopamount";
import Usertree from "./component/Usermanagement/Usernetwork/Usertree";
import Teambonus1 from "./component/Usermanagement/Usernetwork/Teambonus1";
// User Management imp ends//
// Manage catalog imp starts//
import Productlist from "./component/Managecatalog/Ecommercecatalog/Productlist";
import Gameproductlist from "./component/Managecatalog/Gamecatalog/Gameproductlist";
import Gamecategory from "./component/Managecatalog/Gamecatalog/Gamecategory";
import Addcate from "./component/Managecatalog/Gamecatalog/Addcate";
import Addgames from "./component/Managecatalog/Gamecatalog/Addgames";
import Addlist from "./component/Managecatalog/Gamecatalog/Addlist";
import Plans from "./component/Managecatalog/Gamecatalog/Plans";
import Addplan from "./component/Managecatalog/Gamecatalog/Addplan";
import Gameproducts from "./component/Managecatalog/Gamecatalog/Gameproducts";
import Gamebulkupload from "./component/Managecatalog/Gamecatalog/Gamebulkupload";
import Ecomcategory from "./component/Managecatalog/Ecommercecatalog/Ecomcategory";
import Addcategory from "./component/Managecatalog/Ecommercecatalog/Addcategory";
import Ecommsubcategory from "./component/Managecatalog/Ecommercecatalog/Ecommsubcategory";
import Ecomaddsub from "./component/Managecatalog/Ecommercecatalog/Ecomaddsub";
import Ecommchildcat from "./component/Managecatalog/Ecommercecatalog/Ecommchildcat";
import Addecomchild from "./component/Managecatalog/Ecommercecatalog/Addecomchild";
import Ecommbrands from "./component/Managecatalog/Ecommercecatalog/Ecommbrands";
import Addbrand from "./component/Managecatalog/Ecommercecatalog/Addbrand";
import Ecommunits from "./component/Managecatalog/Ecommercecatalog/Ecommunits";
import Addunit from "./component/Managecatalog/Ecommercecatalog/Addunit";
import Ecommproductattributes from "./component/Managecatalog/Ecommercecatalog/Ecommproductattributes";
import Addproductatt from "./component/Managecatalog/Ecommercecatalog/Addproductatt";
import Ecommgovtcode from "./component/Managecatalog/Ecommercecatalog/Ecommgovtcode";
import Addgovt from "./component/Managecatalog/Ecommercecatalog/Addgovt";
import Ecommsimpleproducts from "./component/Managecatalog/Ecommercecatalog/Ecommsimpleproducts";
import Ecommvarientproducts from "./component/Managecatalog/Ecommercecatalog/Ecommvarientproducts";
import Ecommcompanylist from "./component/Managecatalog/Ecommercecatalog/Ecommcompanylist";
import AddCompany from "./component/Managecatalog/Ecommercecatalog/AddCompany";
// Manage Catalog imp Ends//
//Marketingtools imp starts //
import Addcampaign from "./component/Marketingtools/Addcampaign";
import Addcoupon from "./component/Marketingtools/Addcoupon";
import Campaign from "./component/Marketingtools/Campaign";
import Campaignrequest from "./component/Marketingtools/Campaignrequest";
import Campaignproduct from "./component/Marketingtools/Campaignproduct";
import Coupons from "./component/Marketingtools/Coupons";
import Notifications from "./component/Marketingtools/Notifications";
import Adverisements from "./component/Marketingtools/Adverisements";
import Testimonial from "./component/Marketingtools/Testimonial";
import Addcashbackcomm from "./component/Marketingtools/Addcashbackcomm";
import Addnotofication from "./component/Marketingtools/Addnotofication";
import Addadvertisements from "./component/Marketingtools/Addadvertisements";
//Marketingtools imp Ends //
import Taxfeesettings from "./component/Taxfeesettings/Taxfeesettings";
import DtHold from "./component/Defaultpurchase/DtHold";
import DTholdhistory from "./component/Defaultpurchase/DTholdhistory";
import Dpurchasehistory from "./component/Defaultpurchase/Dpurchasehistory";
import Shoppingamount from "./component/Defaultpurchase/Shoppingamount";
import Dpurchase from "./component/Defaultpurchase/Dpurchase";
import Transferamounts from "./component/Defaultpurchase/Transferamounts";
import Addmandatory from "./component/Defaultpurchase/Addmandatory";
// Ordermanagement imp starts //
import Totalorders from "./component/Ordermanagement/Totalorders";
import Ecommerceorders from "./component/Ordermanagement/Ecommerceorders";
import Ordersrecieved from "./component/Ordermanagement/Inhouseorders/Ordersrecieved";
import Processed from "./component/Ordermanagement/Inhouseorders/Processed";
import Dispatched from "./component/Ordermanagement/Inhouseorders/Dispatched";
import Outfordelivery from "./component/Ordermanagement/Inhouseorders/Outfordelivery";
import Deliveredin from "./component/Ordermanagement/Inhouseorders/Deliveredin";
import Cancelledin from "./component/Ordermanagement/Inhouseorders/Cancelledin";
import Undelivered from "./component/Ordermanagement/Inhouseorders/Undelivered";
import Undeliveredseller from "./component/Ordermanagement/Sellerorders/Undeliveredseller";
import SellerProcessing from "./component/Ordermanagement/Sellerorders/SellerProcessing";
import Sellerdispatched from "./component/Ordermanagement/Sellerorders/Sellerdispatched";
import Sellercancelled from "./component/Ordermanagement/Sellerorders/Sellercancelled";
import Sellerdelivered from "./component/Ordermanagement/Sellerorders/Sellerdelivered";
import Selleroutdelivery from "./component/Ordermanagement/Sellerorders/Selleroutdelivery";
import Sellerorderrecieving from "./component/Ordermanagement/Sellerorders/Sellerorderrecieving";
import Refundpending from "./component/Ordermanagement/Managerefunds/Refundpending";
import Refundprocessing from "./component/Ordermanagement/Managerefunds/Refundprocessing";
import Refundcompleted from "./component/Ordermanagement/Managerefunds/Refundcompleted";
import Refundrejected from "./component/Ordermanagement/Managerefunds/Refundrejected";
import Returnpending from "./component/Ordermanagement/Managereturns/Returnpending";
import Returnprocessing from "./component/Ordermanagement/Managereturns/Returnprocessing";
import Returncompleted from "./component/Ordermanagement/Managereturns/Returncompleted";
import Returnrejected from "./component/Ordermanagement/Managereturns/Returnrejected";
// Ordermanagement imp ends //
//Sellermanagement Imp starts//
import Sellerkycdetails from "./component/Sellermanagement/KYC/Sellerkycdetails";
import Sellerdetails from "./component/Sellermanagement/Managesellers/Sellerdetails";
import Sellersubscriptions from "./component/Sellermanagement/Sellersubscriptions";
import Add from "./component/Sellermanagement/Add";
import Allsell from "./component/Sellermanagement/Managesellers/Allsell";
import Sellerhistory from "./component/Sellermanagement/Managesellers/Sellerhistory";
import Sellpasshis from "./component/Sellermanagement/Managesellers/Sellpasshis";
import Sellerloghis from "./component/Sellermanagement/Managesellers/Sellerloghis";
import Sellerkyc from "./component/Sellermanagement/KYC/Sellerkyc";
import Sellerkychistory from "./component/Sellermanagement/KYC/Sellerkychistory";
import Sellerstoreapproval from "./component/Sellermanagement/Manageapprovals/Sellerstoreapproval";
import Sellercategoryapproval from "./component/Sellermanagement/Manageapprovals/Sellercategoryapproval";
import Sellerbrandapproval from "./component/Sellermanagement/Manageapprovals/Sellerbrandapproval";
import Totalproducts from "./component/Sellermanagement/Productapprovals/Totalproducts";
import Simplepending from "./component/Sellermanagement/Productapprovals/Simpleproducts/Simplepending";
import Simpleapproved from "./component/Sellermanagement/Productapprovals/Simpleproducts/Simpleapproved";
import Simplerejected from "./component/Sellermanagement/Productapprovals/Simpleproducts/Simplerejected";
import Varientpending from "./component/Sellermanagement/Productapprovals/Variantproducts/Varientpending";
import Varientapproved from "./component/Sellermanagement/Productapprovals/Variantproducts/Varientapproved";
import Varientrejected from "./component/Sellermanagement/Productapprovals/Variantproducts/Varientrejected";
import Sellersimpleproducts from "./component/Sellermanagement/Sellersimpleproducts";
import Sellervarientproducts from "./component/Sellermanagement/Sellervarientproducts";
import Sellerstore from "./component/Sellermanagement/Sellerstore";
import Sellerorderwiseearn from "./component/Sellermanagement/Sellerearnings/Sellerorderwiseearn";
import Sellersellearnings from "./component/Sellermanagement/Sellerearnings/Sellersellearnings";
import Sellerwall from "./component/Sellermanagement/Sellerwall";
import Sellersaddsreq from "./component/Sellermanagement/Selleradds/Sellersaddsreq";
import Selleraddslist from "./component/Sellermanagement/Selleradds/Selleraddslist";
//Sellermanagement Impo ends
//Userwallet Imp Starts//
import Totaluserwallet from "./component/Userwallet/Totaluserwallet";
import Userwallethis from "./component/Userwallet/Userwallethis";
import Userfundreciev from "./component/Userwallet/Userfundreciev";
import Userfundhis from "./component/Userwallet/Userfundhis";
// Userwallet Imp Ends//
//Managewithdrawl imp starts//
import Withpending from "./component/Managewithdrawl/Userwithdrawl/Withpending";
import Withprocess from "./component/Managewithdrawl/Userwithdrawl/Withprocess";
import Withcomplete from "./component/Managewithdrawl/Userwithdrawl/Withcomplete";
import Withreject from "./component/Managewithdrawl/Userwithdrawl/Withreject";
import Sellpendingwith from "./component/Managewithdrawl/Sellerwithdrawl/Sellpendingwith";
import Sellprocesswith from "./component/Managewithdrawl/Sellerwithdrawl/Sellprocesswith";
import Sellcompletewith from "./component/Managewithdrawl/Sellerwithdrawl/Sellcompletewith";
import Sellrejectwith from "./component/Managewithdrawl/Sellerwithdrawl/Sellrejectwith";
//Managewithdrawl imp ends//
//productreview Imp Starts//
import Productreview from "./component/Productreview/Productreview";
import Inhouseuserchat from "./component/Productreview/Productchats/Inhouseuserchat";
import Selleruserchat from "./component/Productreview/Productchats/Selleruserchat";
import Chats from "./component/Chats/Chats";
//productreview Imp Ends//
//Supporttickets Imp Starts//
import Ticketcategory from "./component/Supporttickets/Ticketcategory";
import Addticketcategory from "./component/Supporttickets/Addticketcategory";
import Usertickets from "./component/Supporttickets/Usertickets";
import Sellertickets from "./component/Supporttickets/Sellertickets";
//Supporttickets Imp Ends//
//Reports Imp starts//
import GSTreports from "./component/Reports/GSTreports";
import Transactionfeereports from "./component/Reports/Transactionfeereports";
import Userpayoutreports from "./component/Reports/Userpayoutreports";
import Sellerpayoutreports from "./component/Reports/Sellerpayoutreports";
import Adminfeereports from "./component/Reports/Adminfeereports";
import TDSReports from "./component/Reports/TDSReports";
import Companycomreports from "./component/Reports/Companycomreports";
import Sellerearnreports from "./component/Reports/Sellerearnreports";
import Companyrevenuereports from "./component/Reports/Companyrevenuereports";
import Gamememrevenue from "./component/Reports/Gamememrevenue";
import Inhouseearnreports from "./component/Reports/Inhouseearnreports";
import Ticketreports from "./component/Reports/Ticketreports";
import Sellersales from "./component/Reports/Sellersales";
import Inhousesales from "./component/Reports/Inhousesales";
import Companyproductsales from "./component/Reports/Companyproductsales";
import Orderdeliverystatus from "./component/Reports/Orderdeliverystatus";
import Taxrevenuestatus from "./component/Reports/Taxrevenuestatus";
import Creditdebitstatus from "./component/Reports/Creditdebitstatus";
import Deal from "./component/Reports/Deal";
import Coupon from "./component/Reports/Coupon";
import Companysales from "./component/Reports/Companysales";
//Reports Imp Ends//
import Timeframe from "./component/Timeframereports/Timeframe";
//Credit or Debit imp starts//
import Addsubmoneyuser from "./component/Creditordebit/Addsubmoneyuser";
import Addsubmoneyseller from "./component/Creditordebit/Addsubmoneyseller";
import Addsubpointsuser from "./component/Creditordebit/Addsubpointsuser";
import Addsubofrewardsuser from "./component/Creditordebit/Addsubofrewardsuser";
import Addmoneyuser from "./component/Creditordebit/Addmoneyuser";
import Addmoneyseller from "./component/Creditordebit/Addmoneyseller";
import Addpointuse from "./component/Creditordebit/Addpointuse";
import Addreward from "./component/Creditordebit/Addreward";
//Credit or Debit Route ends//
//Enable or Disable imp starts//
import EordUser from "./component/Enable or Disbale/EordUser";
import EordSeller from "./component/Enable or Disbale/EordSeller";
//Enable or Disable imp Ends//
//Managestaff IMP Starts//
import Managerolespermission from "./component/Managestaff/Managerolespermission";
import Rolesandpermissions from "./component/Managestaff/Rolesandpermissions";
import Stafflist from "./component/Managestaff/Stafflist";
import Staffroles from "./component/Managestaff/Staffroles";
import Addstaff from "./component/Managestaff/Addstaff";
import Departments from "./component/Managestaff/Departments/Departments";
import Adddepartment from "./component/Managestaff/Departments/Adddepartment";
//Managestaff Imp Ends//
// Email Imp Starts//
import Sendemails from "./component/Email/Sendemails";
import Maillist from "./component/Email/Maillist";
import Emailsettings from "./component/Email/Emailsettings";
import Emailtemplate from "./component/Email/Emailtemplate";
import Addtemplate from "./component/Email/Addtemplate";
// Email Imp Ends//
//Blog Imp Starts//
import Categoryblog from "./component/Blog/Categoryblog";
import Post from "./component/Blog/Post";
import Addarticle from "./component/Blog/Addarticle";
import Author from "./component/Blog/Author";
import Addcatblog from "./component/Blog/Addcatblog";
import Addauthor from "./component/Blog/Addauthor";
//Blog Imp Ends//
//General settings Imp Starts//
import Managecountries from "./component/Generalsettings/Managecountries";
import Managelanguage from "./component/Generalsettings/Managelanguage";
import Managecurrency from "./component/Generalsettings/Managecurrency";
import Feauturesactivation from "./component/Generalsettings/Feauturesactivation";
import Databasebackup from "./component/Generalsettings/Databasebackup";
import Clearcache from "./component/Generalsettings/Clearcache";
import Googleanalytics from "./component/Generalsettings/Googleanalytics";
import Addcountries from "./component/Generalsettings/Addcountries";
import Addcurrency from "./component/Generalsettings/Addcurrency";
import Addlanguage from "./component/Generalsettings/Addlanguage";
import Keywords from "./component/Generalsettings/Keywords";
import Addkeyword from "./component/Generalsettings/Addkeyword";
//General Settings Imp ends//
//CMS Imp Starts//
import Followus from "./component/CMS/Aboutus/Followus";
import Websitesettings from "./component/CMS/Websitesettings";
import Corporateinfo from "./component/CMS/Aboutus/Corporateinfo";
import Ourleadership from "./component/CMS/Aboutus/Ourleadership";
import Workwithus from "./component/CMS/Aboutus/Workwithus";
import Career from "./component/CMS/Aboutus/Career";
import Pressrelease from "./component/CMS/Aboutus/Pressrelease";
import Latestupdates from "./component/CMS/Aboutus/Latestupdates";
import CSRsustainability from "./component/CMS/Aboutus/CSRsustainability";
import Politicalengagement from "./component/CMS/Aboutus/Politicalengagement";
import Ethics from "./component/CMS/Aboutus/Ethics";
import Sellonsalar from "./component/CMS/Makemoneywithus/Sellonsalar";
import Listyourproducts from "./component/CMS/Makemoneywithus/Listyourproducts";
import Sellglobal from "./component/CMS/Makemoneywithus/Sellglobal";
import Feesandpricing from "./component/CMS/Makemoneywithus/Feesandpricing";
import FAQ from "./component/CMS/Makemoneywithus/FAQ";
import Addfaq from "./component/CMS/Makemoneywithus/Addfaq";

import Commissionssalar from "./component/CMS/Salarbenifits/Commissionssalar";
import Helpandsupport from "./component/CMS/Helpandsupport";
import Termsandconditionsuser from "./component/CMS/Termsandconditionsuser";
import Termsandconditionsseller from "./component/CMS/Termsandconditionsseller";
import Websiteprivacy from "./component/CMS/Websiteprivacy";
import Addpages from "./component/CMS/Addpages";
import Testimonials from "./component/CMS/Salarbenifits/Testimonials";
//Networksetting Imp Starts//
import Teambonuslevel from "./component/Usernetworking/Teambonuslevel";
import Teambonusset from "./component/Usernetworking/Teambonusset";
import Teamproductsales from "./component/Usernetworking/Teamproductsales/Teamproductsales";
import Userteamproductsales from "./component/Usernetworking/Teamproductsales/Userteamproductsales";
import Userteambonussubscrip from "./component/Usernetworking/Userteambonussubscrip";
import Addteambonuslevel from "./component/Usernetworking/Addteambonuslevel";
import Addteamsubscription from "./component/Usernetworking/Addteamsubscription";
//Networksetting Imp Ends//
import Gametree from "./component/Usermanagement/Usergameearnings/Gametree";
import Leveltab from "./component/Usermanagement/Usergameearnings/Leveltab";
import Simple from "./component/Managecatalog/Ecommercecatalog/Simple";
import Varient from "./component/Managecatalog/Ecommercecatalog/Varient";
import Productpublish from "./component/Sellermanagement/Productpublish";
import Teamproductlist from "./component/Usernetworking/Teamproductlist";
import Ordertrack from "./component/Ordertrack/Ordertrack";
import Userpdf from "./component/PDF/Userpdf";
import Sellerpdf from "./component/PDF/Sellerpdf";
import Positions from "./component/Marketingtools/Positions";
import Adpositions from "./component/Marketingtools/Adpositions";
import Addreqtable from "./component/Marketingtools/Addreqtable";
import Signs from "./component/sign/sign";
//CMS Imp Ends//
import Layout from "./layout";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Layout>
            <Routes>
            
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
                path="/admin/Addreqtable"
                exact={true}
                element={<Addreqtable />}
              />
              <Route
                path="/"
                exact={true}
                element={<Signs />}
              />


              <Route
                path="/admin/Adpositions"
                exact={true}
                element={<Adpositions />}
              />
              <Route
                path="/admin/Positions"
                exact={true}
                element={<Positions />}
              />
              <Route
                path="/admin/Userpdf"
                exact={true}
                element={<Userpdf />}
              />
              <Route
                path="/admin/Sellerpdf"
                exact={true}
                element={<Sellerpdf />}
              />
              <Route
                path="/admin/Teamproductlist"
                exact={true}
                element={<Teamproductlist />}
              />
              <Route
                path="/admin/Productpublish"
                exact={true}
                element={<Productpublish />}
              />
              <Route path="/admin/Ordertrack" exact={true} element={<Ordertrack />} />
              <Route path="/admin/Varient" exact={true} element={<Varient />} />
              <Route path="/admin/Simple" exact={true} element={<Simple />} />
              <Route
                path="/admin/Leveltab"
                exact={true}
                element={<Leveltab />}
              />
              <Route
                path="/admin/Gametree"
                exact={true}
                element={<Gametree />}
              />
              <Route
                path="/admin/DtHold"
                exact={true}
                element={<DtHold />}
              />
              <Route
                path="/admin/DTholdhistory"
                exact={true}
                element={<DTholdhistory />}
              />
              <Route
                path="/admin/Dpurchasehistory"
                exact={true}
                element={<Dpurchasehistory />}
              />
              <Route
                path="/admin/Shoppingamount"
                exact={true}
                element={<Shoppingamount />}
              />
              <Route
                path="/admin/Dpurchase"
                exact={true}
                element={<Dpurchase />}
              />
              <Route
                path="/admin/Transferamounts"
                exact={true}
                element={<Transferamounts />}
              />
              <Route
                path="/admin/Addmandatory"
                exact={true}
                element={<Addmandatory />}
              />

              <Route path="/admin/Invoice" exact={true} element={<Invoice />} />
              <Route path="/admin/Payout" exact={true} element={<Payout />} />
              <Route
                path="/admin/Orderdetails"
                exact={true}
                element={<Orderdetails />}
              />
              {/* <Route
                path="/admin/dashboard"
                exact={true}
                element={<Dashboard />}
              /> */}
              <Route path="/admin/dashboard" exact={true} element={<Default />} />
              <Route
                path="/admin/Ecommerce"
                exact={true}
                element={<Ecommerce />}
              />
              <Route
                path="/admin/Orderdash"
                exact={true}
                element={<Orderdash />}
              />
              <Route
                path="/admin/Commissiondash"
                exact={true}
                element={<Commissiondash />}
              />
              <Route
                path="/admin/Sellerdash"
                exact={true}
                element={<Sellerdash />}
              />
              <Route
                path="/admin/Analyticsdash"
                exact={true}
                element={<Analyticsdash />}
              />

              {/* Netwrok Setting route Starts */}
              <Route
                path="/admin/Teambonuslevel"
                exact={true}
                element={<Teambonuslevel />}
              />
              <Route
                path="/admin/Teambonusset"
                exact={true}
                element={<Teambonusset />}
              />
              <Route
                path="/admin/Teamproductsales"
                exact={true}
                element={<Teamproductsales />}
              />
              <Route
                path="/admin/Userteamproductsales"
                exact={true}
                element={<Userteamproductsales />}
              />
              <Route
                path="/admin/Teambonus1"
                exact={true}
                element={<Teambonus1 />}
              />
              <Route
                path="/admin/Usertree"
                exact={true}
                element={<Usertree />}
              />
              <Route
                path="/admin/Userteambonussubscrip"
                exact={true}
                element={<Userteambonussubscrip />}
              />
              <Route
                path="/admin/Addteambonuslevel"
                exact={true}
                element={<Addteambonuslevel />}
              />
              <Route
                path="/admin/Addteamsubscription"
                exact={true}
                element={<Addteamsubscription />}
              />
              {/* Network Setting route Ends*/}
              {/* User mangement route start */}
              <Route
                path="/admin/Usertbonus"
                exact={true}
                element={<Usertbonus />}
              />
              <Route
                path="/admin/Usernetworkbonus"
                exact={true}
                element={<Usernetworkbonus />}
              />
              <Route
                path="/admin/Userdownlineearn"
                exact={true}
                element={<Userdownlineearn />}
              />
              <Route
                path="/admin/Userdetail"
                exact={true}
                element={<Userdetail />}
              />
              <Route
                path="/admin/Allusers"
                exact={true}
                element={<Allusers />}
              />
              <Route
                path="/admin/Alluserhistory"
                exact={true}
                element={<Alluserhistory />}
              />
              <Route
                path="/admin/Userbankdetails"
                exact={true}
                element={<Userbankdetails />}
              />
              <Route
                path="/admin/Orghistory"
                exact={true}
                element={<Orghistory />}
              />
              <Route
                path="/admin/Userpasshistory"
                exact={true}
                element={<Userpasshistory />}
              />
              <Route
                path="/admin/Userloginhis"
                exact={true}
                element={<Userloginhis />}
              />
              <Route path="/admin/KYC" exact={true} element={<KYC />} />
              <Route
                path="/admin/Kycdetails"
                exact={true}
                element={<Kycdetails />}
              />

              <Route
                path="/admin/KYChistory"
                exact={true}
                element={<KYChistory />}
              />
              <Route
                path="/admin/Orderwiseearn"
                exact={true}
                element={<Orderwiseearn />}
              />
              <Route
                path="/admin/Totalearn"
                exact={true}
                element={<Totalearn />}
              />
              <Route
                path="/admin/Orderwisepoints"
                exact={true}
                element={<Orderwisepoints />}
              />
              <Route
                path="/admin/Totalpoints"
                exact={true}
                element={<Totalpoints />}
                h
                p
              />
              <Route
                path="/admin/Orderwisesearnings"
                exact={true}
                element={<Orderwisesearnings />}
              />
              <Route
                path="/admin/Totalsearnings"
                exact={true}
                element={<Totalsearnings />}
              />
              <Route
                path="/admin/Orderwiseproearning"
                exact={true}
                element={<Orderwiseproearning />}
              />
              <Route
                path="/admin/TotalProearning"
                exact={true}
                element={<TotalProearning />}
              />
              <Route
                path="/admin/Orderwiseseearnings"
                exact={true}
                element={<Orderwiseseearnings />}
              />
              <Route
                path="/admin/Totalseearnings"
                exact={true}
                element={<Totalseearnings />}
              />
              <Route
                path="/admin/Orderwisecashearnings"
                exact={true}
                element={<Orderwisecashearnings />}
              />
              <Route
                path="/admin/Totalcashearnings"
                exact={true}
                element={<Totalcashearnings />}
              />
              <Route
                path="/admin/Orderwiseshopamount"
                exact={true}
                element={<Orderwiseshopamount />}
              />
              <Route
                path="/admin/Totalshopamount"
                exact={true}
                element={<Totalshopamount />}
              />
              <Route
                path="/admin/Teambonuslevel"
                exact={true}
                element={<Teambonuslevel />}
              />
              <Route
                path="/admin/Totalcommission"
                exact={true}
                element={<Totalcommission />}
              />
              <Route
                path="/admin/Availabalecommissions"
                exact={true}
                element={<Availabalecommissions />}
              />
              <Route
                path="/admin/Userteam"
                exact={true}
                element={<Userteam />}
              />
              <Route path="/admin/Pending" exact={true} element={<Pending />} />
              <Route
                path="/admin/Processing"
                exact={true}
                element={<Processing />}
              />
              <Route
                path="/admin/Completed"
                exact={true}
                element={<Completed />}
              />
              <Route
                path="/admin/Rejected"
                exact={true}
                element={<Rejected />}
              />
              {/* User Management Route ends */}

              {/* Manage Catalog Route starts */}
              <Route
                path="/admin/Productlist"
                exact={true}
                element={<Productlist />}
              />
              <Route
                path="/admin/Gameproductlist"
                exact={true}
                element={<Gameproductlist />}
              />
              <Route
                path="/admin/Gamecategory"
                exact={true}
                element={<Gamecategory />}
              />
              <Route path="/admin/Addcate" exact={true} element={<Addcate />} />
              <Route
                path="/admin/Addgames"
                exact={true}
                element={<Addgames />}
              />
              <Route path="/admin/Addlist" exact={true} element={<Addlist />} />
              <Route path="/admin/Plans" exact={true} element={<Plans />} />
              <Route path="/admin/Addplan" exact={true} element={<Addplan />} />
              <Route
                path="/admin/Gameproducts"
                exact={true}
                element={<Gameproducts />}
              />
              <Route
                path="/admin/Gamebulkupload"
                exact={true}
                element={<Gamebulkupload />}
              />
              <Route
                path="/admin/Ecomcategory"
                exact={true}
                element={<Ecomcategory />}
              />
              <Route
                path="/admin/Addcategory"
                exact={true}
                element={<Addcategory />}
              />
              <Route
                path="/admin/Ecommsubcategory"
                exact={true}
                element={<Ecommsubcategory />}
              />
              <Route
                path="/admin/Ecomaddsub"
                exact={true}
                element={<Ecomaddsub />}
              />

              <Route
                path="/admin/Ecommchildcat"
                exact={true}
                element={<Ecommchildcat />}
              />
              <Route
                path="/admin/Addecomchild"
                exact={true}
                element={<Addecomchild />}
              />
              <Route
                path="/admin/Ecommbrands"
                exact={true}
                element={<Ecommbrands />}
              />
              <Route
                path="/admin/Addbrand"
                exact={true}
                element={<Addbrand />}
              />
              <Route
                path="/admin/Ecommunits"
                exact={true}
                element={<Ecommunits />}
              />
              <Route path="/admin/Addunit" exact={true} element={<Addunit />} />
              <Route
                path="/admin/Ecommproductattributes"
                exact={true}
                element={<Ecommproductattributes />}
              />
              <Route
                path="/admin/Addproductatt"
                exact={true}
                element={<Addproductatt />}
              />
              <Route
                path="/admin/Ecommgovtcode"
                exact={true}
                element={<Ecommgovtcode />}
              />
              <Route path="/admin/Addgovt" exact={true} element={<Addgovt />} />
              <Route
                path="/admin/Ecommsimpleproducts"
                exact={true}
                element={<Ecommsimpleproducts />}
              />
              <Route
                path="/admin/Ecommvarientproducts"
                exact={true}
                element={<Ecommvarientproducts />}
              />
              <Route
                path="/admin/Ecommcompanylist"
                exact={true}
                element={<Ecommcompanylist />}
              />
              <Route
                path="/admin/AddCompany"
                exact={true}
                element={<AddCompany />}
              />
              <Route
                path="/admin/CountryStateCity"
                exact={true}
                element={<CountryStateCity />}
              />

              {/* Manage Catalog Route Ends */}

              {/* Marketingtools routes starts */}
              <Route
                path="/admin/Addcampaign"
                exact={true}
                element={<Addcampaign />}
              />
              <Route
                path="/admin/Campaignrequest"
                exact={true}
                element={<Campaignrequest />}
              />
              <Route
                path="/admin/Campaignproduct"
                exact={true}
                element={<Campaignproduct />}
              />
              <Route path="/admin/Campaign" exact={true} element={<Campaign />} />
              <Route path="/admin/Coupons" exact={true} element={<Coupons />} />
              <Route
                path="/admin/Addcoupon"
                exact={true}
                element={<Addcoupon />}
              />
              <Route
                path="/admin/Addnotofication"
                exact={true}
                element={<Addnotofication />}
              />
              <Route
                path="/admin/Addadvertisements"
                exact={true}
                element={<Addadvertisements />}
              />

              <Route
                path="/admin/Notifications"
                exact={true}
                element={<Notifications />}
              />
              <Route
                path="/admin/Adverisements"
                exact={true}
                element={<Adverisements />}
              />
              <Route
                path="/admin/Testimonial"
                exact={true}
                element={<Testimonial />}
              />
              <Route
                path="/admin/Addcashbackcomm"
                exact={true}
                element={<Addcashbackcomm />}
              />
              {/* Marketingtooks routes ends */}
              <Route
                path="/admin/Taxfeesettings"
                exact={true}
                element={<Taxfeesettings />}
              />

              {/* Order Management Routes starts */}
              <Route
                path="/admin/Totalorders"
                exact={true}
                element={<Totalorders />}
              />
              <Route
                path="/admin/Ecommerceorders"
                exact={true}
                element={<Ecommerceorders />}
              />
              <Route
                path="/admin/Ordersrecieved"
                exact={true}
                element={<Ordersrecieved />}
              />
              <Route
                path="/admin/Processed"
                exact={true}
                element={<Processed />}
              />
              <Route
                path="/admin/Dispatched"
                exact={true}
                element={<Dispatched />}
              />
              <Route
                path="/admin/Outfordelivery"
                exact={true}
                element={<Outfordelivery />}
              />
              <Route
                path="/admin/Deliveredin"
                exact={true}
                element={<Deliveredin />}
              />
              <Route
                path="/admin/Cancelledin"
                exact={true}
                element={<Cancelledin />}
              />
              <Route
                path="/admin/Undeliveredseller"
                exact={true}
                element={<Undeliveredseller />}
              />
              <Route
                path="/admin/Undelivered"
                exact={true}
                element={<Undelivered />}
              />
              <Route
                path="/admin/Sellerorderrecieving"
                exact={true}
                element={<Sellerorderrecieving />}
              />
              <Route
                path="/admin/SellerProcessing"
                exact={true}
                element={<SellerProcessing />}
              />
              <Route
                path="/admin/Sellerdispatched"
                exact={true}
                element={<Sellerdispatched />}
              />
              <Route
                path="/admin/Selleroutdelivery"
                exact={true}
                element={<Selleroutdelivery />}
              />
              <Route
                path="/admin/Sellerdelivered"
                exact={true}
                element={<Sellerdelivered />}
              />
              <Route
                path="/admin/Sellercancelled"
                exact={true}
                element={<Sellercancelled />}
              />
              <Route
                path="/admin/Refundpending"
                exact={true}
                element={<Refundpending />}
              />
              <Route
                path="/admin/Refundprocessing"
                exact={true}
                element={<Refundprocessing />}
              />
              <Route
                path="/admin/Refundcompleted"
                exact={true}
                element={<Refundcompleted />}
              />
              <Route
                path="/admin/Refundrejected"
                exact={true}
                element={<Refundrejected />}
              />
              <Route
                path="/admin/Returnpending"
                exact={true}
                element={<Returnpending />}
              />
              <Route
                path="/admin/Returnprocessing"
                exact={true}
                element={<Returnprocessing />}
              />
              <Route
                path="/admin/Returncompleted"
                exact={true}
                element={<Returncompleted />}
              />
              <Route
                path="/admin/Returnrejected"
                exact={true}
                element={<Returnrejected />}
              />
              {/* Order Management Routes Ends */}

              {/* Seller Management Routes starts */}
              <Route
                path="/admin/Sellerkycdetails"
                exact={true}
                element={<Sellerkycdetails />}
              />
              <Route
                path="/admin/Sellerdetails"
                exact={true}
                element={<Sellerdetails />}
              />
              <Route
                path="/admin/Sellersubscriptions"
                exact={true}
                element={<Sellersubscriptions />}
              />
              <Route path="/admin/Add" exact={true} element={<Add />} />
              <Route path="/admin/Allsell" exact={true} element={<Allsell />} />
              <Route
                path="/admin/Sellerhistory"
                exact={true}
                element={<Sellerhistory />}
              />
              <Route
                path="/admin/Sellpasshis"
                exact={true}
                element={<Sellpasshis />}
              />
              <Route
                path="/admin/Sellerloghis"
                exact={true}
                element={<Sellerloghis />}
              />
              <Route
                path="/admin/Sellerkyc"
                exact={true}
                element={<Sellerkyc />}
              />
              <Route
                path="/admin/Sellerkychistory"
                exact={true}
                element={<Sellerkychistory />}
              />
              <Route
                path="/admin/Sellerstoreapproval"
                exact={true}
                element={<Sellerstoreapproval />}
              />
              <Route
                path="/admin/Sellercategoryapproval"
                exact={true}
                element={<Sellercategoryapproval />}
              />
              <Route
                path="/admin/Sellerbrandapproval"
                exact={true}
                element={<Sellerbrandapproval />}
              />
              <Route
                path="/admin/Totalproducts"
                exact={true}
                element={<Totalproducts />}
              />
              <Route
                path="/admin/Simplepending"
                exact={true}
                element={<Simplepending />}
              />
              <Route
                path="/admin/Simpleapproved"
                exact={true}
                element={<Simpleapproved />}
              />
              <Route
                path="/admin/Simplerejected"
                exact={true}
                element={<Simplerejected />}
              />
              <Route
                path="/admin/Varientpending"
                exact={true}
                element={<Varientpending />}
              />
              <Route
                path="/admin/Varientapproved"
                exact={true}
                element={<Varientapproved />}
              />
              <Route
                path="/admin/Varientrejected"
                exact={true}
                element={<Varientrejected />}
              />
              <Route
                path="/admin/Sellersimpleproducts"
                exact={true}
                element={<Sellersimpleproducts />}
              />
              <Route
                path="/admin/Sellervarientproducts"
                exact={true}
                element={<Sellervarientproducts />}
              />
              <Route
                path="/admin/Sellerstore"
                exact={true}
                element={<Sellerstore />}
              />
              <Route
                path="/admin/Sellerorderwiseearn"
                exact={true}
                element={<Sellerorderwiseearn />}
              />
              <Route
                path="/admin/Sellersellearnings"
                exact={true}
                element={<Sellersellearnings />}
              />
              <Route
                path="/admin/Sellerwall"
                exact={true}
                element={<Sellerwall />}
              />
              <Route
                path="/admin/Sellersaddsreq"
                exact={true}
                element={<Sellersaddsreq />}
              />
              <Route
                path="/admin/Selleraddslist"
                exact={true}
                element={<Selleraddslist />}
              />
              {/* Seller Management Routes Ends */}

              {/* Userwallet Imp Starts */}
              <Route
                path="/admin/Totaluserwallet"
                exact={true}
                element={<Totaluserwallet />}
              />
              <Route
                path="/admin/Userwallethis"
                exact={true}
                element={<Userwallethis />}
              />
              <Route
                path="/admin/Userfundreciev"
                exact={true}
                element={<Userfundreciev />}
              />
              <Route
                path="/admin/Userfundhis"
                exact={true}
                element={<Userfundhis />}
              />
              {/* Userwallet Imp Ends */}
              {/* Manage Withdrawl Routes Starts */}
              <Route
                path="/admin/Withpending"
                exact={true}
                element={<Withpending />}
              />
              <Route
                path="/admin/Withprocess"
                exact={true}
                element={<Withprocess />}
              />
              <Route
                path="/admin/Withcomplete"
                exact={true}
                element={<Withcomplete />}
              />
              <Route
                path="/admin/Withreject"
                exact={true}
                element={<Withreject />}
              />
              <Route
                path="/admin/Sellpendingwith"
                exact={true}
                element={<Sellpendingwith />}
              />
              <Route
                path="/admin/Sellprocesswith"
                exact={true}
                element={<Sellprocesswith />}
              />
              <Route
                path="/admin/Sellcompletewith"
                exact={true}
                element={<Sellcompletewith />}
              />
              <Route
                path="/admin/Sellrejectwith"
                exact={true}
                element={<Sellrejectwith />}
              />
              {/* Manage Withdrawl Routes Ends */}
              {/* Productreview Route starts */}
              <Route
                path="/admin/Productreview"
                exact={true}
                element={<Productreview />}
              />
              <Route
                path="/admin/Inhouseuserchat"
                exact={true}
                element={<Inhouseuserchat />}
              />
              <Route
                path="/admin/Selleruserchat"
                exact={true}
                element={<Selleruserchat />}
              />
              <Route path="/admin/Chats" exact={true} element={<Chats />} />
              {/* Productreview Route */}
              {/* Supporttickets Imp Starts */}
              <Route
                path="/admin/Addticketcategory"
                exact={true}
                element={<Addticketcategory />}
              />
              <Route
                path="/admin/Ticketcategory"
                exact={true}
                element={<Ticketcategory />}
              />
              <Route
                path="/admin/Usertickets"
                exact={true}
                element={<Usertickets />}
              />
              <Route
                path="/admin/Sellertickets"
                exact={true}
                element={<Sellertickets />}
              />
              {/* Supporttickets Imp Ends */}
              {/* Reports Routes starts */}
              <Route
                path="/admin/Sellersales"
                exact={true}
                element={<Sellersales />}
              />
              <Route
                path="/admin/Inhousesales"
                exact={true}
                element={<Inhousesales />}
              />
              <Route
                path="/admin/Companyproductsales"
                exact={true}
                element={<Companyproductsales />}
              />
              <Route
                path="/admin/Taxrevenuestatus"
                exact={true}
                element={<Taxrevenuestatus />}
              />
              <Route
                path="/admin/Creditdebitstatus"
                exact={true}
                element={<Creditdebitstatus />}
              />
              <Route path="/admin/Deal" exact={true} element={<Deal />} />
              <Route path="/admin/Coupon" exact={true} element={<Coupon />} />
              <Route
                path="/admin/Companysales"
                exact={true}
                element={<Companysales />}
              />
              <Route
                path="/admin/employeeList"
                exact={true}
                element={<Emplyee />}
              />


              <Route
                path="/admin/Orderdeliverystatus"
                exact={true}
                element={<Orderdeliverystatus />}
              />
              <Route
                path="/admin/GSTreports"
                exact={true}
                element={<GSTreports />}
              />
              <Route
                path="/admin/Transactionfeereports"
                exact={true}
                element={<Transactionfeereports />}
              />
              <Route
                path="/admin/Userpayoutreports"
                exact={true}
                element={<Userpayoutreports />}
              />
              <Route
                path="/admin/Sellerpayoutreports"
                exact={true}
                element={<Sellerpayoutreports />}
              />
              <Route
                path="/admin/Adminfeereports"
                exact={true}
                element={<Adminfeereports />}
              />
              <Route
                path="/admin/TDSReports"
                exact={true}
                element={<TDSReports />}
              />
              <Route
                path="/admin/Companycomreports"
                exact={true}
                element={<Companycomreports />}
              />

              <Route
                path="/admin/Sellerearnreports"
                exact={true}
                element={<Sellerearnreports />}
              />
              <Route
                path="/admin/Companyrevenuereports"
                exact={true}
                element={<Companyrevenuereports />}
              />
              <Route
                path="/admin/Gamememrevenue"
                exact={true}
                element={<Gamememrevenue />}
              />
              <Route
                path="/admin/Inhouseearnreports"
                exact={true}
                element={<Inhouseearnreports />}
              />
              <Route
                path="/admin/Ticketreports"
                exact={true}
                element={<Ticketreports />}
              />
              {/* Reports Routes Ends */}
              <Route
                path="/admin/Timeframe"
                exact={true}
                element={<Timeframe />}
              />
              {/* Credit or Debit Route starts */}
              <Route
                path="/admin/Addmoneyuser"
                exact={true}
                element={<Addmoneyuser />}
              />
              <Route
                path="/admin/Addmoneyseller"
                exact={true}
                element={<Addmoneyseller />}
              />
              <Route
                path="/admin/Addpointuse"
                exact={true}
                element={<Addpointuse />}
              />
              <Route
                path="/admin/Addreward"
                exact={true}
                element={<Addreward />}
              />
              <Route
                path="/admin/Addsubmoneyuser"
                exact={true}
                element={<Addsubmoneyuser />}
              />
              <Route
                path="/admin/Addsubmoneyseller"
                exact={true}
                element={<Addsubmoneyseller />}
              />
              <Route
                path="/admin/Addsubpointsuser"
                exact={true}
                element={<Addsubpointsuser />}
              />
              <Route
                path="/admin/Addsubofrewardsuser"
                exact={true}
                element={<Addsubofrewardsuser />}
              />
              {/* Credit or Debit Route Ends */}

              {/* Enable or disable Routes Starts */}
              <Route
                path="/admin/EordUser"
                exact={true}
                element={<EordUser />}
              />
              <Route
                path="/admin/EordSeller"
                exact={true}
                element={<EordSeller />}
              />
              {/* Enable or disable Routes Ends */}
              {/* Email Routes Starts */}
              <Route
                path="/admin/Sendemails"
                exact={true}
                element={<Sendemails />}
              />
              <Route
                path="/admin/Maillist"
                exact={true}
                element={<Maillist />}
              />
              <Route
                path="/admin/Emailsettings"
                exact={true}
                element={<Emailsettings />}
              />
              <Route
                path="/admin/Emailtemplate"
                exact={true}
                element={<Emailtemplate />}
              />
              <Route
                path="/admin/Addtemplate"
                exact={true}
                element={<Addtemplate />}
              />
              {/* Email Routes ends */}

              {/* Managestaff Routes starts */}
              <Route
                path="/admin/Managerolespermission"
                exact={true}
                element={<Managerolespermission />}
              />
              <Route
                path="/admin/Rolesandpermissions"
                exact={true}
                element={<Rolesandpermissions />}
              />
              <Route
                path="/admin/Adddepartment"
                exact={true}
                element={<Adddepartment />}
              />
              <Route
                path="/admin/Departments"
                exact={true}
                element={<Departments />}
              />
              <Route
                path="/admin/Stafflist"
                exact={true}
                element={<Stafflist />}
              />
              <Route
                path="/admin/Staffroles"
                exact={true}
                element={<Staffroles />}
              />
              <Route
                path="/admin/Addstaff"
                exact={true}
                element={<Addstaff />}
              />
              {/* Managestaff Routes Ends */}
              {/* Blog Route starts */}
              <Route
                path="/admin/Categoryblog"
                exact={true}
                element={<Categoryblog />}
              />
              <Route path="/admin/Post" exact={true} element={<Post />} />
              <Route
                path="/admin/Addauthor"
                exact={true}
                element={<Addauthor />}
              />
              <Route
                path="/admin/Addarticle"
                exact={true}
                element={<Addarticle />}
              />
              <Route path="/admin/Author" exact={true} element={<Author />} />
              <Route
                path="/admin/Addcatblog"
                exact={true}
                element={<Addcatblog />}
              />

              {/* Blog Route Ends */}
              {/* GeneralSetting Routes Starts */}
              <Route
                path="/admin/Addkeyword"
                exact={true}
                element={<Addkeyword />}
              />
              <Route
                path="/admin/Keywords"
                exact={true}
                element={<Keywords />}
              />
              <Route
                path="/admin/Addlanguage"
                exact={true}
                element={<Addlanguage />}
              />
              <Route
                path="/admin/Addcurrency"
                exact={true}
                element={<Addcurrency />}
              />
              <Route
                path="/admin/Addcountries"
                exact={true}
                element={<Addcountries />}
              />
              <Route
                path="/admin/Managecountries"
                exact={true}
                element={<Managecountries />}
              />
              <Route
                path="/admin/Managelanguage"
                exact={true}
                element={<Managelanguage />}
              />
              <Route
                path="/admin/Managecurrency"
                exact={true}
                element={<Managecurrency />}
              />
              <Route
                path="/admin/Feauturesactivation"
                exact={true}
                element={<Feauturesactivation />}
              />
              <Route
                path="/admin/Databasebackup"
                exact={true}
                element={<Databasebackup />}
              />
              <Route
                path="/admin/Clearcache"
                exact={true}
                element={<Clearcache />}
              />
              <Route
                path="/admin/Googleanalytics"
                exact={true}
                element={<Googleanalytics />}
              />
              {/* GeneralSetting Routes Ends */}
              {/* CMS Routes Starts */}
              <Route
                path="/admin/Followus"
                exact={true}
                element={<Followus />}
              />
              <Route
                path="/admin/Websitesettings"
                exact={true}
                element={<Websitesettings />}
              />
              <Route
                path="/admin/Corporateinfo"
                exact={true}
                element={<Corporateinfo />}
              />
              <Route
                path="/admin/Ourleadership"
                exact={true}
                element={<Ourleadership />}
              />
              <Route
                path="/admin/Workwithus"
                exact={true}
                element={<Workwithus />}
              />
              <Route path="/admin/Career" exact={true} element={<Career />} />
              <Route
                path="/admin/Pressrelease"
                exact={true}
                element={<Pressrelease />}
              />
              <Route
                path="/admin/Latestupdates"
                exact={true}
                element={<Latestupdates />}
              />
              <Route
                path="/admin/CSRsustainability"
                exact={true}
                element={<CSRsustainability />}
              />
              <Route
                path="/admin/Politicalengagement"
                exact={true}
                element={<Politicalengagement />}
              />
              <Route path="/admin/Ethics" exact={true} element={<Ethics />} />
              <Route
                path="/admin/Sellonsalar"
                exact={true}
                element={<Sellonsalar />}
              />
              <Route
                path="/admin/Listyourproducts"
                exact={true}
                element={<Listyourproducts />}
              />
              <Route
                path="/admin/Sellglobal"
                exact={true}
                element={<Sellglobal />}
              />
              <Route
                path="/admin/Feesandpricing"
                exact={true}
                element={<Feesandpricing />}
              />
              <Route path="/admin/FAQ" exact={true} element={<FAQ />} />
              <Route path="/admin/Addfaq" exact={true} element={<Addfaq />} />

              <Route
                path="/admin/Commissionssalar"
                exact={true}
                element={<Commissionssalar />}
              />
              <Route
                path="/admin/Testimonials"
                exact={true}
                element={<Testimonials />}
              />
              <Route
                path="/admin/Helpandsupport"
                exact={true}
                element={<Helpandsupport />}
              />
              <Route
                path="/admin/Termsandconditionsuser"
                exact={true}
                element={<Termsandconditionsuser />}
              />
              <Route
                path="/admin/Websiteprivacy"
                exact={true}
                element={<Websiteprivacy />}
              />
              <Route
                path="/admin/Addpages"
                exact={true}
                element={<Addpages />}
              />
              <Route
                path="/admin/Termsandconditionsseller"
                exact={true}
                element={<Termsandconditionsseller />}
              />
              {/* CMS Routes Ends */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
