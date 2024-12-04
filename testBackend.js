// src/testBackend.js - on the fly backend component testing without requiring full integration

const { main_handler } = require('./backendLogic.js');

const testGenerate = async () => {
    console.log('Testing Generate Ideas...');
    const response = await main_handler('generate'); // call the generate function
    console.log('Response:', response);
};

const testHashtagQuery = async () => {
    console.log('Testing Query Hashtag...');
    const response1 = await main_handler('queryHashtag', 'art'); // call hashtag query function with all available hashtags
    const response2 = await main_handler('queryHashtag', 'technology');
    const response3 = await main_handler('queryHashtag', 'fitness');
    const response4 = await main_handler('queryHashtag', 'travel');
    const response5 = await main_handler('queryHashtag', 'music');
    console.log('Response:', response1);
    console.log('Response:', response2);
    console.log('Response:', response3);
    console.log('Response:', response4);
    console.log('Response:', response5);
};

const testOpenAIQuery = async() => {
    console.log('Testing Query AI...');
    const response = await main_handler('queryOpenAI', 'input'); // call openAI query function
    console.log('Response:', response);
}

const testGenerateTrends = async() => {
    console.log('Testing Generate Trends...');
    const response = await main_handler('generateTrends', 'input'); // call elevate trends generation function
    console.log('Respond:', response);
}

const testSemanticSearch = async() => {
    console.log('Testing Semantic Search...');
    const response = await main_handler('semanticSearch', 'input'); // call create semantic search function
    console.log('Respond:', response);
}

// testGenerate(); confirmed functional per last commit
// testHashtagQuery(); confirmed functional per last commit
// testOpenAIQuery(); confirmed functional per last commit
// testGenerateTrends(); confirmed functional per last commit
// testSemanticSearch(); confirmed functional per last commit