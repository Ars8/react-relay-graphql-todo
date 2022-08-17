async function fetchGraphQL(text, variables) {
    const endpoint = "http://localhost:5000/graphql"
    const headers = {
        "content-type": "application/json",
    };
    const graphqlQuery = {
        "query": text,
        "variables": variables
    };

    const options = {
        "method": "POST",
        "headers": headers,
        "body": JSON.stringify(graphqlQuery)
    };

    const response = await fetch(endpoint, options)
    const data = await response.json()

    return data
  }
  
  export default fetchGraphQL