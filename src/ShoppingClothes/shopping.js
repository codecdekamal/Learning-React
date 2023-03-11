import Style from "./shopping.module.css";
import AvailableShopping from "./AvailableShopping";
const clothesData = [
  {
    id: "h1",
    name: "Tutu dress",
    description: "good to wear",
    price: 5,
    src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    id: "h2",
    name: "Polo dress",
    description: "best in the market",
    price: 4,
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    id: "h3",
    name: "Shirtdress",
    description: "hottest in the market",
    price: 10,
    src: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },

  {
    id: "h4",
    name: "Culotte dress.",
    description: "makes you pretier",
    price: 55,
    src: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  },
];

const Shopping = (props) => {
  return (
    <div key={clothesData.id} className={Style.container}>
      {clothesData.map((item) => <AvailableShopping
           key ={item.id}
           id={item.id}
           name={item.name}
           description={item.description}
           price={item.price}
           src={item.src}
        />
      )}
    </div>
  );
};
export default Shopping;
