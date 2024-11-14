import { useState } from "react"

// export default ()=>{
//   let [Counter ,setCounter]=useState(0);
//   const [name , setName] = useState('')
//   return ( 
//     <>
//     <h1>{Counter}</h1>
//     <button onClick={()=>setCounter(Counter+1)}>add</button>
//     <button onClick={()=>setCounter(Counter - 1)}>minus</button>
//     <h1>Good evening {name} </h1>
//     <h2>{name}</h2>
//     <input type="text"placeholder="name.." onInput={(e)=>setName(e.target.value)} />

//     </>
//   )
// }
// export default ()=>{
//   let [span,setSpan] = useState('')
//   let [FirstName, setFirstName]=useState('')
//   let [LastName,setLastName]=useState('')
//   let [age,setAge]=useState(0)
//    return (
//     <>
  
//     <h2>
//       Good morning {FirstName}
//     </h2>

//     <input type="text" placeholder="name.." onInput={(e)=>setFirstName(e.target.value)} /> <br />
//     <input type="text" placeholder="lastname..." onInput={(e)=>setLastName(e.target.setLastName)} /><br />
//     <input type="age" placeholder="age" onInput={(e)=>(e.target.setAge)} />
//     <button  > Show </button>
//     <span>{span}</span>
    
//     </>
//    )
// }

// export default () => {

//   const [gender,setGender]=useState('');
//   const [country,setCountry]=useState('')
//   const [span, setSpan] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [age, setAge] = useState('');

//   const description = () => {
//     setSpan(`Hello, my name is ${firstName} ${lastName} and I am ${age} years old., and i am from ${country}, and i am a ${gender} `);
  
//   };

//   return (
//     <>
//       <h2>Good morning {firstName}</h2>

//       <input
//         type="text"
//         placeholder="name.."
//         onInput={(e) => setFirstName(e.target.value)}
//       /> 
//       <br />

//       <input
//         type="text"
//         placeholder="lastname..."
//         onInput={(e) => setLastName(e.target.value)}
//       />
//       <br />

//       <input
//         type="number"
//         placeholder="age"
//         onInput={(e) => setAge(e.target.value)}
//       />
//       <br />
//      <select onChange={(e)=>setGender(e.target.value)}>
//       <option value="">Select..</option>
//       <option value="Male">{gender}</option>
//       <option value="Female">{gender}</option>
//      </select>
//      <select onChange={(e)=> setCountry(e.target.value)}>
//       <option value="">Select..</option>
//       <option value="Germany">{country}</option>
//       <option value="United kingdom">{country}</option>
//       <option value="France">{country}</option>
//      </select>
//       <button onClick={description}>Show</button>
//       <span>{span}</span>
//     </>
//   );
// };



export default ()=>{
  const [width , setWidth] = useState(500);
  const [height , setHeight]=useState(500);
  const [color, setColor]=useState('');
  const [rotation, setRotation]=useState(0);
  const [border, setBorder]=useState(2) ;
  const [opacity, setOpacity]=useState(1) ;
  return (
    <>
 
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      overflow: 'hidden',
    }}>
      {/* Blurred Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://example.com/your-image.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(10px)',
        zIndex: -1,
      }} />

      {/* Interactive Box */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#ffffffbb',
        padding: '20px',
        borderRadius: '8px',
      }}>
        <input
          id="width"
          type="number"
          placeholder="Width (px)"
          onInput={(e) => setWidth(e.target.value)}
        />
        <input
          id="height"
          type="number"
          placeholder="Height (px)"
          onInput={(e) => setHeight(e.target.value)}
        />
        <input
          id="color"
          type="color"
          placeholder="Color"
          onInput={(e) => setColor(e.target.value)}
        />
        <input
          id="rotation"
          type="range"
          min="0"
          max="360"
          value={rotation}
          onInput={(e) => setRotation(e.target.value)}
        />
        <input
          id="border"
          type="number"
          placeholder="Border Width (px)"
          onInput={(e) => setBorder(e.target.value)}
        />
        <input
          id="opacity"
          type="range"
          min="0"
          max="1"
          step="0.1"
          placeholder="Opacity"
          onInput={(e) => setOpacity(e.target.value)}
        />
        
        <div style={{
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`,
          opacity: opacity,
          border: `${border}px solid #000`,
          transform: `rotate(${rotation}deg)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease',
        }}>
          <p style={{ color: '#333' }}>Hello</p>
        </div>
      </div>
    </div>
  

    </>
    
  )
}