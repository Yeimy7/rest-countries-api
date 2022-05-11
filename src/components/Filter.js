import React from 'react'

export const Filter = () => {
    return (
        <section className='filter'>
            {/* <select className='select' name='continents' >
            <option className='option' value="" hidden selected > Filter by Region</option>
            <option className='option' value="africa"> <p className='res'>Africa</p></option>
            <option className='option' value="america"> <p className='res'>America</p></option>
            <option className='option' value="asia"> Asia</option>
            <option className='option' value="europe"> Europe</option>
            <option className='option' value="oceania"> Oceania</option>
        </select> */}

            <div className='select' tabIndex='1'>
                <input type='radio' className='option-select' id='opt0' name='continent' checked />
                <label for='opt0' className='option'>All</label>
                <input type='radio' className='option-select' id='opt1' name='continent' checked />
                <label for='opt1' className='option'>Africa</label>
                <input type='radio' className='option-select' id='opt2' name='continent' checked />
                <label for='opt2' className='option'>America</label>
                <input type='radio' className='option-select' id='opt3' name='continent' checked />
                <label for='opt3' className='option'>Asia</label>
                <input type='radio' className='option-select' id='opt4' name='continent' checked />
                <label for='opt4' className='option'>Europe</label>
                <input type='radio' className='option-select' id='opt5' name='continent' checked />
                <label for='opt5' className='option'>Oceania</label>
            </div>
        </section>
    )
}
