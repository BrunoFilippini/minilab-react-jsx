import imgProfile from '../assets/images/puppy.jpg'

export function Profile (props) {
    return (
        <div class="card mb-3">

            <img src={imgProfile} class="card-img-top" alt="Cute Puppy" />

            <div class="card-body">

                <h5 class="card-title">Cute Puppy</h5>

                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit viverra velit consectetur mollis. Proin molestie, nunc a semper congue, lectus est tempus massa, eu efficitur eros lacus vel nunc. Nullam dapibus a neque nec aliquam. Fusce non ante sed elit vehicula eleifend. Sed felis tortor, accumsan at augue.</p>
                
            </div>

        </div>
    )
    
}