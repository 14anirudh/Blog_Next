import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let data= await fs.promises.readdir('contact');
    //   console.log(data);
      fs.promises.writeFile(`contact/${data.length+1}.json`,JSON.stringify(req.body))
      res.status(200).json("post request")
    } else {
      // Handle any other HTTP method
      res.status(200).json("allBlogs")
      
    }
  }