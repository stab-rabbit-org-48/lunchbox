// import React, { useEffect, useState } from 'react';
// import { fetchRecipes } from '../apiService';
// // import smallLogo from '../assets/../assets/logotransparent.png';
// import transparentLogo from '../assets/logotransparent.png'
// import '../styles/Home.css';
// import { Link } from 'react-router-dom';

// const Timer = () => {

//     const [menu, setMenu] = useState("Timer");

//     return (
       
       
//        <div>
//         <head>
//             <title>Timer</title>
//                 <link rel="stylesheet" href="account.css"></link>
//         </head>
//         <div className="home-header">
//         <div className="logo">
//             <img src={transparentLogo} alt="logo" />
//         </div>
//         <nav className="navBar">
//             <div className="navBarButtons">
//                 <button onClick={() => { setMenu("Nutrition") }}>
//                     <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Nutrition'>Nutrition</Link>
//                     {menu === "Nutrition" ? <hr /> : <></>}
//                 </button>
//                 <button onClick={() => { setMenu("Recipe") }}>
//                     <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Recipe'>Recipe</Link>
//                     {menu === "Recipe" ? <hr /> : <></>}
//                 </button>
//                 <button onClick={() => { setMenu("TBD") }}>
//                     <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/TBD'>Timer</Link>
//                     {menu === "TBD" ? <hr /> : <></>}
//                 </button>
//                 <button onClick={() => { setMenu("Account") }}>
//                     <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Account'>Account</Link>
//                     {menu === "Account" ? <hr /> : <></>}
//                 </button>
//             </div>
//         </nav>
//     </div>
//     </div>
//     )
// }

// export default Timer;