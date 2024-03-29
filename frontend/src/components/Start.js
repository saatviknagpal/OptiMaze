import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/Start.css";
function Start({ setGameStarted }) {
  const handleClick = () => {
    setGameStarted((gameStarted) => !gameStarted);
  };

  return (
    <div className="start-container">
      <h1>OptiMaze</h1>
      <p>
        About OptiMaze: Maze-solving game with a Spring Boot backend and React
        frontend, deployed on Microsoft Azure. Experience pathfinding challenges
        while visualizing optimal routes.
      </p>
      <motion.div
        className="button-container"
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        <Button
          sx={{ color: "white" }}
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          Play
        </Button>
      </motion.div>
    </div>
  );
}

export default Start;
