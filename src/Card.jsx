import profilePic from './assets/picture.jpg'

function Card(){
    return(<>
        <div className ={`
            border border-indigo-600 
            rounded-sm shadow-xl 
            p-6 m-8 justify-items-center 
            text-center max-w-[250px] bg-white
        `}
        >
            <img className ={`
                    max-width :60%
                    rounded-full
                    mb-[10px]
                `}
                src={profilePic} 
                alt="profile-picture">
            </img>
            <h2 className={`
                    font-bold
                    text-slate-700
                    font-[Arial,sans-serif]
                `}
                >Muhammad Trio Novrian
            </h2>
            <p className={`
                    text-left
                    p-[5px]
                    font-[Arial,sans-serif]
                `}
                >I'm student and i studying react
            </p>
        </div>
    
    
    </>);

};

export default Card;
