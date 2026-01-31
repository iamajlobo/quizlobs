
const FeatureCards = ({icon,title,description}) => {
    return (
        <div className="border border-gray-100 shadow-sm rounded-3xl p-8">
            <img className='w-8 py-2' src={icon} alt="Featured Icon" />
            <h3 className="text-md font-semibold">{title}</h3>
            <p className='text-sm text-gray-500 py-2'>{description}</p>
        </div>
    );
}

export default FeatureCards;