import { useState, useEffect } from "react";

function Announcement() {
  const sentences: string[] = [
    "Free Delivery",
    "Amazing Food",
    "Vegan Food Available",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="text-center bg-danger text-light d-flex justify-content-center align-items-center p-2">
        <p style={{ marginBottom: 0 }}>{sentences[index]}</p>
      </div>
    </>
  );
}

export default Announcement;
