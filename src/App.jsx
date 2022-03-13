import { useEffect, useRef, useState } from "react"
import Boost from "./components/Boost"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Statistisc from "./components/Statistisc"
import './style/style.scss'

const storage = JSON.parse(localStorage.getItem('links'))


const App = () => {
    const value = useRef(null)

    const [api, setApi] = useState(storage || [])
    const [error, setError] = useState(false)

    useEffect(() => {
        localStorage.setItem('links', JSON.stringify(api))
    }, [api])
    

    const getInfo = async (value) => {
        try {

            const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
            const link = await data.json()

            if (!link.ok)
                throw Error("Link invalido")
            else
                setApi([...api, link])
                setError(false)

        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const mostrar = () => {
        const resultado = value.current.value
        getInfo(resultado)
        value.current.value = ""
    }

    return (
        <>
            <div style={{ width: '75%', margin: '0 auto' }}>
                <Navbar />
                <Header />
            </div>
            <div className="section">
                <div className="input">
                    <input 
                        className={(!error) ? 'input-text' : 'error'} 
                        type="text" 
                        ref={value}
                        placeholder='Shorten a link here...'
                    ></input>
                    <span className={!error ? 'span-error active-span' : 'span-error'}>Please add a valid link</span>
                    <button className="btn" onClick={() => mostrar()}>Shorten it!</button>
                </div>

                <div className="orden-cards">
                    {
                        api.map((param) =>
                            <Card key={param.result.code} props={param.result} />
                        )
                    }
                </div>
            </div>
            <Statistisc/>
            <Boost/>
            <Footer/>
        </>
    )
}

export default App 