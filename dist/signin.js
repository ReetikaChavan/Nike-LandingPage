"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
require("./loginstyle.css");
const NikeSignInPage = () => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        // Redirect to afterlogin if the user is already authenticated
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/afterlogin');
        }
    }, [navigate]);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        e.preventDefault();
        setError('');
        try {
            console.log('Login Request:', { email, password });
            const response = yield axios_1.default.post('/api/auth/login', {
                email,
                password,
            });
            console.log('Login Response:', response.data);
            if (response.data.token) {
                console.log('Token received, navigating...');
                localStorage.setItem('token', response.data.token);
                navigate('/afterlogin');
            }
        }
        catch (err) {
            console.error('Login Error:', err);
            const error = err;
            setError(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || 'Login failed');
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "nikeLoginContainer", children: (0, jsx_runtime_1.jsxs)("div", { className: "nikePageWrapper", children: [(0, jsx_runtime_1.jsx)("div", { className: "nikeSloganContainer", children: (0, jsx_runtime_1.jsx)("img", { className: "nikeSloganImage", src: "./media/jdt.png", alt: "Nike Slogan" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "nikeSignInCard", children: [(0, jsx_runtime_1.jsx)("div", { className: "nikeLogoContainer", children: (0, jsx_runtime_1.jsx)("img", { className: "nikeLogo", src: "/media/logo1.png", alt: "Nike Logo" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "nikeForm", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "nikeSignInTitle", children: ["IT'S BETTER AS", (0, jsx_runtime_1.jsx)("br", {}), "A MEMBER"] }), error && (0, jsx_runtime_1.jsx)("div", { className: "nikeErrorMessage", children: error }), (0, jsx_runtime_1.jsxs)("div", { className: "nikeInputGroup", children: [(0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "Email address", value: email, onChange: (e) => setEmail(e.target.value), className: "nikeInputField", required: true }), (0, jsx_runtime_1.jsx)("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), className: "nikeInputField", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "nikeRememberForgot", children: [(0, jsx_runtime_1.jsxs)("label", { className: "nikeCheckbox", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: "nikeCheckboxInput" }), "Keep me signed in"] }), (0, jsx_runtime_1.jsx)("a", { href: "#", className: "nikeForgotPassword", children: "Forgot password?" })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "nikeSubmitButton", children: "SIGN IN" }), (0, jsx_runtime_1.jsxs)("div", { className: "nikeSignUpText", children: ["Not a Member?", ' ', (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", className: "nikeSignUpLink", children: "Join Us" })] })] })] })] }) }));
};
exports.default = NikeSignInPage;
