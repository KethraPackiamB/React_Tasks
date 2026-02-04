import { usePreferences } from "./PreferencesContext";

const Content = () => {
  const { preferences } = usePreferences();

  return (
    <div
      style={{
        fontSize: preferences.fontSize,
        color: preferences.accentColor,
        padding: preferences.layout === "compact" ? "10px" : "25px",
        border: `2px solid ${preferences.accentColor}`,
        marginTop: "20px",
      }}
    >
      <h2>📄 App Content</h2>
      <p>
        This content automatically updates based on user preferences using
        Context API.
      </p>
    </div>
  );
};

export default Content;
