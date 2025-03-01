import "./App.css";
import Card from "./components/Card";
import background from "./assets/images/background.jpg";
import { data } from "./assets/data";
import { tags } from "./assets/tags";
import { useEffect, useState } from "react";
import Notification from "./components/Notification";

function App() {
  const [showNotification, setShowNotification] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (filter === "All") setFilteredData(data);
    else {
      setFilteredData(data.filter((item) => item.tags.includes(filter)));
    }
  }, [filter]);

  return (
    <div className="app">
      {showNotification && (
        <Notification setShowNotification={setShowNotification} />
      )}
      <div className="app--background">
        <div className="app--background_darkener"></div>
        <img src={background} alt="" />
      </div>
      <div className="app--titles">
        <div className="app--title">Games for Buddies</div>
        <div className="app--subtitle">
          Want a fun time? Come take your pick!
        </div>
      </div>
      <div className="app--filters">
        {tags.map((tag) => {
          return (
            <div
              className={`app--filter ${
                tag == filter && "app--selected_filter"
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </div>
          );
        })}
      </div>
      <div className="app--cards">
        {filteredData.map((item, id) => {
          return <Card item={item} filteredDataSize={filteredData.length} />;
        })}
      </div>
    </div>
  );
}

export default App;
