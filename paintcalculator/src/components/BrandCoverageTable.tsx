import { Link } from 'react-router-dom';
import { BEHR_HOME_DEPOT, CANADIAN_PAINT_BRANDS } from '../lib/canadianPaintBrands';

const HUB_ROW = {
  name: 'Behr',
  path: BEHR_HOME_DEPOT.path,
  soldAt: BEHR_HOME_DEPOT.soldAt,
  region: BEHR_HOME_DEPOT.region,
  typicalSqFtPerGallon: BEHR_HOME_DEPOT.typicalSqFtPerGallon,
  twelveByTwelveGallons: BEHR_HOME_DEPOT.twelveByTwelveGallons,
};

export default function BrandCoverageTable() {
  const rows = [
    HUB_ROW,
    ...CANADIAN_PAINT_BRANDS.map((brand) => ({
      name: brand.name,
      path: brand.path,
      soldAt: brand.soldAt,
      region: brand.region,
      typicalSqFtPerGallon: brand.typicalSqFtPerGallon,
      twelveByTwelveGallons: brand.twelveByTwelveGallons,
    })),
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="min-w-full text-sm text-left">
        <caption className="sr-only">
          Typical interior paint coverage by brand sold in Canada. Always use the number on your can.
        </caption>
        <thead className="bg-slate-50 dark:bg-slate-900 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-3 py-2 font-semibold">
              Brand
            </th>
            <th scope="col" className="px-3 py-2 font-semibold">
              Where it is sold
            </th>
            <th scope="col" className="px-3 py-2 font-semibold">
              Typical interior sq ft/gal
            </th>
            <th scope="col" className="px-3 py-2 font-semibold">
              12×12 walls, 2 coats
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.path} className="border-t border-slate-200 dark:border-slate-800">
              <th scope="row" className="px-3 py-2 font-medium text-slate-800 dark:text-slate-100">
                <Link to={row.path} className="text-blue-700 dark:text-blue-400 hover:underline">
                  {row.name}
                </Link>
              </th>
              <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{row.soldAt}</td>
              <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{row.typicalSqFtPerGallon}</td>
              <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{row.twelveByTwelveGallons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
