import Card from '../Card/index';
const CardList = ({ monsters }) => {
    return (
        <div className="w-[85vw] my-0 mx-auto grid grid-cols-4 gap-5">
            {
                monsters.map((monster) => {
                    <Card monster={monster} key={monster.id} />
                })
            }
        </div>
    )
}
export default CardList