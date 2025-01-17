import React, { useState, useEffect } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Import Link from React Router
import RunningPage from './running';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const renderDropdown = (title, categories) => (
    <div className="dropdown">
      <div className="sub-dropdown">
        {categories.map((category, index) => (
          <div className="category-section" key={index}>
            <h3 className="category-title">{category.title}</h3>
            {category.items.map((item, subIndex) => (
              <div className="sub-dropdown-row" key={subIndex}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  // Menu items definition
  const menuItems = [
    {
      title: 'Men',
      categories: [
        {
          title: 'Shoes',
          items: ['New Releases', 'Running', 'Basketball', 'Football', 'Training & Gym', 'Lifestyle'],
        },
        {
          title: 'Clothing',
          items: ['T-Shirts & Tops', 'Hoodies & Sweatshirts', 'Jackets', 'Shorts', 'Tracksuits'],
        },
        {
          title: 'Accessories',
          items: ['Bags & Backpacks', 'Socks', 'Hats & Headwear'],
        },
      ],
    },
    {
      title: 'Women',
      categories: [
        {
          title: 'Shoes',
          items: ['New Releases', 'Running', 'Training & Gym', 'Lifestyle', 'Walking'],
        },
        {
          title: 'Clothing',
          items: ['Sports Bras', 'Leggings & Tights', 'Hoodies & Sweatshirts', 'Jackets', 'Dresses & Skirts'],
        },
        {
          title: 'Accessories',
          items: ['Bags & Backpacks', 'Headbands & Wristbands', 'Sports Equipment'],
        },
      ],
    },
    {
      title: 'Kids',
      categories: [
        {
          title: 'Shoes',
          items: ['Boys Shoes', 'Girls Shoes', 'Baby & Toddler', 'Lifestyle'],
        },
        {
          title: 'Clothing',
          items: ['Boys Clothing', 'Girls Clothing', 'Baby & Toddler', 'Kids Sets'],
        },
        {
          title: 'Accessories',
          items: ['Bags & Backpacks', 'Socks', 'Hats & Caps'],
        },
      ],
    },
    {
      title: 'Sale',
      categories: [
        {
          title: 'Featured',
          items: ['Shop All Sale', 'Limited Time Deals', 'Last Sizes'],
        },
        {
          title: 'Sale by Category',
          items: ['Shoes Sale', 'Clothing Sale', 'Accessories Sale'],
        },
        {
          title: 'Sale by Sport',
          items: ['Running Sale', 'Football Sale', 'Basketball Sale'],
        },
      ],
    },
  ];

  const mobileMenuItems = [
    { title: 'New & Featured', hasSubmenu: true },
    { title: 'Men', hasSubmenu: true },
    { title: 'Women', hasSubmenu: true },
    { title: 'Kids', hasSubmenu: true },
    { title: 'Sale', hasSubmenu: true },
    { title: 'SNKRS', hasSubmenu: false }
  ];

  const imagesData = [
    {
      src: 'media/shoe1.jpg',
      name: 'AIR JORDAN 1',
      price: '$120',
    },
    {
      src: 'media/shoe2.png',
      name: 'AIR FORCE 1',
      price: '$100',
    },
    {
      src: 'media/sh3.png',
      name: 'DUNKS',
      price: '$150',
    },
    {
      src: 'media/sh4.png',
      name: 'VAPORFLY',
      price: '$90',
    },
    {
      src: 'media/sh5.jpg',
      name: 'VOMERO',
      price: '$130',
    },
    {
      src: 'media/sh6.jpg',
      name: 'KILLSHOT',
      price: '$110',
    },
  ];

  const sportData = [
    {
      src: 'media/spt1.jpg',
      link: '/running',
      name: 'Running',
    },
    {
      src: 'media/spt2.jpg',
      link: '#',
      name: 'Football',
    },
    {
      src: 'media/spt3.jpg',
      link: '#',
      name: 'Tennis',
    },
    {
      src: 'media/spt4.jpg',
      link: '#',
      name: 'Basketball',
    },
    {
      src: 'media/spt5.jpg',
      link: '#',
      name: 'Traning and Gym',
    },
    {
      src: 'media/spt6.jpg',
      link: '#',
      name: 'Dance',
    },
  ];

  const footerData = {
    Resources: [
      { title: 'Find A Store', url: '#' },
      { title: 'Become A Member', url: '#' },
      { title: 'Send Us Feedback', url: '#' }
    ],
    Support: [
      { title: 'Get Help', url: '#' },
      { title: 'Order Status', url: '#' },
      { title: 'Delivery', url: '#' },
      { title: 'Returns', url: '#' },
      { title: 'Payment Options', url: '#' },
      { title: 'Contact Us On Nike.com Inquiries', url: '#' },
      { title: 'Contact Us On All Other Inquiries', url: '#' }
    ],
    AboutUs: [
      { title: 'About Nike', url: '#' },
      { title: 'News', url: '#' },
      { title: 'Careers', url: '#' },
      { title: 'Investors', url: '#' },
      { title: 'Sustainability', url: '#' },
      { title: 'Report a Concern', url: '#' }
    ]
  };
  

  return (
    <div>
      {!loadingComplete ? (
        <div className="loading-screen">
          <img src="media/logo.png" alt="Nike Logo" className="nike-logo" />
        </div>
      ) : (
        <>
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <button className="close-button" onClick={toggleMobileMenu}>
              </button>
            </div>
            <nav className="mobile-nav">
              {mobileMenuItems.map((item, index) => (
                <div key={index} className="mobile-menu-item">
                  <span>{item.title}</span>
                  {item.hasSubmenu && <span className="chevron">›</span>}
                </div>
              ))}
            </nav>
          </div>

          {/* Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={toggleMobileMenu} />
          )}

          <div className="main-page">
            <div className="navbar">
              <div className="logo-container">
                <img src="media/logo1.png" alt="Nike Logo" className="nike-logo-navbar" />
                <div className="features">
                  {menuItems.map((menu, index) => (
                    <span className="feature" key={index}>
                      {menu.title}
                      {renderDropdown(menu.title, menu.categories)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="right-icons">
                <div className="search-container">
                  <img
                    src="media/search-icon.png"
                    className="icon search-icon"
                    alt="Search"
                    onClick={toggleSearchBar}
                  />
                  <input
                    type="text"
                    className={`search-bar ${showSearchBar ? 'show' : ''}`}
                    placeholder="Search..."
                  />
                </div>
                <img 
                  src="media/user-icon.png" 
                  className="icon" 
                  alt="User"
                  onClick={toggleUserDropdown} 
                />
                <img 
                  src="media/menu-icon.png" 
                  className="icon" 
                  alt="Menu" 
                  onClick={toggleMobileMenu}
                  />
                  {/* User Dropdown */}
                      {showUserDropdown && (
                        <div className={`user-dropdown ${showUserDropdown ? 'show' : ''}`}>
                          <ul>
                            <li><Link to="/login">Sign In</Link></li>  
                            <li><Link to="/signup">Sign Up</Link></li>  
                            <li><Link to="/">Sign Out</Link></li> 
                          </ul>
                        </div>
                      )}
              </div>
            </div>

            <div className="content">
              <div className="video-container">
                <video
                  className="responsive-video"
                  src="media/videoplayback.mp4"
                  alt="Promotional Video"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="content-details">
                <h4>Nike Air</h4>
                <h4 className="title-container">
                  Get Comfortable With <span className="winning">Winning</span>
                </h4>
                <h2>Comfort you want with support you need to power your wins.</h2>
                <button className="shop-button">Shop Now</button>
              </div>
            </div>

            <div className="image-carousel">
              <h2>New Arrivals</h2>
              <div className="scrolling-images">
                {imagesData.map((image, index) => (
                  <div className="image-card" key={index}>
                    <img src={image.src} alt={image.name} className="carousel-image" />
                    <div className="image-details">
                      <h3>{image.name}</h3>
                      <p>{image.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="newsection">
              <div className="header">
                <h2>Don't Miss</h2>
              </div>
              <div className="image-container">
                <img 
                  src="media/grd.jpg" 
                  className="image" 
                  alt="Featured Product"
                />
              </div>
              <div className="below-grid">
                <h4 className="heading1">Men's Air Jordan 4RM</h4>
                <h4 className="heading2">RIDE EASY</h4>
                <h4 className="heading3">A new take on the iconic Air Jordan 4</h4>
              </div>
              </div>
              
              <div className="sport-carousel">
              <h2>Shop By Sport</h2>
              <div className="sport-images">
                {sportData.map((image, index) => (
                  <div className="sport-card" key={index}>
                    <img src={image.src} alt={image.name} className="carousel-sport" />
                    <Link to={image.link} className="sport-button">
                      {image.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="site-footer">
              <div className="footer-sections">
                <div className="footer-section">
                  <h3 className="footer-heading-expl">Resources</h3>
                  <ul className="footer-list">
                    {footerData.Resources.map((item, index) => (
                      <li key={index} className="footer-list-item">
                        <a href={item.url} className="footer-link">{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-section">
                  <h3 className="footer-heading-hlp">Support</h3>
                  <ul className="footer-list">
                    {footerData.Support.map((item, index) => (
                      <li key={index} className="footer-list-item">
                        <a href={item.url} className="footer-link">{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-section">
                  <h3 className="footer-heading-cmp">About Us</h3>
                  <ul className="footer-list">
                    {footerData.AboutUs.map((item, index) => (
                      <li key={index} className="footer-list-item">
                        <a href={item.url} className="footer-link">{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
};

export default App;
