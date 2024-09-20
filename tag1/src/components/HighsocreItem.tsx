interface HighsocreItemProps{
    name: string;
    points: number;
    icon: string
}

function HighsocreItem(props: HighsocreItemProps){
    return <div>
        <div>#1</div>
        <div>{props.name} ({props.points} pts)</div>
        <div>{props.icon}</div>
    </div>
}

export default HighsocreItem