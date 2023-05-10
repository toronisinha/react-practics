import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import data from './data.json';
import Card from './components/Card';
import Card2 from './components/classComponent';
import ReactBootstrap from './components/ReactBootstrap/ReactBootstrap';
import EvenHendler from './EvenHendlar/EvenHendler';
import Hook from './HookUseState/Hook';
import Faqs from './components/toggle/Faqs';
import DataFetch from './components/CustomHook/DataFetch';
// import Form from './Form/Form';
import FormUscFormik from './Form/FormUscFormik';
import Toggle from './components/toggle/Toggle';
import State from './State';
import Child from './components/Lifting/Child';
import Home from './components/Datapass/Home';
import Calculator from './components/calculator/calculator';


function App() {
  let items = [];
  //this is use adding...............................
  // for (let x = 0; x < data.length; x++) {
  //   items.push(<Card title={data[x].title} decs={data[x].dcsc} />);
  // }

  //this is use for mapping..................
  items = data.map((item) => <Card key={uuidv4()} title={item.title} decs={item.decs} />);
  // wher you are pass data from child to perent.....
  const hendleChildData = (childData) => {
    let values = [];
    values = childData;
  }
  return (
    <div>
      <h2 className='headerStyle'>React App</h2>

      {/* this is use component props ..............
      < Card title="my Fother r" decs="this in my Fother" />
      < Card title="my Mother" decs="this in my Mother" />
      < Card title="my Brother" decs="this in my Brother" /> */}
      <div className='block_container'>
        <div className='leftsection'><State /></div>
        <div className='rightsection'><Hook /></div>
        <div className='rightsection'><EvenHendler /></div>
      </div >
      <div className='block_container2'>
        <div className='leftsection'><Faqs /></div>
        {/* <div className='rightsection'><Form /></div> */}
        <div className='rightsection'><FormUscFormik /></div>
      </div >
      <div className='block_container2'>
        <div className='leftsection'><Home /></div>
        <div className='rightsection'><Calculator /></div>
      </div >

      <DataFetch />
      {items}

      <Card2 title="Class Component" />
      <Child onChildData={hendleChildData} />

      <ReactBootstrap />

    </div>
  );
}

export default App;
