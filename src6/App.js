import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {anotherName} from './actions/myaction'
import {addMoreSkill} from './actions/myaction'

function App(props) {

  console.log(props.myname)
  console.log(props)

    const myskills = props.myskills.map(item => {

      return <h3>{item}</h3>

    })

  return (
    <div className="App">
    <h1>App Component</h1>
    <h1>My Name is :{props.myname} </h1>
    <h1>My Skills : {myskills}</h1>
    

    <button onClick={()=>{props.changeName()}}>Change It</button>
    <button onClick={()=>{props.addSkill('Android')}}>Add Skill</button>
    
    </div>
  );
}




const mapStateToProps = (state) =>{ // read data from store 

  console.log('after state update ',state)

  return {

    myname : state.name,
    myskills : state.skill
  }

}

const mapDispatchToProps = (dispatch) =>{   // to update data to the store via dispatch(action)


    return {

          changeName : ()=>{ dispatch(anotherName())},
          addSkill : (s1)=>{ dispatch(addMoreSkill(s1)) }
    }


}

 /*const CHANGE_NAME = {  // ACTION 

  type:'CHANGE_NAME',
  payload:"king"

}

*/









export default  connect(mapStateToProps,mapDispatchToProps)(App);
