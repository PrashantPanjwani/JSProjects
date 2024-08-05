import {Link} from 'react-router-dom'
export default function Navbar(){
    return (
        <div className="flex items-center">
            <img className="h-11" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-LgjwzNyCwZOP8Acw2B1E1Ni2DJDoBLtjioW86H6Kw&s" alt="" />
            <link to="/"></link>
            <a className="m-4 text-blue-600 text-3xl font-bold" href="/">Movies</a>
            <a className="text-blue-600 text-3xl font-bold" href="/watchlist">Watchlist</a>
        </div>
    )
}