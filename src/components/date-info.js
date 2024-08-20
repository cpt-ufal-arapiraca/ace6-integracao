function DateInfo(){

    let currentDate = new Date()
    let date = currentDate.toLocaleDateString("pt-BR", {month: "long", day:"2-digit", year: "numeric"});
    return <div className="p-4">
        <h3 className="font-md text-gray2">Hoje é dia <span className="font-bold ">{date}</span></h3>
    </div>
}
export default DateInfo;