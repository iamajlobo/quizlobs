const DashboardCard = ({title,icon,count}) => {
    return(
        <div className="border border-gray-200 shadow-sm rounded-sm p-5 bg-white">
            <div>
                <h2 className="text-[12px]">{title}</h2>
            </div>
            <h3 className="text-2xl font-bold pt-2">
                0
            </h3>
        </div>
    );
}

export default DashboardCard;