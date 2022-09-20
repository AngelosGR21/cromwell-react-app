export const nameAndEmailValidator = (target, targetValue, inputStates, setInputStates) => {
    let isValid = undefined;
    if(target === "name") isValid = /^([a-z])+$/i.test(targetValue)
    else isValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(targetValue);

    if(!isValid) {
        setInputStates({
            ...inputStates,
            value: targetValue,
            error: true,
            isValid: false
        })
    }else{
        setInputStates({
            ...inputStates,
            value: targetValue,
            error: false,
            isValid: true
        })
    }
}


export const passwordValidator = (password, setPasswordConditions, setInputStates, confirmPasswordValue, setConfirmPasswordStates) => {
    const acceptedPassword = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})/)
    const hasOneUpperCase = password.match(/[A-Z]+/g)
    const hasOneLowerCase = password.match(/[a-z]+/g)
    const hasNumeric = password.match(/[0-9]+/g)
    const hasSpecialChar = password.match(/[!@#$%^&*]/g)
    const hasTenCharacters = password.length > 10

    setPasswordConditions({
        tenCharacters: hasTenCharacters,
        oneUpperCase: hasOneUpperCase,
        oneLowerCase: hasOneLowerCase,
        oneNumeric: hasNumeric,
        oneSpecialCharacter: hasSpecialChar
    })
    
    if(password !== confirmPasswordValue){
        setConfirmPasswordStates((prev) => {return  {...prev, isValid: false, error: true}});
    }else {
        setConfirmPasswordStates((prev) => {return  {...prev, isValid: true, error: false}})
    }

    if(acceptedPassword){
        setInputStates((prev) => { return {...prev, error: false, isValid: true}})
    }else {
        setInputStates((prev) => { return {...prev, error: true, isValid: false}})
    }

}