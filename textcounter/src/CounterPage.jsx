import React, { useState } from 'react'
import './style.css'

export default function CounterPage() {
    const [text, setText] = useState('');

    const handleUpper = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleLower = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapitalize = () => {
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
        }
        setText(arr.join(" "));
    }
    const handleSelect = () => {
        try {
            const input = document.getElementById("Textarea");
            input.focus();
            input.select();
            navigator.clipboard.writeText(text);
        }
        catch (ex) {
            alert('sory');
        }
    }
    return (
        <>
            <div className='container'>
                <form>
                    <h4 className='text-center m-4'>Word Counter App</h4>
                    <div className="mb-3 p-3 m-4">
                        <textarea className="form-control" id="Textarea" rows="13" value={text} onChange={(event) => { setText(event.target.value) }}></textarea>
                    </div>
                    <div className="btn-group mx-5" role="group" aria-label="Basic radio toggle button group">

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={handleUpper} ></input>
                        <label className="btn btn-outline-warning" htmlFor="btnradio1">Upper Case</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={handleLower}></input>
                        <label className="btn btn-outline-warning" htmlFor="btnradio2">Lower Case</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={handleCapitalize}></input>
                        <label className="btn btn-outline-warning" htmlFor="btnradio3">Capitalize</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onClick={handleSelect} ></input>
                        <label className="btn btn-outline-warning" htmlFor="btnradio4">Select&Copy</label>
                    </div>
                </form>
            </div>
            <div className='container'>
                <h5 className='m-4 mx-5'>Your Text Summary</h5>
                <div className="container text-center">
                    <div className="row-8 m-3">
                        <div className="col ">Character = {text.length}</div>
                        <div className="col ">Words = {text.split(" ").length - 1}</div>
                        <div className="col ">Sentence = {text.split(".").length - 1}</div>
                        <div className="col ">Spaces = {text.split(" ").length - 1}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
