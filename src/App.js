import React, { useState } from "react";
import HyperparameterOptimisation from "./components/HyperparameterOptimisation";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const App = () => {
  const [model, setModel] = useState("");
  const [task, setTask] = useState("");
  const [gpu, setGpu] = useState("");

  // Dummy data
  const models = ["LLaMA-2-7B", "Mistral-7B", "Gemma-2B", "Gemma-7B"];
  const tasks = [
    "Question Answering",
    "Text Summarisation",
    "Sentiment Analysis",
  ];
  const gpus = ["T4", "L4", "A100"];

  const handleModelChange = (event) => setModel(event.target.value);
  const handleTaskChange = (event) => setTask(event.target.value);
  const handleGpuChange = (event) => setGpu(event.target.value);

  // Conditional data rendering based on selection
  const renderData = () => {
    if (model && task && gpu) {
      return (
        <Card>
          <CardContent>
            <Typography variant="h6">Model Info</Typography>
            <Typography>Model: {model}</Typography>
            <Typography>Task: {task}</Typography>
            <Typography>GPU: {gpu}</Typography>
            <Typography>Emissions Rate: ...</Typography>
            <Typography>Total Emissions: ...</Typography>
            <Typography>Energy Consumption: ...</Typography>
            <Typography>Runtime: ...</Typography>
          </CardContent>
        </Card>
      );
    }
    // Additional conditions for partial selections
    else if (model && task) {
      return (
        <Card>
          <CardContent>
            <Typography variant="h6">Model & Task Info</Typography>
            <Typography>Model: {model}</Typography>
            <Typography>Task: {task}</Typography>
            <Typography>Emissions Data (All GPUs): ...</Typography>
          </CardContent>
        </Card>
      );
    } else if (model) {
      return (
        <Card>
          <CardContent>
            <Typography variant="h6">Model Info</Typography>
            <Typography>Model: {model}</Typography>
            <Typography>Emissions Data (All Tasks & GPUs): ...</Typography>
          </CardContent>
        </Card>
      );
    }
    return (
      <Typography variant="body1">
        Please select a model, task, and GPU to view data.
      </Typography>
    );
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Emissions Analysis of LLMs
      </Typography>

      {/* Dropdowns */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <FormControl fullWidth>
          <Select value={model} onChange={handleModelChange} displayEmpty>
            <MenuItem value="">Select Model</MenuItem>
            {models.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <Select value={task} onChange={handleTaskChange} displayEmpty>
            <MenuItem value="">Select Task</MenuItem>
            {tasks.map((task) => (
              <MenuItem key={task} value={task}>
                {task}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <Select value={gpu} onChange={handleGpuChange} displayEmpty>
            <MenuItem value="">Select GPU</MenuItem>
            {gpus.map((gpu) => (
              <MenuItem key={gpu} value={gpu}>
                {gpu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Conditional Content Rendering */}
      <Box>{renderData()}</Box>
      <Box sx={{ mt: 3 }}>
        <HyperparameterOptimisation />
      </Box>
    </Box>
  );
};

export default App;
