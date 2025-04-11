const SelectField = ({ label, id, options, onChange }) => {
 return (
   <div className="input-container">
     <label htmlFor={id}>{label}</label>
     <select id={id} onChange={onChange} >
       {options.map((option, id) => (
         <option key={id} value={option}>{option}</option>
       ))}
     </select>
   </div>
 );
};

export default SelectField;
