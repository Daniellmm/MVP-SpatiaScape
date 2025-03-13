const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] shadow-lg rounded-xl mx-5 flex-col p-6 flex justify-start items-start gap-4">
            <div className="bg-white/20 p-4 rounded-lg">
                <span className="text-3xl text-white">{icon}</span>
            </div>
            <div className="">
                <h3 className="text-md text-white font-semibold">{title}</h3>
                <p className="text-white text-sm pt-2">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
