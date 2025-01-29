"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./runstyle.css");
const Running = () => {
    const [currentText, setCurrentText] = (0, react_1.useState)("MOVE, SHOP, CUSTOMISE & CELEBRATE WITH US");
    const [openMenu, setOpenMenu] = (0, react_1.useState)(null);
    const navTexts = [
        "MOVE, SHOP, CUSTOMISE & CELEBRATE WITH US",
        "NEW ARRIVALS FOR YOUR BEST RUN",
        "MEMBER EXCLUSIVE DEALS"
    ];
    (0, react_1.useEffect)(() => {
        const intervalId = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = navTexts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % navTexts.length;
                return navTexts[nextIndex];
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const runningMenuItems = [
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
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("nav", { className: "nav", children: (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { children: currentText }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "runningcontainer", children: [(0, jsx_runtime_1.jsx)("div", { className: "runningsidebar", children: (0, jsx_runtime_1.jsx)("nav", { className: "sidebar-running", children: runningMenuItems.map((menu, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "running-item", children: [(0, jsx_runtime_1.jsxs)("button", { className: `running-button ${openMenu === index ? 'active' : ''}`, onClick: () => setOpenMenu(openMenu === index ? null : index), children: [menu.title, (0, jsx_runtime_1.jsx)("span", { className: `arrow ${openMenu === index ? 'rotated' : ''}`, children: "\u25BC" })] }), openMenu === index && ((0, jsx_runtime_1.jsx)("div", { className: "runningdropdown", children: menu.items.map((item, itemIndex) => ((0, jsx_runtime_1.jsx)("a", { href: "#", className: "runningdropdown-item", children: item }, itemIndex))) }))] }, index))) }) }), (0, jsx_runtime_1.jsx)("div", { className: "product-grid", children: products.map((product) => ((0, jsx_runtime_1.jsxs)("div", { className: "product-card", children: [(0, jsx_runtime_1.jsxs)("div", { className: "product-img-container", children: [(0, jsx_runtime_1.jsx)("img", { src: product.imagePath, alt: product.name, className: "product-img" }), product.tag && (0, jsx_runtime_1.jsx)("span", { className: "product-tag", children: product.tag })] }), (0, jsx_runtime_1.jsxs)("div", { className: "product-info", children: [(0, jsx_runtime_1.jsx)("p", { className: "product-tag", children: product.tag }), (0, jsx_runtime_1.jsx)("h3", { className: "product-name", children: product.name }), (0, jsx_runtime_1.jsx)("p", { className: "product-description", children: product.description }), (0, jsx_runtime_1.jsx)("p", { className: "product-colors", children: product.colors }), (0, jsx_runtime_1.jsx)("p", { className: "product-price", children: product.price })] })] }, product.id))) })] })] }));
};
exports.default = Running;
