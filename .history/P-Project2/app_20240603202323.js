let data = [
    {
        name: "Rolls Royce Cullinan",
        color: "White"
    },
    {
        name: "Rolls Royce Phantom",
        color: "Black"
    },
    {
        name: "Mercedes Benz S580",
        color: "White"
    },
    {
        name: "Mercedes Benz S500",
        color: "Black"
    },
    {
        name: "BMW 6 Series",
        color: "Red"
    },
    {
        name: "Jaguar F Pace",
        color: "Blue"
    },
    {
        name: "Range Rover Sport",
        color: "Black"
    },
    {
        name: "Pajero Sport",
        color: "Red"
    }

];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' is ' + item.color + ' color.' + '</div>';

});
info.innerHTML.join('\n');