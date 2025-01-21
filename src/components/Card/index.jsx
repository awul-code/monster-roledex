const Card = ({ monster }) => {
    const { id, name, email, address } = monster
    return (
        <div className=" flex flex-col justify-center text-center items-center">
            <figure className="w-full flex justify-center">
                <img
                    src={`https://robohash.org/${id}?set=set=2&size=180x180`}
                    alt={`${name}`}
                    className="object-contain w-full max-w-56"
                />
            </figure>
            <h2 className="mt-4 text-2xl text-white font-bold tracking-[0.1rem]">{name}</h2>
            <p className="mt-2 text-xl text-slate-900">{email.toLowerCase()}</p>
            <p className="mt-2 text-xs text-slate-800  w-1/2 text-center">📍 {address.street}</p>
        </div>
    )
}
export default Card