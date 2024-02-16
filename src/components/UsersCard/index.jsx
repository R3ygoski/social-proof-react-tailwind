import './UsersCard.css'

export default function UsersCard({name, opinion, avatar, classCSS}){
    return (
            <article className={`bg-veryDarkMagenta flex flex-col p-8 rounded-md xl:w-88 xl:h-60 ${classCSS}`}>
                <p></p>
                <div className='flex'>
                    <img src={avatar} alt="Avatar" className='rounded-full w-2/12 h-2/6 sm:w-10 sm:h-10 md:w-12 md:h-12'/>
                    <div className='ml-6'>
                        <p className='text-white font-semibold'>{name}</p>
                        <p className='text-softPink'>Verified Buyer</p>
                    </div>
                </div>
                <p className='text-white mt-8 font-semibold'>{opinion}</p>
            </article>
    )
}