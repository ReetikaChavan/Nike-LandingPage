"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
require("./afterloginstyle.css");
// Helper Functions
const getUserInitial = () => {
    const username = localStorage.getItem('username');
    return username ? username[0].toUpperCase() : '';
};
const renderDropdown = (categories) => ((0, jsx_runtime_1.jsx)("div", { className: "dropdown2", children: (0, jsx_runtime_1.jsx)("div", { className: "sub-dropdown2", children: categories.map((category, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "category-section2", children: [(0, jsx_runtime_1.jsx)("h3", { className: "category-title2", children: category.title }), category.items.map((item, subIndex) => ((0, jsx_runtime_1.jsx)("div", { className: "sub-dropdown-row2", children: item }, subIndex)))] }, index))) }) }));
// Main Component
const App = () => {
    const [loadingComplete, setLoadingComplete] = (0, react_1.useState)(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, react_1.useState)(false);
    const [userInitial, setUserInitial] = (0, react_1.useState)('');
    const [showUserDropdown, setShowUserDropdown] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)("div", { children: !loadingComplete ? ((0, jsx_runtime_1.jsx)("div", { className: "loading-screen2", children: (0, jsx_runtime_1.jsx)("img", { src: "media/logo.png", alt: "Nike Logo", className: "nike-logo2" }) })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: `mobile-menu2 ${isMobileMenuOpen ? 'open' : ''}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "mobile-menu-header2", children: (0, jsx_runtime_1.jsx)("button", { className: "close-button2", onClick: toggleMobileMenu, children: "X" }) }), (0, jsx_runtime_1.jsx)("nav", { className: "mobile-nav2", children: mobileMenuItems.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "mobile-menu-item2", children: [(0, jsx_runtime_1.jsx)("span", { children: item.title }), item.hasSubmenu && (0, jsx_runtime_1.jsx)("span", { className: "chevron2", children: "\u203A" })] }, index))) })] }), isMobileMenuOpen && ((0, jsx_runtime_1.jsx)("div", { className: "mobile-menu-overlay2", onClick: toggleMobileMenu })), (0, jsx_runtime_1.jsxs)("div", { className: "main-page2", children: [(0, jsx_runtime_1.jsx)(Navbar2, { menuItems: menuItems, userInitial: userInitial, toggleMobileMenu: toggleMobileMenu, toggleUserDropdown: toggleUserDropdown, showUserDropdown: showUserDropdown, handleSignOut: handleSignOut }), (0, jsx_runtime_1.jsx)(Content2, { imagesData: imagesData, sportData: sportData }), (0, jsx_runtime_1.jsx)(Footer2, { footerData: footerData })] })] })) }) }));
};
const Navbar2 = ({ menuItems, userInitial, toggleMobileMenu, toggleUserDropdown, showUserDropdown, handleSignOut }) => ((0, jsx_runtime_1.jsxs)("div", { className: "navbar2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "logo-container2", children: [(0, jsx_runtime_1.jsx)("img", { src: "media/logo1.png", alt: "Nike Logo", className: "nike-logo-navbar2" }), (0, jsx_runtime_1.jsx)("div", { className: "features2", children: menuItems.map((menu, index) => ((0, jsx_runtime_1.jsxs)("span", { className: "feature2", children: [menu.title, menu.categories && renderDropdown(menu.categories)] }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "right-icons2", children: [(0, jsx_runtime_1.jsx)("div", { className: "user-avatar2", onClick: toggleUserDropdown, children: userInitial }), (0, jsx_runtime_1.jsx)("img", { src: "media/cartbag.png", className: "icon cart-icon2", alt: "Cart" }), (0, jsx_runtime_1.jsx)("img", { src: "media/user-icon.png", className: "icon2", alt: "User", onClick: toggleUserDropdown }), (0, jsx_runtime_1.jsx)("img", { src: "media/menu-icon.png", className: "icon2", alt: "Menu", onClick: toggleMobileMenu }), showUserDropdown && ((0, jsx_runtime_1.jsx)("div", { className: `user-dropdown2 ${showUserDropdown ? 'show' : ''}`, children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/profile", children: "Profile" }) }), (0, jsx_runtime_1.jsx)("li", { onClick: handleSignOut, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signin", children: "Sign Out" }) })] }) }))] })] }));
const Content2 = ({ imagesData, sportData }) => ((0, jsx_runtime_1.jsxs)("div", { className: "content2", children: [(0, jsx_runtime_1.jsx)(VideoSection2, {}), (0, jsx_runtime_1.jsx)(ImageCarousel2, { imagesData: imagesData }), (0, jsx_runtime_1.jsx)(NewSection2, {}), (0, jsx_runtime_1.jsx)(SportCarousel2, { sportData: sportData })] }));
const VideoSection2 = () => ((0, jsx_runtime_1.jsx)("div", { className: "video-container2", children: (0, jsx_runtime_1.jsx)("video", { className: "responsive-video2", src: "media/videoplayback.mp4", muted: true, autoPlay: true, loop: true }) }));
const ImageCarousel2 = ({ imagesData }) => ((0, jsx_runtime_1.jsxs)("div", { className: "image-carousel2", children: [(0, jsx_runtime_1.jsx)("h2", { children: "New Arrivals" }), (0, jsx_runtime_1.jsx)("div", { className: "scrolling-images2", children: imagesData.map((image, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "image-card2", children: [(0, jsx_runtime_1.jsx)("img", { src: image.src, alt: image.name, className: "carousel-image2" }), (0, jsx_runtime_1.jsxs)("div", { className: "image-details2", children: [(0, jsx_runtime_1.jsx)("h3", { children: image.name }), (0, jsx_runtime_1.jsx)("p", { children: image.price })] })] }, index))) })] }));
const NewSection2 = () => ((0, jsx_runtime_1.jsxs)("div", { className: "newsection2", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Don't Miss" }), (0, jsx_runtime_1.jsx)("img", { src: "media/grd.jpg", className: "image2", alt: "Featured Product" }), (0, jsx_runtime_1.jsxs)("div", { className: "below-grid2", children: [(0, jsx_runtime_1.jsx)("h4", { className: "heading1", children: "Men's Air Jordan 4RM" }), (0, jsx_runtime_1.jsx)("h4", { className: "heading2", children: "RIDE EASY" }), (0, jsx_runtime_1.jsx)("h4", { className: "heading3", children: "A new take on the iconic Air Jordan 4" })] })] }));
const SportCarousel2 = ({ sportData }) => ((0, jsx_runtime_1.jsxs)("div", { className: "sport-carousel2", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Shop By Sport" }), (0, jsx_runtime_1.jsx)("div", { className: "sport-images2", children: sportData.map((image, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "sport-card2", children: [(0, jsx_runtime_1.jsx)("img", { src: image.src, alt: image.name, className: "carousel-sport2" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: image.link || '#', className: "sport-button2", children: image.name })] }, index))) })] }));
// Footer Component
const Footer2 = ({ footerData }) => ((0, jsx_runtime_1.jsx)("div", { className: "site-footer2", children: (0, jsx_runtime_1.jsxs)("div", { className: "footer-sections2", children: [(0, jsx_runtime_1.jsx)(FooterSection2, { title: "Resources", data: footerData.Resources }), (0, jsx_runtime_1.jsx)(FooterSection2, { title: "Support", data: footerData.Support }), (0, jsx_runtime_1.jsx)(FooterSection2, { title: "About Us", data: footerData.AboutUs })] }) }));
const FooterSection2 = ({ title, data }) => ((0, jsx_runtime_1.jsxs)("div", { className: "footer-section2", children: [(0, jsx_runtime_1.jsx)("h3", { className: "footer-heading2", children: title }), (0, jsx_runtime_1.jsx)("ul", { className: "footer-list2", children: data.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { className: "footer-list-item2", children: (0, jsx_runtime_1.jsx)("a", { href: item.url, className: "footer-link2", children: item.title }) }, index))) })] }));
exports.default = App;
