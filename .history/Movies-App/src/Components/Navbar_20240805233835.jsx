import {Link} from 'react-router-dom'
export default function Navbar(){
    return (
        <div className="flex items-center">
            <img className="h-11" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8K9H7b1G6A0Z5_size-movie-icon%2F&psig=AOvVaw22KARLyLa2Ify6aF92IY26&ust=1722794162326000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiyyNa43ocDFQAAAAAdAAAAABAE" alt="" />
            <Link className="m-4 text-blue-600 text-3xl font-bold" to="/">Movies</Link>
           <Link className="text-blue-600 text-3xl font-bold" to="/watchlist">Watchlist</Link>
           
        </div>
    )
}