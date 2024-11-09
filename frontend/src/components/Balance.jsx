import axios from "axios"
import { useState,useEffect } from "react"


export const Balance = ({ value }) => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                // Get the token from localStorage
                const token = localStorage.getItem("token");
                
                // Make the request with headers including the Authorization token
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${token}` // Pass the token in the Authorization header
                    }
                });

                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, [balance]);
    
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {parseFloat(balance.toFixed(2))}
        </div>
    </div>
}