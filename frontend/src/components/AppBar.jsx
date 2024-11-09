import axios from "axios";
import { useEffect, useState } from "react"
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";



export const Appbar = () => {
    const [username, setUserName] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");


    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/api/v1/user/userdetails", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Check the response data structure
                setUserName(response.data.username);
                setFname(response.data.firstName);
                setLname(response.data.lastName);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserName(); // Call the function to execute the API request
    }, [username,fname,lname]); 

    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center font-bold text-xl text-blue-500 h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello {fname}
            </div>
            <div className="rounded-full h-12 w-12 bg-blue-200	 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {fname[0]}
                </div>
            </div>
        </div>
    </div>
}