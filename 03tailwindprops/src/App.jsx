import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-2xl p-5 mb-4'>Tailwind Test | Sugambhr | Vite</h1>


    <div className="flex justify-center gap-6">
    
        <Card username="Monkey D. Grap"  btnText="Bounty" img="https://i.seadn.io/gae/9bXcYeQwUc6B60-nTznh6EWzMWBC5UVfePcUR0kTDN9215ZGREfE76IkSesTKQp98foSuRMo3kgyXLsoVlklRfWsGfzB4jy8ZP8YnfI?auto=format&dpr=1&w=3840"/>
        <Card username="Monkey D. Luffy" btnText="Bounty" img="https://pbs.twimg.com/media/Gi_zY-DXYAEhbLM?format=jpg&name=900x900"/>


    </div>

        
    </>
  )
}

export default App
