import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Que2() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que2`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");

        navigate("/dashboard/que3");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    }
  };

  return (
    <div className="container mt-3">
      <Card style={{ width: "38rem" }}>
        <Card.Body>
          <Card.Title>Puzzle-2</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
            <div className="fs-2">
              <i>
                莫尔斯 once decided to create a disturbing sound to a hidden
                message but he can't recover it, help him to extract the hidden
                message.
              </i>
            </div>
            <div className="fs-2">
              <i> .-.. .- -... .-.. .- -... .-.. .- -... .-.. .- -... .-.. .- -...</i>
            </div>

            <div className="fs-2">
              <i> .-.. .- -... .-.. .- -... .-.. .- -... .-.. .- -... .-.. .- -...</i>
            </div>
            <div>
              <Link to = "https://res.cloudinary.com/dsxyzdqvo/video/upload/v1681650900/beep_beep_ek2ldi.wav" target="_blank" style={{textDecoration: "none"}}  className="mt-3"><i>Hidden</i></Link>
            </div>

          </Card.Text>
        </Card.Body>
      </Card>

      <div>
        <h3 className="mt-3">Hint</h3>
        <p className="fs-4">
          <i>Morse</i>
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
