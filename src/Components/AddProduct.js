import React from "react";
import { useDispatch } from "react-redux";
import { productAdded } from "../redux/ShoppingCart/Action";

const AddProduct = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.inputName.value;
    const img = e.target.inputImage.value;
    const quantity = e.target.inputQuantity.value;
    const price = e.target.inputPrice.value;
    const category = e.target.inputCategory.value;

    const productDetail = {
      name,
      img,
      quantity,
      price,
      category,
    };
    // console.log(productDetail)
    dispatch(productAdded(productDetail));

    e.target.inputName.value = '';
    e.target.inputImage.value = '';
    e.target.inputCategory.value = '';
    e.target.inputPrice.value = '';
    e.target.inputQuantity.value = '';
  };
  return (
    <div className="formContainer" onSubmit={handleSubmit}>
      <h4 className="formTitle">Add New Product</h4>
      <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="inputName"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="inputCategory"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="inputImage"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="inputPrice"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="inputQuantity"
              required
            />
          </div>
        </div>

        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
