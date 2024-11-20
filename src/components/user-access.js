function UserAccess({accesses}){
    return <div className="flex flex-row gap-1">
        {accesses.map((access) => (
            <h1>{access}</h1>
        ))}
    </div>
}
export default UserAccess;