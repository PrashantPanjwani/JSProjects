import {Link} from 'react-router-dom'
export default function Navbar(){
    return (
        <div className="flex items-center">
            <img className="h-11" src="" alt="" />
            <Link className="m-4 text-blue-600 text-3xl font-bold" to="/">Movies</Link>
           <Link className="text-blue-600 text-3xl font-bold" to="/watchlist">Watchlist</Link>
           
        </div>
    )
}