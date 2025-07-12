import React from 'react';
import './App.css'
import map from './map.jpg'
import {villages} from './villages.js'


export function VillagesPoints({setShow, setCurrentId}){
    

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
      }

    
  return <div className="map">
    <img src={map}  alt="noMap" ></img>
    <Village /* 4*/typeOfMarker='red' top={8} left={4} currentInfo={currentInfo} id={1}/>
    <Village /* 5*/typeOfMarker='red' top={10} left={21} currentInfo={currentInfo} id={2}/>
    <Village /* 20*/typeOfMarker='red' top={17} left={54} currentInfo={currentInfo} id={3}/>
    <Village /* 21*/typeOfMarker='black' top={22} left={61} currentInfo={currentInfo} id={4}/>
    <Village /* 38 нема на карті*/typeOfMarker='yellow' top={22} left={22} currentInfo={currentInfo} id={5}/>
    <Village /* 45*/typeOfMarker='yellow' top={25} left={63} currentInfo={currentInfo} id={6}/>

    <Village /* 53*/typeOfMarker='red' top={27} left={2} currentInfo={currentInfo} id={7}/>
    
    <Village /* 58*/typeOfMarker='red' top={31} left={40} currentInfo={currentInfo} id={8}/>
    <Village /* 62*/typeOfMarker='red' top={35} left={62} currentInfo={currentInfo} id={9}/>
    <Village /* 71*/typeOfMarker='red' top={34} left={15} currentInfo={currentInfo} id={10}/>

    <Village /* 73*/typeOfMarker='yellow' top={39} left={77} currentInfo={currentInfo} id={11}/>
    <Village /* 79*/typeOfMarker='red' top={37} left={10} currentInfo={currentInfo} id={12}/>
    <Village /* 80*/typeOfMarker='red' top={40} left={6} currentInfo={currentInfo} id={13}/>
    <Village /* 81*/typeOfMarker='red' top={37} left={17} currentInfo={currentInfo} id={14}/>
    <Village /* 83*/typeOfMarker='red' top={40} left={21} currentInfo={currentInfo} id={15}/>

    <Village /* 86*/typeOfMarker='yellow' top={38} left={55} currentInfo={currentInfo} id={16}/>
    <Village /* 96*/typeOfMarker='red' top={45} left={14} currentInfo={currentInfo} id={17}/>
    <Village /* 97*/typeOfMarker='red' top={46} left={26} currentInfo={currentInfo} id={18}/>
    <Village /* 98*/typeOfMarker='red' top={47} left={32} currentInfo={currentInfo} id={19}/>
    <Village /* 100*/typeOfMarker='yellow' top={47} left={63} currentInfo={currentInfo} id={20}/>

    <Village /* 107*/typeOfMarker='red' top={50} left={15} currentInfo={currentInfo} id={21}/>
    <Village /* 109*/typeOfMarker='green' top={52} left={32} currentInfo={currentInfo} id={22}/>
    <Village /* 110*/typeOfMarker='red' top={54} left={45} currentInfo={currentInfo} id={23}/>
    <Village /* 121*/typeOfMarker='blue' top={55} left={8} currentInfo={currentInfo} id={24}/>
    <Village /* 122*/typeOfMarker='green' top={55} left={17} currentInfo={currentInfo} id={25}/>

    <Village /* 123*/typeOfMarker='red' top={56} left={25} currentInfo={currentInfo} id={26}/>
    <Village /* 124*/typeOfMarker='green' top={56} left={32.5} currentInfo={currentInfo} id={27}/>
    <Village /* 127*/typeOfMarker='green' top={62} left={69} currentInfo={currentInfo} id={28}/>
    <Village /* 143*/typeOfMarker='purple' top={61} left={13} currentInfo={currentInfo} id={29}/>
    <Village /* 144*/typeOfMarker='black' top={62} left={19} currentInfo={currentInfo} id={30}/>

    <Village /* 145*/typeOfMarker='red' top={62} left={26} currentInfo={currentInfo} id={31}/>
    <Village /* 146*/typeOfMarker='yellow' top={64} left={32} currentInfo={currentInfo} id={32}/>
    <Village /* 147*/typeOfMarker='red' top={64} left={42} currentInfo={currentInfo} id={33}/>
    <Village /* 162*/typeOfMarker='red' top={65} left={12} currentInfo={currentInfo} id={34}/>
    <Village /* 163*/typeOfMarker='red' top={67} left={17} currentInfo={currentInfo} id={35}/>

    <Village /* 166*/typeOfMarker='yellow' top={70} left={45} currentInfo={currentInfo} id={36}/>
    <Village /* 199*/typeOfMarker='yellow' top={76} left={27} currentInfo={currentInfo} id={37}/>
    <Village /* 200*/typeOfMarker='yellow' top={77} left={33} currentInfo={currentInfo} id={38}/>
    

    
    
  </div>
}

function Village({top, left, typeOfMarker, currentInfo, id}){
    
    let village = villages.filter(item => item.id === id);
    let name = village[0].name.props.children[0]; 
 
    console.log(name);
    

    return <div style={{top: top + '%', left: left + '%'}}>
      <span className={typeOfMarker + ' villagesSpan'} style={{top: top + '%', left: left + '%'}}  onClick={() => currentInfo(id)}></span>
      <span className="nameOfVillage" style={{top: top - 0.66 + '%', left: left + 1.60 + '%'}}>{name}</span>
    </div>
  }
