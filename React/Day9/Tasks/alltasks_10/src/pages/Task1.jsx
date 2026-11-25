import { useState } from "react";

const Task1 = () => {

  const [languages, setLanguages] = useState(["HTML","CSS","JavaScript","React","Node"]);

  return (
    <div className="bg-amber-950 text-white p-6">
      <h1>Programming Languages</h1>

      {languages.map((e,i) => (
        <h3 key={i+1}>{e}</h3>
      ))}

    </div>
  );
};

export default Task1;