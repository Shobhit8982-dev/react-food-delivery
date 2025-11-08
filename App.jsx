import React from "react";
import ReactDOM from 'react-dom/client'
// React Element
const heading = (
    <h1 classNmae = 'head' tabIndex={5}>react element using JSX </h1>
);

//react functional componenet
const HeadingComponent = () => (
    <h1>react functional componenet</h1>
)













    // const heading = React.createElement('h1', {id:'heading'}, 'hello from react'); 
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading);

    // console.log(heading) //gives an object

// <div id='parent'>
//     <div id='child'>
//         <h1>i am h1 tag</h1>
//         <h1>I am h1 tag</h1>
//     </div>
//     <div id='child2'>
//         <h1>i am h1 tag</h1>
//         <h1>I am h1 tag</h1>
//     </div>
// </div>

// React element(object) => HTML (Browser understands)

// const header = React.createElement('div', {id:'parent'}, [
//     React.createElement('div',{key:'c1',id:'child'},[
//         React.createElement('h1',{key:'1'},'I am a H1 Tag'),
//         React.createElement('h1',{key:'2'},'I am a H1 Tag')
//     ]),
//     React.createElement('div',{key:'c2',id:'child2'},[
//         React.createElement('h1',{key:'3'},'I am a H1 Tag'),
//         React.createElement('h1',{key:'4'},'I am a H1 Tag')
//     ])
// ]);

// const Header = () => (
//   <div id="parent">
//     <div id="child">
//       <h1 key="h1-1">I am a H1 Tag</h1>
//       <h1 key="h1-2">I am a H1 Tag</h1>
//     </div>
//     <div id="child2">
//       <h1 key="h1-3">I am a H1 Tag</h1>
//       <h1 key="h1-4">I am a H1 Tag</h1>
//     </div>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('Header'));
// // root.render(Header);
// root.render(<Header />)