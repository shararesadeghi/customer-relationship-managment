const FormInput = ({ name, label, value, type, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
