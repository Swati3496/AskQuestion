import '../Style/askquestion.css';


import { useState } from 'react';

 function AskQuestion() {
  const [question, setQuestion] = useState('');
   const [category, setCategory] = useState('');
   const [submitted, setSubmitted] = useState(false);
   const [image, setImage] = useState(null);
   const [options, setOptions] = useState([]);
   const [selectedOption, setSelectedOption] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit question to backend or perform any other action
    console.log(`Submitting question: ${question}`);
    setQuestion('');
    setSubmitted(true);
    setImage(null);
    console.log(`Submitting image: ${image}`);
  }

  const handleChange = (event) => {
    setQuestion(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleChangeImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }
  const handleAddOption = () => {
    setOptions([...options, selectedOption]);
    setSelectedOption('');
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const renderCategoryOptions = () => {
    if (submitted) {
      return (
         
         

            <div className="category-options">

              <label>
                Select a category:
                 <select value={category} onChange={handleCategoryChange}>
                   <option value="">-- Select a category --</option>
                   <option value="8">Class 8</option>
                   <option value="9">Class 9</option>
                   <option value="10">Class 10</option>
                   <option value="11">Class 11</option>
                   <option value="12">Class 12</option>
                   <option value="12 Passed">Class 12 Passed</option>
                   <option value="jee">JEE</option>
                   <option value="neet">Neet</option>
                   <option value="goverment">Goverment job Aspirant</option>
                   <input type="text" value={selectedOption} onChange={handleOptionChange} />
                   <option value="add" onClick={handleAddOption}>Add</option>

 
                   <ul>
                   {options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>

                </select>
              </label>
            </div>
         
    
      );
    }
  }

  return (
    <div className="ask-question">
      <form onSubmit={handleSubmit}>
        <label>
          Ask a question:
          <input type="text" value={question} onChange={handleChange} />
        </label>
        <label>
          Upload an image:
          <input type="file" onChange={handleChangeImage} />
        </label>
        <button type="submit">Submit</button>
        {image && (
          <div>
            <img src={image} alt="Uploaded by user" />
          </div>

        )}
      </form>

      {renderCategoryOptions()}
    </div>
  );
}

export default AskQuestion;





// import { useState } from 'react';

// function AskQuestion() {
//   const [question, setQuestion] = useState('');
//   const [category, setCategory] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [image, setImage] = useState(null);
//   const [options, setOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Code to submit question to backend or perform any other action
//     console.log(`Submitting question: ${question}`);
//     setQuestion('');
//     setSubmitted(true);
//     setImage(null);
//     console.log(`Submitting image: ${image}`);
//   }

//   const handleChange = (event) => {
//     setQuestion(event.target.value);
//   }

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//     setSelectedOption('');
//     setOptions([]);
//   }

//   const handleChangeImage = (event) => {
//     setImage(URL.createObjectURL(event.target.files[0]));
//   }

//   const handleAddOption = () => {
//     setOptions([...options, selectedOption]);
//     setSelectedOption('');
//   }

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   }

//   const renderCategoryOptions = () => {
//     if (submitted) {
//       switch (category) {
//         case '6':
//           return (
//             <div className="category-options">
//               <label>
//                 Select a category:
//                 <select value={selectedOption} onChange={handleOptionChange}>
//                   <option value="">-- Select a category --</option>
//                   <option value="Science">Science</option>
//                   <option value="Math">Math</option>
//                   <option value="English">English</option>
//                   <option value="Add">Add</option>
//                 </select>
//                 <button onClick={handleAddOption}>Add</button>
//                 <ul>
//                   {options.map((option, index) => (
//                     <li key={index}>{option}</li>
//                   ))}
//                 </ul>
//               </label>
//             </div>
//           );
//         case '7':
//           return (
//             <div className="category-options">
//               <label>
//                 Select a category:
//                 <select value={selectedOption} onChange={handleOptionChange}>
//                   <option value="">-- Select a category --</option>
//                   <option value="Science">Science</option>
//                   <option value="Math">Math</option>
//                   <option value="English">English</option>
//                   <option value="Add">Add</option>
//                 </select>
//                 <button onClick={handleAddOption}>Add</button>
//                 <ul>
//                   {options.map((option, index) => (
//                     <li key={index}>{option}</li>
//                   ))}
//                 </ul>
//               </label>
//             </div>
//           );
//         case '8':
//           return (
//             <div className="category-options">
//               <label>
//                 Select a category:
//                 <select value={selectedOption} onChange={handleOptionChange}>
//                   <option value="">-- Select a category --</option>
//                   <option value="Math">Math</option>
//                   <option value="Science">Science</option>
//                   <option value="Add">Add</option>
//                 </select>
//                 <button onClick={handleAddOption}>Add</button>
//                 <ul>
//                   {options.map((option, index) => (
//                     <li key={index}>{option}</li>
//                   ))}
//                 </ul>
//               </label>
//             </div>
//           );
        
//       }
//     }
//   }
// }                    
// export default AskQuestion;

                  
                 

