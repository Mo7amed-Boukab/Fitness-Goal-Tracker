const InputField = ({ label, id, placeholder,  onChange}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id}  placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputField;
