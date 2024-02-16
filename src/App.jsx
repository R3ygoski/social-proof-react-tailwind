import RateCard from './components/RateCard'
import UsersCard from './components/UsersCard'
import {dataList, dataRate} from './data'

export default function App() {
  return (
    <>
    <main className='px-6 py-24 xl:flex xl:flex-wrap xl:px-24 xl:h-screen 2xl:pl-36'>
      <div className='xl:w-5/12'>
        <h1 className='text-center text-veryDarkMagenta text-5xl font-bold mx-2 xl:text-start xl:text-6xl xl:ml-16'>10,000+ of our users love our products</h1>
        <p className='text-center text-darkGrayishMagenta text-lg mt-6 xl:text-start xl:w-10/12 xl:ml-16'>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
      </div>
      <section className='xl:flex xl:flex-col xl:justify-center xl:gap-6 xl:pl-32 xl:w-7/12 xl:h-72'>
        {dataRate.map((data)=>{
          return <RateCard key={data.id} {...data}/>
        })}
      </section>
      <br/>
      <section className='xl:flex xl:flex-col xl:align-top xl:flex-wrap xl:mx-16 xl:mt-12 xl:gap-8 xl:h-3/6'>
        {dataList.map((data)=>{
          return <UsersCard key={data.id} {...data}/>
        })}
      </section>
    </main>
    <footer className='text-center absolute bottom-0 text-xs'>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" className='text-veryDarkMagenta text-xs'>Frontend Mentor</a>. 
      Coded by <a href="https://github.com/R3ygoski" target='_blank' rel="noreferrer" className='text-veryDarkMagenta text-xs'>Bernardo Poggioni</a>.
    </footer>
    </>
  )
}
