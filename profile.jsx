import React, { useEffect, useState,  } from "react";


class Profile extends React.Component{
    
    render(){
        console.log("Profile render")
        return <div>
        
        <h1>Profile.... </h1>
        <Profile3/>
        <Profile2/>
        </div>
    }
}

class Profile2 extends React.Component{
    constructor(props){
        super(props)
            this.state={
                count:1,
                img:null 
            }
        console.log("Profile2 constructor")
    } 
    componentDidMount(){
       
    // this.setState({
    //         count:1000
    // })
    console.log("Profile2 Component did mount")
     
    }
    componentDidUpdate(){
        console.log("Profile2 updated")
    }
    render(){  
        console.log("Profile2 did render")
        return (
        <div>
        <button onClick={()=>{ let x = this.state.count+1
            this.setState({count:x})}} > click Me! = {this.state.count}</button>
        <h2>this is:{this.props.name}</h2> 
        </div>
    )
}
}

const Profile3 = ()=>{
    let [counts,setCounts] = useState(50)
    useEffect(()=>{
        console.log("profile3 useEffect")
        
        setCounts(counts*100)
        
    },[])
    console.log("Profile3 will render")
    return (
        
        <button onClick={()=>{
            
           setCounts(counts+1)
        }}>{counts}</button>
       
        
    )
}
export default Profile