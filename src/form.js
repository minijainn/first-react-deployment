import React,{Component} from 'react';



class Form extends React.Component {
    initialState={
        name:'',
        job:'',
    }
    // state=this.intialState
    state=this.initialState
        
    handleChange=event=>{
        const {name,value}=event.target
        this.setState({
            [name]:value,//to convert tht dynamic variable to a static strings
        })
    }

   

    submitForm=()=>{
        
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    render(){
        const {name,job}=this.state;
        return(
            <div className="container">
                 <form>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}/>
                <br/>
                <label htmlFor="job">Job</label>
                <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange}/>
                <br/>
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
            </div>
           
        );
           
        
    }
}
   
   
   


export default Form;