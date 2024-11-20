function RolesPills({roles}){
    return (
    <div className="flex flex-row gap-2">
        {roles.map((role) => (
            <div className={`${role == "Admin" ? "bg-[#0095DA]" : "bg-[#27AE60]"} rounded-full py-1 px-2 text-white font-bold`}>{role}</div>
        ))}
    </div>
    )
}
export default RolesPills;