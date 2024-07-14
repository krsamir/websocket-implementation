import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Route imports
const Products = lazy(() => import("./components/Products"));
const BiddingPage = lazy(() => import("./components/BiddingPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <BiddingPage />,
  },
]);
function Routes() {
  return (
    <React.Fragment>
      <Suspense fallback={<h2>Loading....</h2>}>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  );
}

export default Routes;
