
/*const iState ={

        name:"javeed",
        skills:['java','python','angular']



}
*/
const nameReducer = (state = '',action) =>{

    console.log(action)

    console.log(state)

            if(action.type === 'CHANGE_NAME'){

               /*  return {
                     ...state,
                    name: action.payload
                 
                 }
                 */

                 return action.payload
                

            }



        return state;

}

export default nameReducer;






