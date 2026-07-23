import Profilecard from "./Profilecard.jsx"

const Profile=()=>{
    return(
        <div>
            <Profilecard 
            name="nithesh"
            age={30}
            greeting={
                <strong>Hi alice greetings</strong>
                }
                >
                    <p>Hobbis:Reading,Hoking</p>
                    <button>Contact</button>
                </Profilecard>
                 <Profilecard 
            name="Krishna"
            age={29}
            greeting={
                <strong>Hi alice greetings</strong>
               }
                >
                    <p>Hobbis:Reading,Hoking</p>
                    <button>Contact</button>
                </Profilecard>
        </div>
    );
}
export default Profile;