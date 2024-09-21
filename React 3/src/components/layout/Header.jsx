import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();
  return (
    <>
    
      <h1>Welcome to our website!</h1>
      <button style={{marginBottom:"10px"}} onClick={()=>navigate("/about")}>About</button>
      <button style={{marginBottom:"10px"}} onClick={()=>navigate("/home")}>home</button>
      <button style={{marginBottom:"10px"}} onClick={()=>navigate("/Login")}>Login</button>
      <button style={{marginBottom:"10px"}} onClick={()=>navigate("/categories")}>categories</button>
    </>
  )
}
