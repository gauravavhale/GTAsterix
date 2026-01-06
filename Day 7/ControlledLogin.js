const ControlledLogin = () => {

    const [credentials, setCredentials] = React.useState({
      name : "",
      email : "",
      password : "",
    })

    const [errors, setErrors] = React.useState({
      name : "",
      email:"",
      password : ""
    })

    const handleChange=(e)=>{
        const { name , value } = e.target
        setCredentials((prev)=>({
          ...prev,
          [name]:value
        })
        )

        let message = "";
        if( name === "name" && value.trim().length < 3 ){
          message = "Name must be atleast 3 Characters"
        }
        if( name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ){
          message = "Please enter a valid email"
        }
        if( name === "password" && value.length < 6 ){
          message = "Password should be atleast 6 characters"
        }

        setErrors((prev)=>({
          ...prev,
          [name] : message,
        })
        )
    }

    const fnSubmit=(e)=>{
        e.preventDefault();
        const hasErrors = Object.values(errors).some((err)=> err !== "");
        if(hasErrors){
          alert("Please Fix validation errors before Submiting")
          return;
        }
        console.log(credentials)
        alert('Form Submited')
    }

    const form = {
        background: "#ffffff",
        padding: "30px 40px",
        width: "320px",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
    };

    const input = {
        width: "100%",
        padding: "10px",
        marginBottom: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc"
    };

    const button = {
        padding: "4px 6px",
    }

    const errorStyle = {
        color: "red",
        fontSize: "12px",
        marginTop: "12px",
        display:"flex",
    }

  return (
    <form style={form} onSubmit={fnSubmit}>

        {errors.name && <div style={errorStyle}>{errors.name}</div>}
        <input 
        type="text"
        name="name"
        value={credentials.name}
        onChange={handleChange}
        placeholder="Name"
        required
        style={input}
        />

        {errors.email && <div style={errorStyle}>{errors.email}</div>}
        <input 
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Email"
        required
        style={input}
        />
        
        {errors.password && <div style={errorStyle}>{errors.password}</div>}
        <input 
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        required
        style={input}
        />

        <button type="submit" style={button}>Submit</button>

    </form> 
  )
}