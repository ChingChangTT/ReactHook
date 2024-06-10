import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Buttondisplay } from './component/Buttondisplay'
import ProductCard from './component/ProductCard'
function App() {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(0);
  const [password, setPassword] = useState("");
  const [products, setProduct] = useState([]);
  const [error, setError] = useState({
    name: "",
    message: ""
  });
// const handlePass = (event) => {
  //   const inputPassword = event.target.value;
  //   setPassword(inputPassword);
  //   // Example validation logic
  //   if (inputPassword.length < 5) {
  //     setError({ message: 'Password must be at least 5 characters long.' });
  //   } else {
  //     setError({ message: '' });
  //   }
  // };
  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    // Example validation logic
    if (password.length > 0) {
      if (!/^\d*$/.test(password)) {
        setError({ name: "password", message: 'Password must contain only numbers.' });
      } else if (password.length < 5) {
        setError({ name: "password", message: 'Password must be at least 5 characters long.' });
      } else {
        setError({ name: "password", message: '' });
      }
    } else {
      setError({ name: "password", message: '' });
    }
  }, [password]); // This effect runs whenever the password state changes

  const handle = () => {
    setCount(count + 1);
    console.log(count);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  console.log("products", products);
  return (
    <>
      <div className="m-auto w-96 flex items-center justify-between">
        <h1 className="read-the-docs text-3xl text-pink-600">
          {count}
        </h1>
        <Buttondisplay handle={() => handle()} tittle={"I Love you"} style={"px-5 text-center text-3xl bg-pink-400  text-black border-2 border-fuchsia-500 "} />
      </div>
      <section className="flex m-auto mt-14 w-96 justify-between">
        <form action="#" className="flex w-96 justify-between">
          <label htmlFor="Password">Enter Password :</label>
          <input type="password" placeholder="Input your password" className="border w-1/2" onChange={handlePass} />
          <p className="text-red-700">{error.message}</p>
        </form>
      </section>
      <main className="flex justify-center items-center flex-col  w-4/5 m-auto">
      <section>
        <h1>This is Product section!!</h1>
        <div className="grid grid-cols-4 gap-5">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                title={product.title}
                image={product.images && product.images.length > 0 ? product.images[0] : "https://i.pinimg.com/564x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg"}
                price={product.price}
              />
            );
          })}
        </div>
      </section>
      {/* <section>
        <h1 className="text-2xl mb-4 text-blue-600">{count}</h1>
        <ButtonComponent onClick={handleCount} title={"Count"} />
        <ButtonComponent
          onClick={() => setChange(change + 1)}
          title={"Change"}
        />
      </section> */}
      {/* <section className="mt-5">
        <form action="#">
          <label className="mr-5" htmlFor="password">
            Enter password
          </label>
          <input type="password" onChange={handlePassword} />
          <p className="text-red-700">{error.message}</p>
        </form>
      </section> */}
    </main>
    </>
  )
}

export default App
