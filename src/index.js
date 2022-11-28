var http = require("http");
const parseHTML = require("./parseHTML");
//create a server object:
http
  .createServer(function(req, res) {
    const jsonDoc = parseHTML(`
       <html>
         <body>
           <p>Test</p>
           <pre data-language="javascript">
             <code>
               console.log("hello")
             </code>
           </pre>
         <figure>
           <img src="https://cdn.sanity.io/images/3do82whm/production/e19f83f4ada04ac8983db699f2d27b4a2510e36a-1600x600.png?bg=fff" alt="Dancing devices" />
           <figcaption>Two dancing devices</figcaption>
         </figure>
         <blockquote>This is a blockquote. <em>This is emphasis</em></blockquote>
         <ul>
           <li>A list item</li>
           <li>Another list item</li>
           <li>
             <ul>A list inside a list:
               <li>A list item.</li>
               <li><a href="https://www.portabletext.org">A list item</a>.</li>
             </ul>
           </li>
         </ul>
        </body>
      </html>
      `);
    res.write(JSON.stringify(jsonDoc, null, 2)); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
