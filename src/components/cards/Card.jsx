import "./Card.css";
import Location from "../../assets/images/map.png"
import Mount from "../../assets/images/Rectangle 77.jpg"
import Sydney from "../../assets/images/Rectangle 84.jpg"
import Norway from "../../assets/images/Rectangle 78.jpg"

const Card = () => {
  const blogs = [
    {
      country: "Japan",
      city: "Mount Fuji",
      image: Mount,
      date: "12 Jan, 2021 - 24 Jan, 2021",
      text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    },
    {
      country: "AUSTRALIA",
      city: "Sydney Opera House",
      date: "27 May, 2021 - 8 Jun, 2021",
      image: Sydney,
      text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    },
    {
      country: "NORWAY",
      city: "Geirangerfjord",
      date: "01 Oct, 2021 - 18 Nov, 2021",
      image: Norway,
      text: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    },
  ];

  return (
    <>
      {blogs.map((blog) => (
        <div className="card1" key={Math.random()}>
          <div className="card">
            <img className="main" src={blog.image} alt="Mount Fuji" />
            <div className="text-container">
              <p className="para">
                <img src={Location} alt="img" /> JAPAN{" "}
                <a href="#">View on Google Maps</a>
              </p>
              <h1>{blog.city}</h1>
              <p>{blog.date}</p>
              <p>{blog.text}</p>
            </div>
          </div>
          <div className="line"></div>
        </div>
      ))}
    </>
  );
};

export default Card;
