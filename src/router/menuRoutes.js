import Cart from "../components/pages/Cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category",
        path:"/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id:"cart",
        path:"/cart",
        Element: Cart
    },
    {
        id: "Detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: Checkout
    }
]