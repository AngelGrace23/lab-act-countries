import RequireValidCountry from "./components/RequireValidCountry";
import CountriesLayout from "./components/CountriesLayout";
import CountryDetailPage from "./pages/CountryDetailPage";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="countries" element={<CountriesLayout />}>
      <Route index element={<CountriesPage />} />
      <Route path=":countryCode" element={<RequireValidCountry />}>
        <Route index element={<CountryDetailPage />} />
      </Route>
    </Route>
    <Route path="bucket-list" element={<BucketListPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
 );  
};
export default App;