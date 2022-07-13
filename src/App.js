import React,{ Component} from 'react'
import Table from './table'
import Form from './form'



class App extends Component {
        

    state={
        charecters:[
                
            ]
    }
    handleSubmit=(charecter)=>{
        this.setState({charecters:[...this.state.charecters,charecter]})
    }
   

    removecharecter=(index)=>{
        const {charecters}=this.state
        this.setState({
            charecters:charecters.filter((charecter,i)=>{
            return i!==index
        }),
    })
    }

    render() {
      // const username="mini";
      // const head2=<h2>'welcoming is also sooo difficult ughh'</h2>
        //   const name = 'Tania'
        //   const heading = <span> {name}</span>
        //   return (
        //     <div className="App">
        //       <h1>Hello, React</h1>
        //       <div>Welcome,{heading}</div>
        //       <Table/>
        //     </div>
        //   )
        // return(
        //     <div className="container">
        //         <Table charecterdata={charecters}/>
        //     </div>
        // );
        const{charecters}=this.state
        return(
            <div>
                <h1><center>Deets...</center></h1>
                <Table charecterdata={charecters} removecharecter={this.removecharecter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
  }

//  const username="mini-jainn";
// // function getfirstname(username){
// //     return username.split("-");
// // }
// // const feeling="angry";
// // const items="full";
// // let numitems=0;//0=>false,>0=>true
// // function getCartItem(){
// //     if(numitems)
// //         return "Full"
    
// //     else 
// //         return  "empty"
    
// // }


// //  let isuserloggedin=false;
// //   isuserloggedin=true;


// //  let counter=0;

// const smileyArr=[
//     {
//         smiley:"❤",
//         text:"love"
//     },
//     {
//         smiley:"✌",
//         text:"peace"
//     },
//     {
//         smiley:"😂",
//         text:"laugh"
//     }

// ]

// const smileyMapper=item=>(
//     <Smollsmilie smilie={item.smiley} text={item.text}/>
//     )
// class Smollsmilie extends React.Component{
//     render(){
//         return(
//             <h1>{this.props.smilie}<small>{this.props.text}</small></h1>
//         )
//     }
// }
// class App extends React.Component {

//     // state={
//     //     counter:0
//     // }

//     // likeButtonHandler=()=>{
//     //     this.setState({counter:this.state.counter+1})//pass an object//this.setstate=>react.component
//     //     // console.log("button clicked ",counter);
//     // }

//     // state={
//     //     counter:0
//     // }
//     // addsugar=()=>{
//     //     this.setState({counter:this.state.counter+1})
//     // }
//     // removesugar=()=>{
//     //     this.setState({counter:this.state.counter-1})
//     // }

//     // render(){
//     //     // if(feeling==="angry"){
//     //     //     return <h1 style={{backgroundColor:"red"}}>Welcome {getfirstname(username)[0]} you are feeling 🤬</h1>
//     //     // }
//     //     // else if(feeling==="happy"){
//     //     //     return <h1 style={{backgroundColor:"blue"}}> Welcome {getfirstname(username)[0]} you are feeling 😊</h1>
//     //     // }
     
//     //         // return (
//     //         //     <div>
//     //         //         <h1>Your Cart</h1>
//     //         //         <h2>Status:{getCartItem()}</h2>
//     //         //     </div>
//     //         // );
        

            
//     //         // return (
//     //         //     <div>
//     //         //        {
//     //         //         isuserloggedin && <h1>hey {username}</h1>
//     //         //        }
//     //         //        {
//     //         //         isuserloggedin || <h1>please login</h1>
//     //         //        }
//     //         //     </div>
//     //         // )

//     //         // return(
//     //         //     <div>
//     //         //         <button onClick={this.likeButtonHandler}>❤</button>
//     //         //         <h2>{this.state.counter}</h2>
//     //         //     </div>
//     //         // )

//     //         // return(
//     //         //     <div>
//     //         //     <h2>sugar</h2>
//     //         //     <button onClick={this.addsugar}>Add to cart</button>
//     //         //     <button onClick={this.removesugar}>remove from cart</button>
//     //         //     <h2>Cart status {this.state.counter}</h2>
//     //         //     </div>
               
//     //         // );

//     //         return(
//     //             <div>
//     //                 {  
//     //                 smileyArr.map(smileyMapper)
//     //                 }
//     //                  {/*anything within {} is javascript  */}
//     //             </div>

//     //         )
        
       
      
//     // }
// }

export default App