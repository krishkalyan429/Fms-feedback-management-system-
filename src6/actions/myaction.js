


export const setName = (name)=>{  // ACTION CREATORS


    return {  // ACTION 

        type:'CHANGE_NAME',
        payload:name
      
      }

}


/*export const anotherName = () =>{ // action creator
    return (dispatch)=>{  // async call

            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res2 =>{

                dispatch({type:'CHANGE_NAME',payload:res2[0].name})
            })

    }



}
*/

// first action creators
export const anotherName = () =>{

        return async (dispatch) =>{

            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const res2 = await data.json();
            dispatch({type:'CHANGE_NAME',payload:res2[0].name})




        }
}


// second action creator

export const addMoreSkill = (s1) =>{

        return {

               type:'ADD_SKILL',
               payload:s1

        }



}





