const DashboardCard = ({title,icon,count}) => {
    return(
        <div className="border border-gray-200 shadow-sm hover:shadow-lg rounded-sm p-5 bg-white">
            <div className="flex justify-between items-center ">
                <h2 className="text-[12px]">{title}</h2>
                <img className="w-5" src={icon} alt="An Icon" />
            </div>
            <h3 className="text-2xl font-bold pt-2">
                {count}
            </h3>
        </div>
    );
}

export default DashboardCard;