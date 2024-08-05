export default function Navbar(){
    return (
        <div className="flex">
            <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-LgjwzNyCwZOP8Acw2B1E1Ni2DJDoBLtjioW86H6Kw&s" alt="" />
            <a className="text-3xl font-bold underline" href="/">Movies</a>
            <a href="/watchlist">Watchlist</a>
        </div>
    )
}