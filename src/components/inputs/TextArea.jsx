const TextArea = ( {label, name, value, onChange, required=false} ) => {
    return ( 
           <div className="mb-4">
                <label 
                htmlFor={name} 
                className="block font-semibold"> {label} </label>
                <textarea 
                name={name}
                type="text" 
                className="w-full p-2 border-2 rounded-lg"
                id=""
                value={value} 
                onChange={onChange}
                required={required}
                ></textarea>
            </div>
     );
}
 
export default TextArea;