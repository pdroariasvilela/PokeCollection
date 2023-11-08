

const Input = ({type,name,placeholder,id,value,onChange,label}) =>{


    return(
        <div>
            {label ? <label htmlFor={id || name}>{label}</label> : '' }
            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            id={id || name}
            value={value} 
            onChange={onChange}
             />       
        </div>
    )
}

export default Input