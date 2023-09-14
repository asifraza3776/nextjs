import { useEffect ,useState} from "react";



export function Shop() {
    const [shop,setshop]=useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("http://localhost:4000/shoppers");
           
            const result = await response.json();
            console.log("results",result)
            setshop(result)
        
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        
        fetchData();
      }, []);
   return (
    <>
      <h1>Shop List </h1>
      {shop.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
    </>
  );
}
  export default Shop;