import { useState } from 'react';
import './App.css';

function App() {
  const [aiText, setAiText] = useState<string>('');
  const [humanizedText, setHumanizedText] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string>('');

  function humanizeText(aiText) {
  // 1. Lexical Diversity: Substituting synonyms
  let text = aiText.replace(/\bimportant\b/g, 'crucial')
                   .replace(/\badditionally\b/g, 'furthermore')
                   .replace(/\bquickly\b/g, 'swiftly')
                   .replace(/\bdifficult\b/g, 'tough')
                   .replace(/\bexcellent\b/g, 'top-notch');

  // 2. Sentence Structure Variation
  text = text.replace(/, /g, '; ')
             .replace(/\bHowever\b/g, 'Though')
             .replace(/\bTherefore\b/g, 'Consequently')
             .replace(/\bIn conclusion\b/g, 'To wrap it up');

  // 3. Formality Adjustment
  text = text.replace(/\bin order to\b/g, 'to')
             .replace(/\bprior to\b/g, 'before')
             .replace(/\butilize\b/g, 'use')
             .replace(/\bcommence\b/g, 'start');

  // 4. Idiomatic Expressions
  text = text.replace(/\bclearly\b/g, 'as clear as day')
             .replace(/\bin a timely manner\b/g, 'in the nick of time')
             .replace(/\bsignificant\b/g, 'a big deal')
             .replace(/\bsmall\b/g, 'tiny');

  // 5. Randomized Elements
  text = text.replace(/\bvery\b/g, () => (Math.random() > 0.5 ? 'extremely' : 'incredibly'));

  // 6. Personal Experiences and Anecdotes
  text = text.replace(/\bexample\b/g, () => {
    const examples = [
      "I remember this one time when I was a kid...",
      "Let me tell you a story...",
      "Funny you should mention that, just the other day...",
    ];
    return examples[Math.floor(Math.random() * examples.length)];
  });

  // 7. Humor and Wit
  text = text.replace(/\bbig\b/g, () => (Math.random() > 0.7 ? 'ginormous' : 'big'));

  // 8. Varied Sentence Structures
  text = text.replace(/\b\.\b/g, () => {
    const endings = [
      '?',
      '!',
      '...',
      '. You know what I mean?',
      '. Does that make sense?',
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  });

  // 9. Colloquialisms and Slang
  text = text.replace(/\bgood\b/g, () => (Math.random() > 0.5 ? 'good' : 'dope'))
             .replace(/\bfriend\b/g, 'pal')
             .replace(/\bmoney\b/g, 'dough');

  // 10. Imperfections and Irregularities
  text = text.replace(/\b([a-z])\b/gi, (match, p1) => (Math.random() > 0.9 ? p1.toUpperCase() : p1))
             .replace(/\b([a-z])/gi, (match, p1) => (Math.random() > 0.95 ? p1.toLowerCase() : p1))
             .replace(/\b([a-z])/gi, (match, p1) => (Math.random() > 0.97 ? "'" + p1 : p1));

  // 11. Emotional Language
  text = text.replace(/\bgood\b/g, () => (Math.random() > 0.6 ? 'awesome' : 'good'))
             .replace(/\bbad\b/g, () => (Math.random() > 0.6 ? 'terrible' : 'bad'))
             .replace(/\btrue\b/g, () => (Math.random() > 0.6 ? 'absolutely' : 'true'));

  // 12. Cultural References
  text = text.replace(/\bexample\b/g, () => {
    const references = [
      "it's like that scene from Star Wars when...",
      "ever seen that viral video of...",
      "reminds me of that one episode of Friends where...",
    ];
    return references[Math.floor(Math.random() * references.length)];
  });

  // 13. Repetition and Redundancy
  text = text.replace(/\b(\w+)\b/g, (match, p1) => (Math.random() > 0.95 ? `${p1}, ${p1}` : match));

  // 14. Diversifying Word Choice
  text = text.replace(/\butilize\b/g, () => {
    const synonyms = ['use', 'employ', 'leverage', 'harness'];
    return synonyms[Math.floor(Math.random() * synonyms.length)];
  });

  // 15. Contextual Awareness
  text = text.replace(/\bimportant\b/g, () => {
    const contextualWords = ['crucial', 'vital', 'essential', 'key'];
    return contextualWords[Math.floor(Math.random() * contextualWords.length)];
  });

  // 16. Exaggeration
  text = text.replace(/\bbig\b/g, () => (Math.random() > 0.7 ? 'humongous' : 'big'));

  // 17. Figurative Language
  text = text.replace(/\bfast\b/g, () => (Math.random() > 0.6 ? 'lightning-fast' : 'fast'));

  // 18. Interjections
  text = text.replace(/\b\.\b/g, () => (Math.random() > 0.8 ? '. Wow!' : '.'));

  // 19. Filler Words
  text = text.replace(/\b\b/g, () => (Math.random() > 0.7 ? 'um, ' : ''));


  // 22. Rhetorical Questions
  text = text.replace(/\b\?\b/g, () => (Math.random() > 0.8 ? '? I mean, come on!' : '?'));

  // 23. Emphasis with Capitalization
  text = text.replace(/\b(\w+)\b/g, (match, p1) => (Math.random() > 0.95 ? p1.toUpperCase() : match));

  // 24. Sarcasm and Irony
  text = text.replace(/\bgood\b/g, () => (Math.random() > 0.7 ? 'good (not really)' : 'good'));

  // 25. Onomatopoeia
  text = text.replace(/\bsaid\b/g, () => (Math.random() > 0.6 ? 'blurted' : 'said'));

  // 26. Similes and Metaphors
  text = text.replace(/\bfast\b/g, () => (Math.random() > 0.7 ? 'faster than a speeding bullet' : 'fast'));

  // 27. Alliteration
  text = text.replace(/\bgreat\b/g, () => (Math.random() > 0.6 ? 'gorgeous and glorious' : 'great'));

  // 28. Hyperbole
  text = text.replace(/\bbig\b/g, () => (Math.random() > 0.8 ? 'the biggest thing ever' : 'big'));

  // 29. Slang and Jargon
  text = text.replace(/\bcool\b/g, () => (Math.random() > 0.7 ? 'lit' : 'cool'))
             .replace(/\bfriend\b/g, 'homie');

  // 30. Profanity (Optional)
  text = text.replace(/\bbad\b/g, () => (Math.random() > 0.9 ? '*****' : 'bad'));

  // 32. Analogies
  text = text.replace(/\bfast\b/g, () => (Math.random() > 0.7 ? 'as fast as a cheetah' : 'fast'));

  // 33. Personification
  text = text.replace(/\bcomputer\b/g, () => (Math.random() > 0.6 ? 'the thinking machine' : 'computer'));

  // 34. Rhyming
  text = text.replace(/\bgood\b/g, () => (Math.random() > 0.7 ? 'nice and slice' : 'good'));


  // 36. Malapropisms
  text = text.replace(/\bdifficult\b/g, () => (Math.random() > 0.8 ? 'deficlate' : 'difficult'));

  // 37. Idioms and Proverbs
  text = text.replace(/\bsmall\b/g, () => (Math.random() > 0.7 ? 'a drop in the bucket' : 'small'));

  // 38. Ambiguity
  text = text.replace(/\bbig\b/g, () => (Math.random() > 0.8 ? 'big (or is it?)' : 'big'));

  // 39. Understatements
  text = text.replace(/\bgreat\b/g, () => (Math.random() > 0.7 ? 'not bad' : 'great'));

  // 40. Parallel Structure
  text = text.replace(/\bfast\b/g, () => (Math.random() > 0.8 ? 'quick, nimble, and speedy' : 'fast'));

  return text;
}


// Update your humanizeText event handler
const humanizeTextHandler = () => {
  if (!aiText.trim()) {
    setToastMessage('Please enter text to be humanized.');
    return;
  }
  const humanized = humanizeText(aiText);
  setHumanizedText(humanized);
  setToastMessage('');
};

  const copyToClipboard = () => {
    navigator.clipboard.writeText(humanizedText)
      .then(() => {
        setToastMessage('Text copied to clipboard!');
        setTimeout(() => setToastMessage(''), 3000); // Hide toast after 3 seconds
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
        setToastMessage('Failed to copy text.');
      });
  };

  const clearText = () => {
    setAiText('');
    setHumanizedText('');
  };

  const highlightChanges = () => {
    // A simple example to highlight changes
    // In a real application, you would implement a more sophisticated method
    return aiText.split(' ').map((word, index) => (
      <span key={index} className={humanizedText.includes(word) ? 'text-gray-700' : 'text-red-500'}>
        {word + ' '}
      </span>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="p-4 text-white text-2xl bg-black text-center">
        NotAI - Text Humanizer
      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p>{toastMessage}</p>
        </div>
      )}

        <main className="flex-grow container mx-auto px-4 pt-2 flex flex-col items-center justify-center">
          {/* Introduction Section */}
        <div className="w-full max-w-2xl bg-blue-100 p-4 rounded-lg text-center mb-4">
  <p>
    Welcome to <strong>NotAI</strong>! Here, we turn your AI-generated text into Humanized text 🥳. 
    <br></br>Simply paste your text 📝, hit 'Humanize' , and voilà! See the magic happen 😎
  </p>
        </div>
        
          
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md space-y-4">
          <textarea
            className="w-full h-40 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={aiText}
            onChange={(e) => setAiText(e.target.value)}
            placeholder="Paste your text here"
          />

          <div className="flex justify-between items-center mb-4">
            <button
              onClick={humanizeTextHandler}
              className="flex-1 bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200 ease-in-out"
            >
              Humanize
            </button>
            <button
              onClick={copyToClipboard}
              className="flex-1 bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200 ease-in-out mx-2"
            >
              Copy
            </button>
            <button
              onClick={clearText}
              className="flex-1 bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200 ease-in-out mx-2"
            >
              Clear
            </button>
          </div>

          {humanizedText && (
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="mb-2 text-lg">Humanized Text</h3>
              <p className="whitespace-pre-wrap">{highlightChanges()}</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-black shadow py-4">
  <div className="text-center text-white">
    Curated by <span className="font-bold text-white">RG Chandrasekaraa</span> 👨‍🎨
  </div>
</footer>
    </div>
  );
}

export default App;
