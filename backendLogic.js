// src/backendLogic.js - all backend logic is contained here for easy scalability/modularity

//mock storage for initial testing
let savedIdeas = [];
let discardedIdeas = [];
const hashtags = [
  // mocked hashtag table; used in queryHashtag and semanticSearch
  { tag: "art", engagement: 85, sentiment: 70 },
  { tag: "technology", engagement: 90, sentiment: 75 },
  { tag: "fitness", engagement: 65, sentiment: 60 },
  { tag: "travel", engagement: 80, sentiment: 85 },
  { tag: "music", engagement: 75, sentiment: 70 },
];
const keywords = [
  // mocked keyword analysis table; used in generateIdeas and generateTrends
  { keyword: "sustainability", trendScore: 78 },
  { keyword: "innovation", trendScore: 88 },
  { keyword: "health", trendScore: 72 },
  { keyword: "adventure", trendScore: 81 },
  { keyword: "creativity", trendScore: 85 },
];
const sentimentAnalysis = [
  // mocked sentient analysis data used in generateTrends and queryHashtag
  { keyword: "sustainability", sentiment: 80 },
  { keyword: "innovation", sentiment: 90 },
  { keyword: "health", sentiment: 85 },
  { keyword: "adventure", sentiment: 75 },
  { keyword: "creativity", sentiment: 88 },
];
const posts = [
  // mocked post table used in generateTrends
  { id: 1, topic: "art trends", engagement: 500 },
  { id: 2, topic: "tech updates", engagement: 600 },
  { id: 3, topic: "fitness routines", engagement: 450 },
  { id: 4, topic: "travel tips", engagement: 520 },
  { id: 5, topic: "new music releases", engagement: 480 },
];
const niches = [
  // mocked niches table used in generateTrends and semanticSearch
  { niche: "art", related: ["painting", "sculpture", "digital art"] },
  { niche: "technology", related: ["AI", "blockchain", "IoT"] },
  { niche: "fitness", related: ["workout", "nutrition", "yoga"] },
  { niche: "travel", related: ["adventure", "vacation", "road trip"] },
  { niche: "music", related: ["pop", "rock", "classical"] },
];
const users = [
  // mocked user table for associating user IDs in saveIdea and discardIdea
  { userId: 1, name: "Alice" },
  { userId: 2, name: "Bob" },
  { userId: 3, name: "Charlie" },
  { userId: 4, name: "Diana" },
  { userId: 5, name: "Eve" },
];

//main_handler - assignment function which determins which logic is being called
const main_handler = async (action, data = null) => {
  console.log("Action received: ${action}", data);

  switch (action) {
    case "generate": // generate new ideas in Launch
      return await generateIdeas();
    case "save": // save idea from Launch
      return await saveIdea(data);
    case "discard": // discard idea from Launch
      return await discardIdea(data);
    case "getSaved": // Get saved ideas
      return await getSavedIdeas();
    case "getTopicRelatedHashtags": // Get related hashtags for a topic
      return await getTopicRelatedHashtags(data);
    case "getDiscarded": // Get discarded ideas
      return await getDiscardedIdeas();
    case "queryHashtag": // query hashtag from input in Hashtag
      return await queryHashtag(data);
    case "getTrendingHashtags": // Get trending hashtags
      return await getTrendingHashtags();
    case "queryOpenAI": // query OpenAI from query in AI tab
      return await queryOpenAI(data);
    case "generateTrends": // periodically fill out the content of Elevate tab
      return await generateTrends();
    case "semanticSearch": // query from Elevate tab
      return await semanticSearch(data);

    default:
      console.warn("Unknown action: ${action}");
      return { message: "Uknown action" };
  }
};

// const generateIdeas = async () => {
//   return {
//     ideas: [
//       { id: "1", text: "Idea 1", image: "https://via.placeholder.com/100" },
//       { id: "2", text: "Idea 2", image: "https://via.placeholder.com/100" },
//       { id: "3", text: "Idea 3", image: "https://via.placeholder.com/100" },
//       { id: "4", text: "Idea 4", image: "https://via.placeholder.com/100" },
//       { id: "5", text: "Idea 5", image: "https://via.placeholder.com/100" },
//     ],
//   };
// };

// Save an idea
const saveIdea = async (data) => {
  console.log("\n\n\n\n Saving idea:", data);
  if (data && data.id && !savedIdeas.find((item) => item.id === data.id)) {
    savedIdeas.push({ ...data, type: "saved" });
    return { success: true, message: "Idea saved successfully" };
  } else {
    throw new Error("Invalid data or idea already saved");
  }
};

const getTopicRelatedHashtags = async (data) => {
  const topic = data.trim();
  console.log("\n\n\n Related topic:", topic);

  // Find the niche related to the given topic
  const niche = niches.find((n) =>
    n.niche.toLowerCase().includes(topic.toLowerCase())
  );

  console.log("\n\n\n Related niche:", niche);

  if (!niche) {
    return { message: `No niche found for topic: ${topic}` };
  }

  // Return the related hashtags of the niche
  const relatedHashtags = niche.related;
  console.log("\n\n\n Related hashtags:", relatedHashtags);

  return {
    niche: niche.niche,
    related: relatedHashtags,
    message: "Related hashtags retrieved successfully",
  };
};

// Discard an idea
const discardIdea = async (data) => {
  if (data && data.id && !discardedIdeas.find((item) => item.id === data.id)) {
    discardedIdeas.push({ ...data, type: "dismissed" });
    return { success: true, message: "Idea discarded successfully" };
  } else {
    throw new Error("Invalid data or idea already discarded");
  }
};

// Get saved ideas
const getSavedIdeas = async () => {
  if (savedIdeas.length === 0) {
    return { ideas: [], message: "No saved ideas found" };
  }
  return { ideas: savedIdeas, message: "Saved ideas retrieved successfully" };
};

// Get discarded ideas
const getDiscardedIdeas = async () => {
  if (discardedIdeas.length === 0) {
    return { ideas: [], message: "No discarded ideas found" };
  }
  return {
    ideas: discardedIdeas,
    message: "Discarded ideas retrieved successfully",
  };
};

const generateIdeas = async () => {
  // generate idea(s) for Launch
  console.log("Generating ideas from sentiment analysis and keywords...");

  // first filter high-sentiment topics from sentimentAnalysis
  const highSentimentTopics = sentimentAnalysis
    .filter((entry) => entry.sentiment > 75) // filter based on sentiment score
    .map((entry) => entry.keyword); // separate the ones which have the higher sentiment

  // second filter top trending keywords from keywords analysis
  const trendkingeywords = keywords
    .filter((entry) => entry.trendScore > 80) // filter based on trend score
    .map((entry) => entry.keyword); // separate the ones which have the higher trend score

  // third combine topics for the idea generation
  const combinedTopics = [
    ...new Set([...highSentimentTopics, ...trendkingeywords]),
  ]; // merge and remove duplicates

  // fourth generate the idea from combinedTopics. currently placeholder for openAI query for human-sounding nuanced generation
  const ideas = combinedTopics.map(
    (topic) => "Explore " + topic + " and its impact today."
  );

  console.log("Generated ideas:", ideas);

  return {
    ideas,
    message: "Ideas generated successfully",
    message: Array.isArray(ideas),
  };
};

const queryHashtag = async (data) => {
  // query tables for Hashtag input
  console.log("Querying hashtag: " + data);

  // this function is majority placeholder for the case in which we have rich and nuanced tables of
  // hashtags and niches

  // check if the queried hashtag exists
  const match = hashtags.find((entry) =>
    entry.tag.toLowerCase().includes(data.toLowerCase())
  ); // Fix property to `tag` and make it case-insensitive
  if (!match) {
    console.error("Hashtag containing " + data + " not found.");
    return null;
  }

  // check for related keywords in the niche entry of the same name as the hashtag
  const relatedKeywords = niches.find(
    (niche) => niche.niche === match.tag
  )?.related; // match tag to niche
  if (!relatedKeywords) {
    console.error("No related keywords found for niche: " + match.tag);
    return null;
  }

  const results = relatedKeywords.map((keyword) => {
    const engagement = Math.floor(Math.random() * 101); // random number 1-100
    const sentiment = Math.floor(Math.random() * 101); // random number 1-100
    const averageScore = ((engagement + sentiment) / 2).toFixed(2); // average for final score

    return {
      keyword,
      averageScore,
    };
  });

  console.log("Query results:", results);
  return {
    results,
    message: Array.isArray(results),
  };
};

const getTrendingHashtags = async () => {
  // get trending hashtags for Hashtag
  console.log("Getting trending hashtags...");

  // sort hashtags by engagement
  const trending = hashtags
    .sort((a, b) => b.engagement - a.engagement) // sort by engagement
    .slice(0, 5); // get top 5

  console.log("Trending hashtags:", trending);
  return {
    trending,
    message: Array.isArray(trending),
  };
};

const queryOpenAI = async (data) => {
  // query specific OpenAI API key as a 'helper bot'
  console.log("Querying with: " + data);
  //placeholder until OpenAI API is integrated
  return "This is a placeholder response for query: " + data;
};

const generateTrends = async () => {
  // periodically regenerate the topics in Elevate. fully a placeholder currently
  console.log("Generating placeholder trends for elevate..");
  const topTrends = [
    // placeholder generation for the topics in the top 2 cards
    { trend: "Trend1", bulletPoints: ["Bullet1", "Bullet2", "Bullet3"] },
    { trend: "Trend2", bulletPoints: ["Bullet1", "Bullet2", "Bullet3"] },
  ];
  const otherTrends = ["Trend3", "Trend4", "Trend5", "Trend6"]; // placeholder generation for the topics in the shortlist below the cards
  return {
    topTrends,
    otherTrends,
    message: Array.isArray(topTrends),
    message: Array.isArray(otherTrends),
  };
};

const semanticSearch = async (data) => {
  console.log("Performing semantic search for: " + data);
  const hashtags = [
    "#Placeholder1",
    "#Placholder2",
    "#Placeholder3",
    "#Placeholder4",
  ];
  return {
    hashtags,
    message: Array.isArray(hashtags),
  };
};

module.exports = { main_handler };
