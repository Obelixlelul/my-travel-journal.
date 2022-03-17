import Item from './Item.js'
import data from '../data';

// console.log(data);

export default function Main() {
    const places = data.map(place => {
        return (
            <Item
                key={Math.random()}
                data={place}
            />
        )
    })


    return (
        <>
            {places}
        </>
    );
}