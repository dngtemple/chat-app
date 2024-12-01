import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true); // Set loading state to true

      try {
        const res = await fetch("http://localhost:8000/api/users/", {
            method: "GET",
            credentials: "include", // This ensures cookies are included
            headers: {
              "Content-Type": "application/json",
            },
          });
          

        if (!res.ok) {
          throw new Error("Failed to fetch conversations"); // Throw error if response is not OK
        }

        const data = await res.json();
        setConversation(data); // Set the conversation data

      } catch (error) {
        toast.error(error.message); // Show error message
      } finally {
        setLoading(false); // Set loading state back to false
      }
    };

    getConversation(); // Call the function to fetch conversations
  }, []); // Empty dependency array means this will run once on component mount

  return { loading, conversation }; // Return loading state and conversation data
}
