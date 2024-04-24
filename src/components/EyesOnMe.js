// Code EyesOnMe Component Here

function EyesOnMe() {
    const handleFocus = () => {
        console.log('Good!')
        console.log('Focused')
    }
    const handleBlur = () => {
        console.log('Hey! Eyes on me!')
        console.log('Blurred')
    }
    
    return(
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;