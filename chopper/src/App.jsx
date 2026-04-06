
import chopper from './assets/chopper.png'
import Navbar from './assets/components/navbar'
import Footer from './assets/components/footer'
import Card from './assets/components/Card'
function App() {
  

  return (
    <>
    {/* <img src={chopper} alt="Chopper" /> */}
    <Navbar/>
    <div className='cards'>
      <Card img={chopper} title="Card 1" description="This is the content for Card 1." />
      <Card title="Card 2" description="This is the content for Card 2." />
      <Card title="Card 3" description="This is the content for Card 3." />
      <Card title="Card 4" description="This is the content for Card 4." />
    </div>
    <Footer/>
    </>
  )
}

export default App
