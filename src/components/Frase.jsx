import React from "react";
import { Card } from "react-bootstrap";

const Frase = () => {
  return (
    <section className="my-5">
      <h2>Personaje</h2>
      <hr />
      <img className="mb-3" src="https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png" alt="" />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
