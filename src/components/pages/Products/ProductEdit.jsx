import { useStates } from "../../../utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import CategorySelect from "../CategorySelect";
import { sweFormat } from "../../../utilities/currencyFormatter";
import {
  initializeMedia,
  captureImage,
  uploadPicture,
  imagePicker,
} from "../../../utilities/imageCapture";
import { useState } from "react";

export default function ProductDetail() {
  let s = useStates("main");
  let { id } = useParams();
  let navigate = useNavigate();

  //lokalt state fÃ¶r denna komponent
  let l = useStates({
    captureMode: true,
  });

  //startar kameran
  useState(() => {
    initializeMedia();
  }, []);

  //find product based on ID
  let product = s.products.find((x) => x.id === +id);
  if (!product) {
    return null;
  }
  let { name, description, price } = product;

  async function save() {
    // Save to db
    await product.save();
    // ladda up bild
    await uploadPicture(id);
    // Navigate to detail page
    navigate(`/product-detail2/${id}`);
    window.location.reload(false);
  }

  function takeImage() {
    captureImage();
    l.captureMode = false;
  }

  return (
    <form>
      <div className="px-4 py-6 sm:grid grid-cols-2 gap-x-6 max-w-4xl mx-auto justify-center">
        <div className="rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 className="text-center text-2xl font-bold text-orange-600 my-8">
            Edit Product Information
          </h1>
          <div className="flex flex-col">
            <div className="space-y-2 my-4">
              <div>
                <div>
                  <h1 className="uppercase text-center">{name}</h1>
                </div>
              </div>
              <div>
                <div className="text-justify">
                  <p>{description}</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Price: {price} SEK</p>
                </div>
              </div>
            </div>

            <label className="">
              Edit Name:
              <input
                className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                {...product.bind("name")}
              />
            </label>
            <label className="">
              Edit Description:
              <textarea
                className="my-4 border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                {...product.bind("description")}
              />
            </label>
            <label className="my-4">
              Edit Price:
              <input
                className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                {...product.bind("price")}
              />
            </label>
          </div>
          <div className="block mr-8 border border-solid border-gray-300 rounded">
            <div className="">
              <video
                style={{ display: l.captureMode ? "block" : "none" }}
                autoPlay
              ></video>
              <canvas
                width="320px"
                height="240px"
                style={{ display: !l.captureMode ? "block" : "none" }}
              ></canvas>
              <button onClick={takeImage}>Ta Bild</button>
            </div>
            <div>
              <input type="file" onChange={imagePicker} />
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label>
                Category:&nbsp;
                <CategorySelect bindTo={[product, "categoryId"]} />
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={save}
            className="my-4 btn btn-primary float-end"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
