import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Que4() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que4`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");

        navigate("/dashboard/que5");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div className="container mt-3">
      <Card style={{ width: "55rem" }}>
        <Card.Body>
          <Card.Title>Puzzle-4</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
           
            <div className="fs-2">
              <i>
              Interrogate the  <Link style={{textDecoration: "none", color: "black"}}  to = "https://res.cloudinary.com/dsxyzdqvo/image/upload/v1681654158/rdj_forensic_11_tswf7g.jpg" target="_blank"> Picture</Link>
              </i>
              </div>
               <div className="fs-5">
                bug_apd is big fan of Robert Downey Jr.By some great luck he has recieved a 
                messege from his beloved iron man but it is hidden inside this picture. Help 
                him to find that secret messege.
               </div>
               
          </Card.Text>
        </Card.Body>
      </Card>

      <div>
        <h3 className="mt-3">Hint</h3>
        <p className="fs-4">
          <i>Find Picture </i>
        </p>
        <p className="fs-4">
          <i> A picture is much more than just visual representation.  </i>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="answer"></label>
          <input
            type="text"
            className="form-control mt-2 w-25 p-3"
            id="answer"
            placeholder="Enter your answer"
          />
        </div>
        <button type="submit" className="btn btn-dark mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
