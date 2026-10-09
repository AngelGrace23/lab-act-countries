import { Navigate, Outlet, useLocation, useParams } from "react-router";
import COUNTRIES from "../data/countries";

const RequireValidCountry = () => {
  const { countryCode } = useParams();
  const location = useLocation();

  const normalizedCode = countryCode?.toUpperCase();
  const exists = COUNTRIES.some((c) => c.code === normalizedCode);

  if (!normalizedCode || !exists) {
    return (
      <Navigate
        to="/countries"
        state={{ missingCode: countryCode, from: location.pathname }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default RequireValidCountry;