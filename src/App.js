import React from 'react';
import {Zoom, Fade} from 'react-reveal';
import './App.css';

function App() {

    return (
	<div className="App" style={{
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    width: '100vw',
	    height: '100vh'
	}}>
	    <div>
		<Zoom duration={2000}>
		    <h1 className="name"> Kabir Kuriyan </h1>
		</Zoom>
		<Fade bottom delay={3000}>
		    <a className="link"  href="mailto:kabirkuriyan.com" ><h4> email me </h4></a>
		    <a className="link" href="http://github.com/thekabistro/"> <h4> github </h4> </a>

		</Fade>
	    </div>
	</div>
    );
}

export default App;
