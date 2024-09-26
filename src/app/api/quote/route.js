// app/api/quote/route.js
export async function GET(request) {
    try {
      // Fetch from the quotable.io API with the motivational tag
      const response = await fetch('https://api.quotable.io/random?tags=motivational');
      const data = await response.json();
  
      if (response.ok) {
        // Return only the required fields, not the whole object
        return new Response(JSON.stringify({
          content: data.content,
          author: data.author
        }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ message: "Failed to fetch quote" }), { status: 500 });
      }
    } catch (error) {
      return new Response(JSON.stringify({ message: "An error occurred while fetching the quote" }), { status: 500 });
    }
  }
  