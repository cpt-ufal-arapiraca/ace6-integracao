import SystemCard from "./system-card";
import background from "../../assets/images/login.png"
function SystemArea(){
    return(
        <div className="w-4/5 p-8 grid grid-cols-3 gap-12 py-24 px-36">
            <SystemCard
            title="LECC"
            description="Laboratório de Ensino de Ciência da Computação"
            image={background}
            />
            <SystemCard
            title="LECC"
            description="Laboratório de Ensino de Ciência da Computação"
            image={background}
            />
                        <SystemCard
            title="LECC"
            description="Laboratório de Ensino de Ciência da Computação"
            image={background}
            />
                                    <SystemCard
            title="LECC"
            description="Laboratório de Ensino de Ciência da Computação"
            image={background}
            />
        </div>
    )
}
export default SystemArea;