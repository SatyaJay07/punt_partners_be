const translations = []; // In-memory store for translations
const translate = require('translate-google-api'); // Import the Google Translate API

// Define an asynchronous function to handle the translation request
const TranslatedText = async (req, res) => {
  // Destructure inputText, fromLang, and toLang from the request body
  const { inputText, fromLang, toLang } = req.body;
  console.log("reqBody", req.body); // Log the request body for debugging purposes
  
  try {
    // Perform the translation using the Google Translate API
    const result = await translate(inputText, { from: fromLang, to: toLang });
    
    // Create a new translation record with the input and translated text
    const startTranslation = {
      inputText,
      translatedText: result[0],
      fromLang,
      toLang,
      timestamp: new Date(), // Adding a timestamp for sorting if needed
    };
    
    // Save the translation record to the in-memory store
    translations.push(startTranslation);
    
    // Respond with the translated text
    res.status(200).json({ translatedText: result[0] });
  } catch (error) {
    // Log the detailed error if the translation fails
    console.error('Translation error:', error);
    // Respond with an error message if the translation fails
    res.status(500).json({ error: 'Translation failed' });
  }
};

// Export the TranslatedText function so it can be used in other parts of the application
module.exports = TranslatedText;
