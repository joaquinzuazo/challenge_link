import HomeLayout from "../layout/HomeLayout/HomeLayout"
import HomePage from "../pages/HomePage/HomePage"
import ContactPage from "../pages/ContactPage/ContactPage"
import Pokemons from "../pages/Pokemons/Pokemons"
import Error404 from "../pages/Error404"

export const routes=[
    {
        path:'/',
        layout:HomeLayout,
        component:HomePage
    },
    {
        path:'/contact',
        layout:HomeLayout,
        component:ContactPage
    },
    {
        path:'/pokemons',
        layout:HomeLayout,
        component:Pokemons
    },
    {
        path:'*',
        layout:HomeLayout,
        component:Error404
    }
]