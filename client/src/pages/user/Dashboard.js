import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
 
  const [score, setScore] = useState(0);

 const navigate = useNavigate();
  return (
    <>
      <Card className="container-fluid d-flex mt-3" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title className="fw-bold justify-content center text-center">Instructions</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          </Card.Subtitle>
          <Card.Text className="mt-3 " style={{fontSize:"25px"}}>
           <p>1. Read and follow each clue carefully to discover the location of the next clue.</p>
           <p>2. Each clue may require different problem-solving techniques and may lead you to different sources such as texts, videos, 3D animations, games, links or anything else.</p>
            <p>3. Keep track of the clues and the sources used to solve them.</p>
           <p>4.  Pay attention to the details and clues hidden in each source as they may be lead to the dead ends.</p>
            <p>5. The final clue will lead you to the treasure. Once you reach the end of the game, you will have the opportunity to reflect on your soft skills and how you approached the challenges presented in the game.</p>
            Remember, the game is designed to assess your soft skills, so enjoy the adventure and challenge yourself. Good luck!
          </Card.Text>
        </Card.Body>
      </Card>
      
      <div class="d-grid gap-2 col-1 mx-auto mt-3">
      <button onClick={e => (
        e.preventDefault(),
        
        (async () => {
          
          try {
            const res = await axios.get(`${process.env.REACT_APP_API}/score/user`);
            console.log(res.data);

            setScore(res.data.score); 
            const que = res.data.score + 1;

            if(res.data.score === 0){
              
              navigate('/dashboard/que1');
            }
            else
            navigate(`/dashboard/que${que}`);
          } catch (error) {
            console.log(error);
          }

        })()

        
        
      )} class="btn btn-dark" type="button"> {score==0 ? "Start" : "Resume"}  </button>
      </div>
        
    </>
  );
}
