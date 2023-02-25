import React from 'react'
import './HeroAboutStyle.css'
import { useReducer } from 'react'
const HeroAbout = (props) => {
    const FormInit ={
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    const FormErrorInit = {
        ErrorName :true,
        ErrorEmail :true,
        ErrorPhone :true,
        ErrorMessage :true,
        AllError: false,
    }

    const FormReducer = (state, action) => {
        switch (action.type) {
            case 'name':
                return {
                    ...state,
                    name: action.value
                }
            case 'email':
                return {
                    ...state,
                    email: action.value
                }
            case 'phone':
                return {
                    ...state,
                    phone: action.value
                }
            case 'message':
                return {
                    ...state,
                    message: action.value
                }
            case 'Reset':
                return {
                    ...FormInit
                }
            case 'default':
                return state
        }
    }


    const FormReducerError = (state, action) => {
        let IsValid= false;
        switch (action.type) {

            case 'ErrorName':
                console.log(action.payLoad.name.length)
            IsValid = action.payLoad.name.length > 0 ? true : false
            
            return {
                    ...state,
                    ...({
                        ErrorName: IsValid,
                        AllError: (state.ErrorName && state.ErrorEmail && state.ErrorPhone && state.ErrorMessage)
                    })  
                }
            case 'ErrorEmail':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                IsValid= ( action.payLoad.name.length > 0 && emailRegex.test(action.payLoad.email) )?  true : false
                return {
                    ...state,
                    ...({
                        ErrorEmail: IsValid,
                        AllError: (state.ErrorName && state.ErrorEmail && state.ErrorPhone && state.ErrorMessage)
                    }) 
                }
            case 'ErrorPhone':
                IsValid = action.payLoad.name.length > 0 ?  true : false
                return {
                    ...state,
                    ...({
                        ErrorPhone: IsValid,
                        AllError: (state.ErrorName && state.ErrorEmail && state.ErrorPhone && state.ErrorMessage)
                    }) 
                }
            case 'ErrorMessage':
                IsValid = action.payLoad.name.length > 0 ?  true : false
                return {
                    ...state,
                    ...({
                        ErrorMessage: IsValid,
                        AllError: (state.ErrorName && state.ErrorEmail && state.ErrorPhone && state.ErrorMessage)
                    }) 
                }
            case 'AllError':
                
                return {
                    ...state,
                    AllError: (state.ErrorName && state.ErrorEmail && state.ErrorPhone && state.ErrorMessage)
                }
            case 'default':
                return state
        }
    }

    const onButtonPress = (event) => {
        event.preventDefault()
        console.log(Form)
        console.log(FormError)
        if(FormError.AllError){
            setError({type: 'AllError', payLoad: Form})
            dispatch({type: 'Reset',payLoad: Form})
            console.log('Success')
        }else{
            console.log('Error')
        }
    }

    const [Form, dispatch] = useReducer(FormReducer, FormInit)
    const [FormError, setError] = useReducer(FormReducerError, FormErrorInit)

    return (
        <div className='HeroAboutContainer'
        style={{
            height: props.height,
        }}>
            <div className="HeroAboutWrapperContact"
            style={{
                gridTemplateColumns: props.gridTemplateColumns,
            
                
            }}>
            <img className='PatternAbout' src="/Designo/assets/about/desktop/bg-pattern-hero-about-desktop.svg" alt="bg-pattern" />

                <div className="HeroAboutContent1"
                style={{
                    gridArea: props.gridArea1,
                    backgroundColor: props.BackgroundColor
                }}
                >
                    <h1
                    style={{
                        color: props.colorh1
                    }}
                    >{props.title}</h1>
                    <p
                    style={{
                        color: props.colorp
                    }}
                    >
                        {props.description}
                    </p>
                </div>
                <form action="">
                    <label className='LabelForm' htmlFor="">
                        <input type="text" placeholder="Name"
                        onChange={(e) => dispatch({type: 'name', value: e.target.value})}
                        onBlur={() => setError({type: 'ErrorName', payLoad: Form})}
                        value={Form.name}
                        />
                        <p className='ErrorForm'
                        style = {{
                            display: FormError.ErrorName ? 'none' : 'block',
                            
                        }}
                        >Name is required</p>
                    </label>
                    <label className='LabelForm' htmlFor="">
                        <input type="email" placeholder="Email Address"
                        onChange={(e) => dispatch({type: 'email', value: e.target.value})}
                        onBlur={() => setError({type: 'ErrorEmail' , payLoad: Form})}
                        value={Form.email}
                        />
                        <p className='ErrorForm'
                        style = {{
                            
                            display: FormError.ErrorEmail ? 'none' : 'block',
                        }}
                        >Email is required</p>
                    </label>
                    <label className='LabelForm' htmlFor="">
                        <input type="number" placeholder="Phone"
                        onChange={(e) => dispatch({type: 'phone', value: e.target.value})}
                        onBlur={() => setError({type: 'ErrorPhone' , payLoad: Form})}
                        value={Form.phone}
                        />
                        <p className='ErrorForm'
                        style = {{
                            display: FormError.ErrorPhone ? 'none' : 'block',
                        }}
                        >Phone is required</p>
                    </label>
                    <label className='LabelForm' htmlFor="">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"
                        onChange={(e) => dispatch({type: 'message', value: e.target.value})}
                        onBlur={() => setError({type: 'ErrorMessage' , payLoad: Form})}
                        value={Form.message}
                        ></textarea>
                        <p className='ErrorForm'
                        style = {{
                            display: FormError.ErrorMessage ? 'none' : 'block',
                        }}
                        >Message is required</p>
                    </label>
                    <div className='LabelFormLast' htmlFor="">
                        <button onClick={onButtonPress}
                        className='HeroButton'>Submit</button></div>
                </form>
            </div>
        </div>
    )
}

export default HeroAbout
