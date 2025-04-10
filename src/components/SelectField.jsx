const SelectField = ({ label, id, options }) => {
 return (
   <div className="input-container">
     <label htmlFor={id}>{label}</label>
     <select id={id}>
       {options.map((option, id) => (
         <option key={id} value={option}>{option}</option>
       ))}
     </select>
   </div>
 );
};

export default SelectField;
