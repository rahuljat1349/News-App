import * as React from "react";
import Loader from "./Loader"
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Multicard() {
  const [data, setData] = useState([]);
  const[count, setCount]= useState(0)

  let url =
    "https://newsdata.io/api/1/news?apikey=pub_360132fbe5073e68463fb1f1de15be06ed50b";
  let getData = async () => {
    let data = await fetch(url);
    let finalRes = await data.json();
    let finalData = await finalRes.results;
    console.log(finalData);
    setData(finalData);
  };
  useEffect(() => {
    getData();
   
  }, []);

  const click = ()=>{
      setCount(count+1);
      console.log(`kuch bhi ${count}`);
    }
  return (
    <>
    {/* <button onClick={click}>{count}</button> */}
      {data.length<1?<Loader/>:data.map((element,index) => (
        <div key={index} className="m-4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={element.image_url}
                alt="Image not avilable"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.description.length > 150
                    ? element.description.slice(0, 150)
                    : element.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href={element.link}
                target="_blank"
                size="small"
                color="primary"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
}
//
