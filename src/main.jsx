import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Science from "./pages/Science.jsx";
import Solution from "./pages/Solution.jsx";
import Model from "./pages/3D.jsx";
import WaterCatch from "./pages/WaterCatch.jsx"
import GameQuiz from "./pages/GameQuiz.jsx";

import "./index.css";

import Home from "./pages/Home.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/-H2O/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            {
                path: "solution",
                element: <Solution />,
            },
            {
                path: "science",
                element: <Science />,
            },
            {
                path: "3d",
                element: <Model />,
            },
            {
                path: "game",
                element: <WaterCatch />,
            },
            {
                path: "quiz",
                element: <GameQuiz />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
