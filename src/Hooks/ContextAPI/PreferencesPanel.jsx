import { usePreferences } from "./PreferencesContext";

const PreferencesPanel = () => {
  const { preferences, updatePreference, resetPreferences } = usePreferences();

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px" }}>
      <h3>⚙️ User Preferences</h3>

      <label>
        Font Size:
        <select
          value={preferences.fontSize}
          onChange={(e) => updatePreference("fontSize", e.target.value)}
        >
          <option value="14px">Small</option>
          <option value="16px">Medium</option>
          <option value="18px">Large</option>
        </select>
      </label>

      <br /><br />

      <label>
        Accent Color:
        <input
          type="color"
          value={preferences.accentColor}
          onChange={(e) => updatePreference("accentColor", e.target.value)}
        />
      </label>

      <br /><br />

      <label>
        Layout:
        <select
          value={preferences.layout}
          onChange={(e) => updatePreference("layout", e.target.value)}
        >
          <option value="spacious">Spacious</option>
          <option value="compact">Compact</option>
        </select>
      </label>

      <br /><br />

      <button onClick={resetPreferences}>Reset to Default</button>
    </div>
  );
};

export default PreferencesPanel;
