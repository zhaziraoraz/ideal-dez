import Building from "@/public/work/building.svg";
import Chemistry from "@/public/work/chemistry.svg";
import Note from "@/public/work/note.svg";
import Map from "@/public/work/map.svg";
import Sparkles from "@/public/work/sparkles.svg";


function Work (){
    const content = [
        {
            id:1,
            text: "Лицензирование и безопасные химикаты",
            icon: <Chemistry/>
        },
        {
            id:2,
            text: "Без ограничений по площади",
            icon: <Building/>
        },
        {
            id:3,
            text: "Работа по высоким стандартам",
            icon: <Note/>
        },
        {
            id:4,
            text:"Работаем по всему Казахстану",
            icon: <Map/>
        }
    ]
    return(
        <div className="work-area py-16 bg-[url('/work/Background.svg')] h-[400px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap py-16">
                {
                    content.map((item)=>(
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                            <div className="flex flex-col items-center">
                                <div className="flex rounded-md bg-white h-16 w-16 justify-center items-center">
                                    {item.icon}
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="text-center text-white font-bold mt-4">{item.text}</p>
                                    <Sparkles className="mb-8"/>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Work;