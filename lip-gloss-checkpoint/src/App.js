import React from "react";
import { Container, Card, Button, Badge } from "react-bootstrap";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

import "./App.css";

const firstName = "Ekerette";

function App() {
  const hasName = firstName.trim().length > 0;

  return (
    <div className="app-background">
      <Container className="main-container">
        <p className="eyebrow">YOUR BEAUTY, YOUR GLOW</p>

        <h1 className="page-title">
          A Little Gloss, A Lot of Glam.
        </h1>

        <p className="page-subtitle">
          Your lips deserve a little luxury.
        </p>

        <Card className="product-card">
          <div className="image-wrapper">
            <Badge className="product-badge">
              BEST SELLER
            </Badge>

            <Image />
          </div>

          <Card.Body className="product-body">
            <p className="category-label">
              BEAUTY / LIP COLLECTION
            </p>

            <Name />
            <Price />
            <Description />

            <div className="product-details">
              <span>✨ High Shine</span>
              <span>💋 Silky Feel</span>
            </div>

            <Button
              className="shop-button"
              onClick={() => alert("Thanks for visiting Blush Luxe!")}
            >
              Discover Your Glow →
            </Button>
          </Card.Body>
        </Card>

        <div className="greeting">
          <h2>
            Hello{hasName ? `, ${firstName}` : ", there"}!
          </h2>

          {hasName && (
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85"
              alt="Welcome avatar"
              className="profile-image"
            />
          )}

          <p>
            {hasName
              ? "Beautiful looks good on you. Keep glowing!"
              : "Welcome to your beauty space!"}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default App;
