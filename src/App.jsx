import React, { useState } from "react";
import {
  EpicSelector,
  StorySelector,
  DetailsInput,
  UrsDocument,
} from "./components/index";

import "./App.css";

const App = () => {
  
  const [epics, setEpics] = useState([]);
  const [stories, setStories] = useState([]);
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const [selectedEpic, setSelectedEpic] = useState(null);

  return (
    <div className="container">
      <h1>User Requirement Specification</h1>

      <EpicSelector
        epics={epics}
        setEpics={setEpics}
        setSelectedEpic={setSelectedEpic}
      />
      <StorySelector
        stories={stories}
        setStories={setStories}
        selectedEpic={selectedEpic}
      />
      <DetailsInput
        description={description}
        setDescription={setDescription}
        version={version}
        setVersion={setVersion}
      />
      <UrsDocument
        epics={epics}
        stories={stories}
        description={description}
        version={version}
      />
    </div>
  );
};

export default App;
