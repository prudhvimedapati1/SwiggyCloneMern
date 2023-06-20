import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()


const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            {
                let newArr = [...state]
                for(let i in newArr){
                    if(newArr[i].id===action.id&&newArr[i].size===action.size){
                        newArr[i].number+=parseInt(action.number)/2;
                        newArr[i].price+=action.price/2;
                        return newArr;
                    }
                }
                return [...state,{id:action.id,name:action.name, number:action.number, size: action.size, price:action.price, img: action.img }]
            }
        case "REMOVE":
            {
                let  newArr = [...state]
                if(action.number>1){
                    let newPrice = action.price/(action.number);
                    newArr[action.index].price=newPrice*(action.number-1);
                    newArr[action.index].number=action.number-1;
                    return newArr;
                }
                newArr.splice(action.index,1);
                return newArr;
            } 
        case "DROP":{
            let newArr = []
            return newArr;
        } 
            
    }
}

export const CartProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,[])

  return (
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state} >
            {children}
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = ()=> useContext(CartStateContext)
export const useDispatchCart = ()=> useContext(CartDispatchContext)