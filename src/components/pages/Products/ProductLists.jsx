import { useStates } from "../../../utilities/states";
import { useNavigate } from "react-router-dom";
import { scrollRestore } from "../../../utilities/scrollBehavior";
import CategorySelect from "../CategorySelect";
import { sweFormat } from "../../../utilities/currencyFormatter";

export default function ProductList() {
  scrollRestore();

  let s = useStates("main");
  let navigate = useNavigate();

  function showDetail(id) {
    navigate(`/product-detail/${id}`);
  }

  function missingImage(event) {}

  return (
    <div className="container static my-0 px-6 mx-auto">
      <h1 className="text-3xl text-center font-bold mb-3 pt-8 uppercase">
        Produkter
      </h1>
      <CategorySelect
        showAllOption
        bindTo={[s, "chosenCategoryId"]}
        className="focus:bg-yellow-50"
      />
      <div class="grid static lg:grid-cols-3 md:grid-cols-2 gap-x-6 lg:gap-x-12 pt-20 justify-center">
        {s.products
          .filter(
            (product) =>
              s.chosenCategoryId === 0 /* all */ ||
              s.chosenCategoryId === product.categoryId
          )
          .map(({ id, name, description, price }) => (
            <div
              className="mb-32 text-gray-800 text-center lg:text-left"
              key={id}
              onClick={() => showDetail(id)}
            >
              <div className="shadow-lg max-w-sm p-10 bg-gray-50 rounded-lg dark:border-gray-700 hover:bg-gray-300 transition-color duration-200 transform transition-all hover:scale-110">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                    onError={missingImage}
                    className="w-full h-44 rounded-t-lg"
                    src={`/images/horses/${id}.jpg`}
                  />
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {name}
                  </h5>
                </div>
                <div className="text-gray-700 text-base mb-4">
                  <p>{description.slice(0, 50)} ...</p>
                </div>
                <div>
                  <p>
                    <b>Pris:</b> {sweFormat(price)}
                  </p>
                </div>
                <div>
                  <button className="inline-block text-xs leading-tight uppercase hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold m-2 py-2 px-4 border border-gray-400 rounded shadow">
                    Fler detaljer
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
