import { resolve } from "path";

const pages = [
    { name: "main", path: resolve(__dirname, "../index.html") },
    { name: "page1", path: resolve(__dirname, "page1/page1.html") },
];

export default pages;

