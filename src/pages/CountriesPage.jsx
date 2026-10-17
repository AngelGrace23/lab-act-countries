import { Link } from "react-router";
import COUNTRIES from "../data/countries";

const CountriesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Countries</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COUNTRIES.map((country) => (
          <Link
            key={country.code}
            to={`/countries/${country.code}`}
            className="card bg-base-100 shadow hover:scale-105 transition"
          >
            <div className="card-body">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h2 className="card-title">{country.name}</h2>
                  <p className="text-sm opacity-70">{country.capital}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <span className="badge badge-primary">{country.region}</span>
                <span className="badge">
                  {country.population.toLocaleString()} people
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;