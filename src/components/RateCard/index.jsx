import starIcon from '../../assets/icon-star.svg'
import './RateCard.css'
const starList = [ null, null, null, null, null]


export default function RateCard({rate, classCSS}){
    return (
        <section className={`flex flex-col items-center bg-lightGrayishMagenta my-4 py-3 gap-2 rounded-md xl:flex-row xl:justify-evenly xl:w-96 xl:gap-6 xl:my-0 ${classCSS}`}>
            <div className='flex gap-2'>
                {/* This snippet of code iterate starlist array, and for each element, it's return the start icon */}
                {starList.map((_,idx)=>{
                    return <img key={idx} src={starIcon} alt='star'/>
                })}
            </div>
            <p className='text-veryDarkMagenta font-bold'>{rate}</p>
        </section>
    )
}