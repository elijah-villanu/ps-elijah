interface TechItemProps {
    item: string;
}

function TechItem({item}: TechItemProps) {
    return(
        <div className="border-1 p-1 rounded-sm text-sm">
            {item}
        </div>
    )
}

export default TechItem