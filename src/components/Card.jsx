import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <a
      className="card"
      href={props.item.link}
      target="_blank"
      style={{
        height: props.filteredDataSize == 1 && "25em",
        width: props.filteredDataSize == 1 && "calc(25em * (5 / 7));",
        aspectRatio: props.filteredDataSize == 1 && "5 / 7",
      }}
    >
      <div className="card--image">
        <img
          src={
            new URL(`../assets/images/${props.item.image}`, import.meta.url)
              .href
          }
          alt={`${props.item.name} illustration`}
        />
      </div>
      <div className="card--text">
        <div className="card--name">{props.item.name}</div>
        <div className="card--description">{props.item.description}</div>
        <div className="card--tags">
          {props.item.tags.map((tag, id) => {
            return <div className="card--tag">{id > 0 ? `| ${tag}` : tag}</div>;
          })}
        </div>
      </div>
    </a>
  );
};

export default Card;
