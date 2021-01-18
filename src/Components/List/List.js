import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from "../Button/Button";
import css from "./List.module.css";
import slide from "../../transitions/slide.module.css";

const List = ({ items, onDelete }) => (
  <TransitionGroup component="ul" className={css.list}>
    {items.map(({ id, text }) => (
      <CSSTransition key={id} timeout={200} classNames={slide} unmountOnExit>
        <li key={id}>
          <p>{text}</p>
          <Button label="Delete" onCLick={() => onDelete(id)} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default List;
