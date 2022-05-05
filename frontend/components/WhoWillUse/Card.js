function Card(props){
    return(
        <div className="flex bg-white rounded-lg drop-shadow-sm w-[300px] h-[350px]">
            <div className="content flex flex-col p-4 items-center">
                <img src={props.img} className="w-[260px] h-[260px] min-h-[260px] min-w-[260px] hover:brightness-50"/>
                <h4 className="text-darkGray text-center mt-2">{props.name}</h4>
            </div>
        </div>
    )
}

export default Card;