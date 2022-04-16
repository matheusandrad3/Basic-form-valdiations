const EmailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

export const validate =({email, password}) => {
    let errors = {};
    if (email === ''){
        errors.email="Email is required"
    }
    if (password===''){
        errors.password ='Password is required'
    }
    if (email && !validateEmail(email) ){
        errors.email = 'Email is not valid'
    }
    return errors;
}

const validateEmail =(email)=> {
    return EmailRegex.test(email);
}