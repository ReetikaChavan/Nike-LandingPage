"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./style.css");
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    const [loadingComplete, setLoadingComplete] = (0, react_1.useState)(false);
    const [showSearchBar, setShowSearchBar] = (0, react_1.useState)(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, react_1.useState)(false);
    const [showUserDropdown, setShowUserDropdown] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };
    const renderDropdown = (title, categories) => ((0, jsx_runtime_1.jsx)("div", { className: "dropdown", children: (0, jsx_runtime_1.jsx)("div", { className: "sub-dropdown", children: categories.map((category, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "category-section", children: [(0, jsx_runtime_1.jsx)("h3", { className: "category-title", children: category.title }), category.items.map((item, subIndex) => ((0, jsx_runtime_1.jsx)("div", { className: "sub-dropdown-row", children: item }, subIndex)))] }, index))) }) }));
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
    return ((0, jsx_runtime_1.jsx)("div", { children: !loadingComplete ? ((0, jsx_runtime_1.jsx)("div", { className: "loading-screen", children: (0, jsx_runtime_1.jsx)("img", { src: "media/logo.png", alt: "Nike Logo", className: "nike-logo" }) })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: `mobile-menu ${isMobileMenuOpen ? 'open' : ''}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "mobile-menu-header", children: (0, jsx_runtime_1.jsx)("button", { className: "close-button", onClick: toggleMobileMenu }) }), (0, jsx_runtime_1.jsx)("nav", { className: "mobile-nav", children: mobileMenuItems.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "mobile-menu-item", children: [(0, jsx_runtime_1.jsx)("span", { children: item.title }), item.hasSubmenu && (0, jsx_runtime_1.jsx)("span", { className: "chevron", children: "\u203A" })] }, index))) })] }), isMobileMenuOpen && ((0, jsx_runtime_1.jsx)("div", { className: "mobile-menu-overlay", onClick: toggleMobileMenu })), (0, jsx_runtime_1.jsxs)("div", { className: "main-page", children: [(0, jsx_runtime_1.jsxs)("div", { className: "navbar", children: [(0, jsx_runtime_1.jsxs)("div", { className: "logo-container", children: [(0, jsx_runtime_1.jsx)("img", { src: "media/logo1.png", alt: "Nike Logo", className: "nike-logo-navbar" }), (0, jsx_runtime_1.jsx)("div", { className: "features", children: menuItems.map((menu, index) => ((0, jsx_runtime_1.jsxs)("span", { className: "feature", children: [menu.title, renderDropdown(menu.title, menu.categories || [])] }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "right-icons", children: [(0, jsx_runtime_1.jsxs)("div", { className: "search-container", children: [(0, jsx_runtime_1.jsx)("img", { src: "media/search-icon.png", className: "icon search-icon", alt: "Search", onClick: toggleSearchBar }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: `search-bar ${showSearchBar ? 'show' : ''}`, placeholder: "Search..." })] }), (0, jsx_runtime_1.jsx)("img", { src: "media/user-icon.png", className: "icon", alt: "User", onClick: toggleUserDropdown }), (0, jsx_runtime_1.jsx)("img", { src: "media/menu-icon.png", className: "icon", alt: "Menu", onClick: toggleMobileMenu }), showUserDropdown && ((0, jsx_runtime_1.jsx)("div", { className: `user-dropdown ${showUserDropdown ? 'show' : ''}`, children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signin", children: "Sign In" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", children: "Sign Up" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "Sign Out" }) })] }) }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "content", children: [(0, jsx_runtime_1.jsx)("div", { className: "video-container", children: (0, jsx_runtime_1.jsx)("video", { className: "responsive-video", src: "media/videoplayback.mp4", muted: true, autoPlay: true, loop: true }) }), (0, jsx_runtime_1.jsxs)("div", { className: "content-details", children: [(0, jsx_runtime_1.jsx)("h4", { children: "Nike Air" }), (0, jsx_runtime_1.jsxs)("h4", { className: "title-container", children: ["Get Comfortable With ", (0, jsx_runtime_1.jsx)("span", { className: "winning", children: "Winning" })] }), (0, jsx_runtime_1.jsx)("h2", { children: "Comfort you want with support you need to power your wins." }), (0, jsx_runtime_1.jsx)("button", { className: "shop-button", children: "Shop Now" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "image-carousel", children: [(0, jsx_runtime_1.jsx)("h2", { children: "New Arrivals" }), (0, jsx_runtime_1.jsx)("div", { className: "scrolling-images", children: imagesData.map((image, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "image-card", children: [(0, jsx_runtime_1.jsx)("img", { src: image.src, alt: image.name, className: "carousel-image" }), (0, jsx_runtime_1.jsxs)("div", { className: "image-details", children: [(0, jsx_runtime_1.jsx)("h3", { children: image.name }), (0, jsx_runtime_1.jsx)("p", { children: image.price })] })] }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "newsection", children: [(0, jsx_runtime_1.jsx)("div", { className: "header", children: (0, jsx_runtime_1.jsx)("h2", { children: "Don't Miss" }) }), (0, jsx_runtime_1.jsx)("div", { className: "image-container", children: (0, jsx_runtime_1.jsx)("img", { src: "media/grd.jpg", className: "image", alt: "Featured Product" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "below-grid", children: [(0, jsx_runtime_1.jsx)("h4", { className: "heading1", children: "Men's Air Jordan 4RM" }), (0, jsx_runtime_1.jsx)("h4", { className: "heading2", children: "RIDE EASY" }), (0, jsx_runtime_1.jsx)("h4", { className: "heading3", children: "A new take on the iconic Air Jordan 4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "sport-carousel", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Shop By Sport" }), (0, jsx_runtime_1.jsx)("div", { className: "sport-images", children: sportData.map((image, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "sport-card", children: [(0, jsx_runtime_1.jsx)("img", { src: image.src, alt: image.name, className: "carousel-sport" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: image.link, className: "sport-button", children: image.name })] }, index))) })] }), (0, jsx_runtime_1.jsx)("div", { className: "site-footer", children: (0, jsx_runtime_1.jsxs)("div", { className: "footer-sections", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-section", children: [(0, jsx_runtime_1.jsx)("h3", { className: "footer-heading-expl", children: "Resources" }), (0, jsx_runtime_1.jsx)("ul", { className: "footer-list", children: footerData.Resources.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { className: "footer-list-item", children: (0, jsx_runtime_1.jsx)("a", { href: item.url, className: "footer-link", children: item.title }) }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-section", children: [(0, jsx_runtime_1.jsx)("h3", { className: "footer-heading-hlp", children: "Support" }), (0, jsx_runtime_1.jsx)("ul", { className: "footer-list", children: footerData.Support.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { className: "footer-list-item", children: (0, jsx_runtime_1.jsx)("a", { href: item.url, className: "footer-link", children: item.title }) }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-section", children: [(0, jsx_runtime_1.jsx)("h3", { className: "footer-heading-cmp", children: "About Us" }), (0, jsx_runtime_1.jsx)("ul", { className: "footer-list", children: footerData.AboutUs.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { className: "footer-list-item", children: (0, jsx_runtime_1.jsx)("a", { href: item.url, className: "footer-link", children: item.title }) }, index))) })] })] }) })] })] })) }));
};
exports.default = App;
