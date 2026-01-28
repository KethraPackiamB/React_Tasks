import React, { useState } from "react";

const CharacterStatusEffects = () => {
  // Health state
  const [health, setHealth] = useState(100);

  // Status effect states
  const [burning, setBurning] = useState(false);
  const [poisoned, setPoisoned] = useState(false);
  const [frozen, setFrozen] = useState(false);

  // Apply damage based on active effects
  const applyDamage = () => {
    let damage = 0;

    if (burning) damage += 10;
    if (poisoned) damage += 5;

    setHealth((prevHealth) => Math.max(prevHealth - damage, 0));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", width: "350px" }}>
      <h2>Character Status Effects</h2>

      <p><strong>Health:</strong> {health}</p>

      <h3>Status Toggles</h3>
      <button onClick={() => setBurning(!burning)}>
        🔥 Burning: {burning ? "ON" : "OFF"}
      </button>
      <br />

      <button onClick={() => setPoisoned(!poisoned)}>
        ☠️ Poisoned: {poisoned ? "ON" : "OFF"}
      </button>
      <br />

      <button onClick={() => setFrozen(!frozen)}>
        🧊 Frozen: {frozen ? "ON" : "OFF"}
      </button>

      <h3>Actions</h3>
      <button onClick={applyDamage} disabled={health === 0}>
        Apply Damage
      </button>

      <h3>Active Effects</h3>
      {burning || poisoned || frozen ? (
        <ul>
          {burning && <li>🔥 Burning</li>}
          {poisoned && <li>☠️ Poisoned</li>}
          {frozen && <li>🧊 Frozen</li>}
        </ul>
      ) : (
        <p>No active effects</p>
      )}

      {health === 0 && <p style={{ color: "red" }}>💀 Character is defeated</p>}
    </div>
  );
};

export default CharacterStatusEffects;
