const findErrors = (obj, errors, isErrorChanged, rules) => {
    const properties = Object.keys(obj)
    properties.forEach((property) => {
        if (rules) {
            if (rules.includes(property)) {
                if (property === 'email') {
                    if (obj[property] === '') {
                        errors[property] = 'Required'
                        isErrorChanged = true
                    } else if (!obj[property].includes('@')) {
                        errors[property] = 'Invalid Email'
                        isErrorChanged = true
                    }

                } else {
                    if (obj[property] === '') {
                        errors[property] = `${property.charAt(0).toUpperCase() + property.slice(1)} is Required`
                        isErrorChanged = true
                    }
                }
            }
        } else {
            if (property === 'email') {
                if (obj[property] === '') {
                    errors[property] = 'Email is Required'
                    isErrorChanged = true
                } else if (!obj[property].includes('@')) {
                    errors[property] = 'Invalid Email'
                    isErrorChanged = true
                }
            } else {
                if (obj[property] === '') {
                    errors[property] = `${property.charAt(0).toUpperCase() + property.slice(1)} is Required`
                    isErrorChanged = true
                }
            }
        }

    })

    return {errors, isErrorChanged}
}


const formValidation = (values, errors, rules = '') => {
    let isErrorChanged = false
    const indexes = []
    if (Array.isArray(values)) {
        if (values.length) {
            values.forEach((item, index) => {
                const errorsFound = findErrors(item, errors[index], isErrorChanged, rules)
                if (errorsFound.isErrorChanged) {
                    indexes.push({index, error: errorsFound.errors})
                    isErrorChanged = errorsFound.isErrorChanged
                }
            })
        }

        return {isErrorChanged, errors: indexes}
    } else {
        return findErrors(values, errors, isErrorChanged, rules)
    }
}
export default formValidation




