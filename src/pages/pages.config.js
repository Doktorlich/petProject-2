import { resolve } from "path";

const pages = [
    { name: "main", path: resolve(__dirname, "../../index.html") },
    { name: "about", path: resolve(__dirname, "about/about.html") },
];

export default pages;
