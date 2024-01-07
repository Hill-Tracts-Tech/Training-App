import { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime >= 12 && currentTime < 17) {
      setGreeting("Good Afternoon");
    } else if (currentTime >= 17 && currentTime < 21) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  return (
    <h1 className="text-3xl text-center my-8">
      <span className="text-green-400 font-bold"> {greeting}</span>, Welcome To
      Admin Panel
    </h1>
  );
};

export default Greeting;
