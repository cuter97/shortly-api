import { useRef, useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import './style/style.scss'

const App = () => {
    const value = useRef(null)

    const [api, setApi] = useState([])

    const getInfo = async (value) => {
        try {

            const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
            const link = await data.json()

            if (!link.ok)
                throw Error("Link invalido")
            else
                setApi([...api, link])

        } catch (error) {
            console.log(error)
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
                        className="input-text" 
                        type="text" 
                        ref={value}
                        placeholder='Shorten a link here...'
                    ></input>
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
        </>
    )
}

export default App 