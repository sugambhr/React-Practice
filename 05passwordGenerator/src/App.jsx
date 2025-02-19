import { useState, useCallback, useEffect, useRef } from "react";
import { Clipboard, RefreshCw } from "lucide-react"; //INFO:Importing icons

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //INFO:useRef hook
  const passwordRef = useRef(null);

  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>

      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none bg-gray-700 text-white w-full py-2 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-700 text-white px-3 py-2 flex items-center justify-center"
        >
          <Clipboard size={18} />
        </button>
      </div>

      
      <button
        onClick={passwordGenerator}
        className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 mb-4"
      >
        <RefreshCw size={18} /> Generate Password
      </button>

      
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center justify-between">
          <label>Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
