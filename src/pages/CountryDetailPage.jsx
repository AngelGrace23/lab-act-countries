import { Link, useNavigate, useParams } from "react-router";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = COUNTRIES.find(
    (item) => item.code === countryCode?.toUpperCase()
  );

  if (!country) {
    return (
      <div className="max-w-md mx-auto py-10 text-center space-y-4">
        <h2 className="text-2xl font-bold">Country not found</h2>
        <p>The requested country could not be found.</p>
        <Link to="/countries" className="btn">
          Back to Countries
        </Link>
      </div>
    );
  }

  const handleRandom = () => {
    const others = COUNTRIES.filter((item) => item.code !== country.code);
    if (others.length === 0) return;

    const random = others[Math.floor(Math.random() * others.length)];
    navigate(`/countries/${random.code}`);
  };

  return (
    <div className="max-w-md mx-auto card bg-base-100 shadow p-6 text-center space-y-3">
      <div className="text-8xl">{country.flag}</div>
      <h1 className="text-3xl font-bold">{country.name}</h1>
      <p className="opacity-70">Capital: {country.capital}</p>

      <div className="flex justify-center gap-2">
        <span className="badge badge-primary">{country.region}</span>
        <span className="badge">
          {country.population.toLocaleString()} people
        </span>
      </div>

      <div className="flex gap-2 justify-center pt-2">
        <button className="btn btn-ghost" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn btn-primary" onClick={handleRandom}>
          Random Country
        </button>
      </div>
    </div>
  );
};

export default CountryDetailPage;