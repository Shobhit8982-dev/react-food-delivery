import { User } from "./User";
import UserClass from "./UserClass";

const About = ( ) => {
    return(
        <div className="font-bold text-4xl m-4 p-4">
            <h1>About Us Page</h1>
            <User name='Shobhit'/>
            <UserClass name='Shobhit'/>
        </div>

    )
}

export default About;
