import React,{Component} from 'react'
//learning functional and class components






// class table extends React.Component {
//     render(){
//         return(
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <td>Name</td>
//                         <td>Job</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Joe</td>
//                         <td>Manager</td>
//                     </tr>
//                     <tr>
//                         <td>Alice</td>
//                         <td>Developer</td>
//                     </tr>
//                 </tbody>
//             </table>
//         );
//     }
// }





const Tableheader=()=>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}


// const Tablebody=()=>{
//     return(
//         <tbody>
//             <tr>
//                 <td>Joey</td>
//                 <td>Accountant</td>
//             </tr>
//             <tr>
//                 <td>Sia</td>
//                 <td>Cloud engineer</td>
//             </tr>
//         </tbody>
//     );
// }


// const Tablebody=()=>{
//     return <tbody/>
// }


// const Tablebody=(props)=>{
//     const rows=props.charecterdata.map((row,index)=>{
//         return (
//             <tr key={index}>
//             <td>{row.name}</td>
//             <td>{row.job}</td>
//             </tr>
//         )
//     })
//     return <tbody>{rows}</tbody> 
// }


// class Table extends Component {
//     render() {
//         const {charecterdata}=this.props
       
//         return(
//             <table>
//                 <Tableheader/>
//                 <Tablebody charecterdata={charecterdata}/>
//             </table>
//         )
//     }
// }


const Tablebody=props=>{
    const rows=props.charecterdata.map((row,index)=>{
        return (
            <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={()=>props.removecharecter(index)}><span>Delete</span></button>
            </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody> 
}


const Table =(props)=>{
    const{charecterdata,removecharecter}=props
    return(
        <div className="container">
               <table>
            <Tableheader/>
            <Tablebody charecterdata={charecterdata} removecharecter={removecharecter}/>
        </table>
        </div>
     
    )
}




export default Table;