import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}

      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;

function ProductItem({ product, changeHandler, deleteHandler }) {
  return (
    <div className="form-input__list">
      <FormInput
        name="name"
        type="text"
        label="Product Name"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
        <FormInput
          name="price"
          type="text"
          label="Price"
          value={product.price}
          onChange={changeHandler}
        />

        <FormInput
          name="qty"
          type="number"
          label="Qty"
          value={product.qty}
          onChange={changeHandler}
        />
      </div>
      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
}
