/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Page() {
  return (
  <ol>
    <li>It will help my future</li>
    <li>It's fun</li>
    <li>I love learning</li>
  </ol>)
}

ReactDOM.render(<Page />, document.getElementById("root"))