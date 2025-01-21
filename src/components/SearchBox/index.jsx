const SearchBox = ({ onChangeHandler, Placeholder, type = "text" }) => {
    return (
        <>
            <div className="flex items-center justify-center pt-6 pb-10">
                <div className="relative w-full max-w-md">
                    <input
                        type={type}
                        placeholder={Placeholder}
                        onChange={onChangeHandler}
                        className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                        className="absolute inset-y-0 left-0 flex items-center pl-3">
                        🔍
                    </span>
                </div >
            </div >
        </>
    )
}

export default SearchBox