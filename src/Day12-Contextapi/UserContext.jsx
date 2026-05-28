import { createContext} from "react";

export const UserContext = createContext();

const UserProvider = ({ children}) => {

    const userDetails = {
        name: "Raghavendra karingu",
        email: "raghavendra5karingu@example.com",
        age: 23,
        location: "Bangalore, India",
        role: "Software Engineer"
    };

    return (
        <UserContext.Provider value={{ userDetails }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;