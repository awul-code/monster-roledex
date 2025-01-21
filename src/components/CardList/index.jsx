import Card from '../Card/index';
const CardList = ({ monsters }) => {

    return (
        <div className="w-[85vw] my-0 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-40">
            {monsters.map((monster) => {
                return <Card monster={monster} key={monster.id} />
            })}
        </div>
    )
}
export default CardList