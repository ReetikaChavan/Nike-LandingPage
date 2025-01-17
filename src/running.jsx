import React, { useState, useEffect } from 'react';
import './runstyle.css';

const Running = () => {
  const [currentText, setCurrentText] = useState("MOVE, SHOP, CUSTOMISE & CELEBRATE WITH US");
  const [openMenu, setOpenMenu] = useState(null);

  const navTexts = [
    "MOVE, SHOP, CUSTOMISE & CELEBRATE WITH US",
    "NEW ARRIVALS FOR YOUR BEST RUN",
    "MEMBER EXCLUSIVE DEALS"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = navTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % navTexts.length;
        return navTexts[nextIndex];
      });
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  const menuItems = [
    {
      title: "Shoes",
      items: ["Running Shoes", "Training Shoes", "Basketball Shoes", "Football Boots", "Tennis Shoes"]
    },
    {
      title: "Tops & T-Shirts",
      items: ["Short Sleeve Tops", "Long Sleeve Tops", "Tank Tops", "Polo Shirts"]
    },
    {
      title: "Hoodies & Sweatshirts",
      items: ["Pullover Hoodies", "Zip-Up Hoodies", "Crew Neck Sweatshirts"]
    },
    {
      title: "Jackets",
      items: ["Running Jackets", "Track Jackets", "Winter Jackets", "Rain Jackets"]
    },
    {
      title: "Trousers & Tights",
      items: ["Running Tights", "Track Pants", "Yoga Pants", "Sweatpants"]
    },
    {
      title: "Shorts",
      items: ["Running Shorts", "Training Shorts", "Tennis Shorts", "Swimming Shorts"]
    },
    {
      title: "Tracksuits",
      items: ["Full Tracksuits", "Track Jackets", "Track Pants"]
    },
    {
      title: "Socks",
      items: ["Ankle Socks", "Crew Socks", "Compression Socks", "No-Show Socks"]
    },
    {
      title: "Accessories & Equipment",
      items: ["Bags & Backpacks", "Hats & Caps", "Gloves", "Water Bottles", "Training Equipment"]
    }
  ];

  const products = [
    {
      id: 1,
      name: "Nike Fast Repel",
      description: "Women's Running Jacket",
      price: "₹ 8,995.00",
      colors: "1 Colour",
      tag: "Just In",
      imagePath: "/media/rn1.png"
    },
    {
      id: 2,
      name: "Nike Running Division",
      description: "Women's Running Jacket",
      price: "₹ 5,995.00",
      colors: "1 Colour",
      tag: "Just In",
      imagePath: "/media/rn2.png"
    },
    {
      id: 3,
      name: "Nike Swift",
      description: "Women's Dri-FlT Short-Sleeve Running Top",
      price: "₹ 2,795.00",
      colors: "2 Colours",
    //   tag: "Featured",
      imagePath: "/media/rn3.png"
      },
      {
        id: 1,
        name: "Nike Rise 365 Run Energy",
        description: "Men's Dri-FlT Running Short-Sleeve Top",
        price: "₹ 2,995.00",
        colors: "1 Colour",
        tag: "Just In",
        imagePath: "/media/rn4.png"
      },
      {
        id: 2,
        name: "Nike Rise 365 Run Energy",
        description: "Men's Dri-FIT ADV UV Running Shirt Jacket",
        price: "₹ 2,995.00",
        colors: "1 Colour",
        tag: "Just In",
        imagePath: "/media/rn5.png"
      },
      {
        id: 3,
        name: "Nike Stride",
        description: "Men's Dri-FlT ADV Short-Sleeve Running Top",
        price: "₹ 5,995.00",
        colors: "1 Colour",
        tag: "Just In",
        imagePath: "/media/rn6.png"
      },
      {
        id: 1,
        name: "Nike Trail",
        description: "Men's Dri-FIT ADV UV Running Shirt Jacket",
        price: "₹ 5,995.00",
        colors: "1 Colour",
        tag: "Just In",
        imagePath: "/media/rn7.png"
      },
      {
        id: 2,
        name: "Nike Dri-FIT Club",
        description: "Structure Blank front cap",
        price: "₹ 995.00",
        colors: "1 Colour",
        tag: "Just In",
        imagePath: "/media/rn8.png"
      },
      {
        id: 3,
        name: "Nike Swoosh",
        description: "Women's Dri-FIT 1/2-Zip Running Mid Layer",
        price: "₹ 3,395.00",
        colors: "1 Colour",
        tag: "Just In",
        imagePath: "/media/rn9.png"
      },
  ];

  return (
    <div>
      {/* Navbar Section */}
      <nav className="nav">
        <ul>
          <li>{currentText}</li>
        </ul>
      </nav>

      {/* Sidebar and Products Container */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <nav className="sidebar-nav">
            {menuItems.map((menu, index) => (
              <div key={index} className="nav-item">
                <button
                  className={`nav-button ${openMenu === index ? 'active' : ''}`}
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                >
                  {menu.title}
                  <span className={`arrow ${openMenu === index ? 'rotated' : ''}`}>▼</span>
                </button>

                {openMenu === index && (
                  <div className="dropdown">
                    {menu.items.map((item, itemIndex) => (
                      <a key={itemIndex} href="#" className="dropdown-item">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Product Cards */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-container">
                <img src={product.imagePath} alt={product.name} className="product-img" />
                {product.tag && <span className="product-tag">{product.tag}</span>}
              </div>
                <div className="product-info">
                <p className="product-tag">{product.tag}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-colors">{product.colors}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Running;
