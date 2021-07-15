

const skillReducer = (state=[],action) =>{



        if(action.type === 'ADD_SKILL'){

            
            return [...state,action.payload]

        }



    return state;

}

export default skillReducer;
