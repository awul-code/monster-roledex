const Card = ({ monster }) => {
    const { id, name, email } = monster
    return (
        <div className=" flex flex-col justify-center text-center">
            <figure className="w-full flex justify-center">
                <img
                    src={`https://robohash.org/${id}?set=set=2&size=180x180`}
                    alt={`${name}`}
                    className="object-contain w-full max-w-56"
                />
            </figure>
            <h2 className="mt-4 text-2xl text-white font-bold tracking-[0.1rem]">{name}</h2>
            <p className="mt-2 tex">{email.toLowerCase()}</p>
        </div>
    )
}
export default Card