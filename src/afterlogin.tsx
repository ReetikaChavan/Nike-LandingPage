import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './afterloginstyle.css';

// Type Definitions
interface MenuItem {
  title: string;
  categories?: { title: string; items: string[] }[];
  hasSubmenu?: boolean;
}

interface ImageData {
  src: string;
  name: string;
  price?: string;
  link?: string;
}

interface FooterItem {
  title: string;
  url: string;
}

interface FooterData {
  [key: string]: FooterItem[];
}

// Helper Functions
const getUserInitial = (): string => {
  const username = localStorage.getItem('username');
  return username ? username[0].toUpperCase() : '';
};

const renderDropdown = (categories: { title: string; items: string[] }[]) => (
  <div className="dropdown2">
    <div className="sub-dropdown2">
      {categories.map((category, index) => (
        <div className="category-section2" key={index}>
          <h3 className="category-title2">{category.title}</h3>
          {category.items.map((item, subIndex) => (
            <div className="sub-dropdown-row2" key={subIndex}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

// Main Component
const After: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [userInitial, setUserInitial] = useState<string>('');
  const [showUserDropdown, setShowUserDropdown] = useState<boolean>(false);

  useEffect(() => {
    setLoadingComplete(true);
    setUserInitial(getUserInitial());
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  const menuItems: MenuItem[] = [
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

  const mobileMenuItems: MenuItem[] = [
    { title: 'New & Featured', hasSubmenu: true },
    { title: 'Men', hasSubmenu: true },
    { title: 'Women', hasSubmenu: true },
    { title: 'Kids', hasSubmenu: true },
    { title: 'Sale', hasSubmenu: true },
    { title: 'SNKRS', hasSubmenu: false }
  ];

  const imagesData: ImageData[] = [
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

  const sportData: ImageData[] = [
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

  const footerData: FooterData = {
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
    <Router>
      <div>
        {!loadingComplete ? (
          <div className="loading-screen2">
            <img src="media/logo.png" alt="Nike Logo" className="nike-logo2" />
          </div>
        ) : (
          <>
            <div className={`mobile-menu2 ${isMobileMenuOpen ? 'open' : ''}`}>
              <div className="mobile-menu-header2">
                <button className="close-button2" onClick={toggleMobileMenu}>X</button>
              </div>
              <nav className="mobile-nav2">
                {mobileMenuItems.map((item, index) => (
                  <div key={index} className="mobile-menu-item2">
                    <span>{item.title}</span>
                    {item.hasSubmenu && <span className="chevron2">›</span>}
                  </div>
                ))}
              </nav>
            </div>

            {isMobileMenuOpen && (
              <div className="mobile-menu-overlay2" onClick={toggleMobileMenu} />
            )}

            <div className="main-page2">
              <Navbar2
                menuItems={menuItems}
                userInitial={userInitial}
                toggleMobileMenu={toggleMobileMenu}
                toggleUserDropdown={toggleUserDropdown}
                showUserDropdown={showUserDropdown}
                handleSignOut={handleSignOut}
              />
              <Content2 imagesData={imagesData} sportData={sportData} />
              <Footer2 footerData={footerData} />
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

// Navbar Component
interface NavbarProps {
  menuItems: MenuItem[];
  userInitial: string;
  toggleMobileMenu: () => void;
  toggleUserDropdown: () => void;
  showUserDropdown: boolean;
  handleSignOut: () => void;
}

const Navbar2: React.FC<NavbarProps> = ({
  menuItems, 
  userInitial, 
  toggleMobileMenu, 
  toggleUserDropdown, 
  showUserDropdown, 
  handleSignOut
}) => (
  <div className="navbar2">
    <div className="logo-container2">
      <img src="media/logo1.png" alt="Nike Logo" className="nike-logo-navbar2" />
      <div className="features2">
        {menuItems.map((menu, index) => (
          <span className="feature2" key={index}>
            {menu.title}
            {menu.categories && renderDropdown(menu.categories)}
          </span>
        ))}
      </div>
    </div>

    <div className="right-icons2">
      <div className="user-avatar2" onClick={toggleUserDropdown}>
        {userInitial}
      </div>
      <img src="media/cartbag.png" className="icon cart-icon2" alt="Cart" />
      <img src="media/user-icon.png" className="icon2" alt="User" onClick={toggleUserDropdown} />
      <img src="media/menu-icon.png" className="icon2" alt="Menu" onClick={toggleMobileMenu} />
      
      {showUserDropdown && (
        <div className={`user-dropdown2 ${showUserDropdown ? 'show' : ''}`}>
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li onClick={handleSignOut}><Link to="/signin">Sign Out</Link></li>
          </ul>
        </div>
      )}
    </div>
  </div>
);

// Content Component
interface ContentProps {
  imagesData: ImageData[];
  sportData: ImageData[];
}

const Content2: React.FC<ContentProps> = ({ imagesData, sportData }) => (
  <div className="content2">
    <VideoSection2 />
    <ImageCarousel2 imagesData={imagesData} />
    <NewSection2 />
    <SportCarousel2 sportData={sportData} />
  </div>
);

const VideoSection2: React.FC = () => (
  <div className="video-container2">
    <video
      className="responsive-video2"
      src="media/videoplayback.mp4"
      muted
      autoPlay
      loop
    />
  </div>
);

const ImageCarousel2: React.FC<{ imagesData: ImageData[] }> = ({ imagesData }) => (
  <div className="image-carousel2">
    <h2>New Arrivals</h2>
    <div className="scrolling-images2">
      {imagesData.map((image, index) => (
        <div className="image-card2" key={index}>
          <img src={image.src} alt={image.name} className="carousel-image2" />
          <div className="image-details2">
            <h3>{image.name}</h3>
            <p>{image.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NewSection2: React.FC = () => (
  <div className="newsection2">
    <h2>Don't Miss</h2>
    <img src="media/grd.jpg" className="image2" alt="Featured Product" />
    <div className="below-grid2">
      <h4 className="heading1">Men's Air Jordan 4RM</h4>
      <h4 className="heading2">RIDE EASY</h4>
      <h4 className="heading3">A new take on the iconic Air Jordan 4</h4>
    </div>
  </div>
);

const SportCarousel2: React.FC<{ sportData: ImageData[] }> = ({ sportData }) => (
  <div className="sport-carousel2">
    <h2>Shop By Sport</h2>
    <div className="sport-images2">
      {sportData.map((image, index) => (
        <div className="sport-card2" key={index}>
          <img src={image.src} alt={image.name} className="carousel-sport2" />
          <Link to={image.link || '#'} className="sport-button2">{image.name}</Link>
        </div>
      ))}
    </div>
  </div>
);

// Footer Component
const Footer2: React.FC<{ footerData: FooterData }> = ({ footerData }) => (
  <div className="site-footer2">
    <div className="footer-sections2">
      <FooterSection2 title="Resources" data={footerData.Resources} />
      <FooterSection2 title="Support" data={footerData.Support} />
      <FooterSection2 title="About Us" data={footerData.AboutUs} />
    </div>
  </div>
);

const FooterSection2: React.FC<{ title: string; data: FooterItem[] }> = ({ title, data }) => (
  <div className="footer-section2">
    <h3 className="footer-heading2">{title}</h3>
    <ul className="footer-list2">
      {data.map((item, index) => (
        <li key={index} className="footer-list-item2">
          <a href={item.url} className="footer-link2">{item.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default After;