import '../styles/forgot.css'

function Forgot() {
    return (
        <div class = 'p-2 d-flex justify-content-center'>
            <div class='d-flex flex-column'>
                <label class='pb-3'>
                    email <input placeholder="Enter email" type='text'/>
                </label>
                <button class='btn'>Submit</button>
            </div>
        </div>
    )
}

export default Forgot