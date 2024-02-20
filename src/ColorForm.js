import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        //eliminate default behavior of form submittal
        e.preventDefault()
        //addColor, the function we just built, should be available within props
        props.addColor(input)

        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm
