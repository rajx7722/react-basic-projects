// function CustomRender(ReactElement, container){
//     const DOMelement = document.createElement(ReactElement.type)
//     DOMelement.innerHTML= ReactElement.children
//     DOMelement.setAttribute('href' , ReactElement.props.href)
//     DOMelement.setAttribute('target', ReactElement.props.target )

//     container.append(DOMelement)
// }
//now new method ki har attribute set na karna pade

function CustomRender(ReactElement , container){
    const DOMelement = document.createElement(ReactElement.type)
    DOMelement.innerHTML = ReactElement.children
    for(const prop in ReactElement.props){
        DOMelement.setAttribute(prop, ReactElement.props[prop])
    }
    container.appendChild(DOMelement)
}
//react ko html me <> wala syntax saamjh ni aata wo ye neeche waale syntax ko samjhta 
//hence the name jsx
const ReactElement ={
       type : 'a',
       props:{
            href : "www.google.com",
            target: '_blank'
       },
       children : 'click me to visit google'
}
//ab ye jo humne banaya hai wo chal to jayega custom render but vite me jake karo to waha to set render hai 
//so use react.createElement and uska format dekho react element ka

const mainContainer = document.getElementById('root');

CustomRender( ReactElement , mainContainer);

