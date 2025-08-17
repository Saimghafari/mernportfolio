import React from 'react'
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"

function Portfolio() {
    return (
        <>
            <div className='portfolio'>
                <h1 className='port'>My Work</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto max-w-6xl pb-10 folio">

                    <div className="contain">
                        <img src={img3} className='ig' />
                        <div className="overlay">
                            <div className="tex">
                                <h1>Social Media App</h1>
                                <br />
                                <p className='detail'>The app that connect you to the <br/> talented people around the world <br/> Download at from playstore or appstore </p>
                            </div>
                        </div>
                    </div>


                    <div className="contai">
                        <img src={img4} className='ige' />
                        <div className="overlays">
                            <div className="texx">
                                <h1>Online Shopping App</h1>
                                <br />
                                <p className='details'>The app that connect you to the <br/> talented people around the world <br/> Download at from playstore or appstore </p>
                            </div>
                        </div>
                    </div>


                    <div className="contain">
                        <img src={img5} className='ig' />
                        <div className="overlay">
                            <div className="tex">
                                <h1>Musical App</h1>
                                <br />
                                <p className='detail'>The app that connect you to the <br/> talented people around the world <br/> Download at from playstore or appstore </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio