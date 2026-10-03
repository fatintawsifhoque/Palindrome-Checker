import { useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  useEffect(() => {
    if (!input) {
      setOutput('');
      return;
    }
    if (input.length === 1) {
      setOutput("It's not a palindrome.");
      setIsPalindrome(false);
      return;
    }
    const lower = input.toLowerCase();
    const reverse = lower.split('').reverse().join('');
    if (lower === reverse) {
      setOutput("It's a palindrome.");
      setIsPalindrome(true);
    } else {
      setOutput("It's not a palindrome.");
      setIsPalindrome(false);
    }
  }, [input]);

  return (
    <section className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">
      <input 
        type="text" 
        className="border h-12 w-60 rounded-lg outline-0 pl-2 overflow-x-scroll" 
        placeholder="Input something"
        onChange={(e) => setInput(e.target.value)} 
      />
      <p className={`mt-4 text-xl ${isPalindrome ? 'text-green-500' : 'text-red-500'}`}>
        {output}
      </p>
    </section>
  );
};

export default App;