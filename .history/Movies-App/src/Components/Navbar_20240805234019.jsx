import {Link} from 'react-router-dom'
export default function Navbar(){
    return (
        <div className="flex items-center">
            <img className="h-11" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fmovie_2503508&psig=AOvVaw3_-d6p24BXUAFwhidin66V&ust=1722967805330000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjXxLG53ocDFQAAAAAdAAAAABAE" alt="" />
            <Link className="m-4 text-blue-600 text-3xl font-bold" to="/">Movies</Link>
           <Link className="text-blue-600 text-3xl font-bold" to="/watchlist">Watchlist</Link>
           
        </div>
    )
}