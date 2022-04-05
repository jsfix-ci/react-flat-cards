import './App.scss';
import FlatCard from './lib/components/FlatCard';
function App() {
  return (
    <div className="App">
      <FlatCard
        thumbnail="https://asset.vg247.com/hitman_new_face.jpg/BROK/thumbnail/1200x900/quality/100/hitman_new_face.jpg"
        title="Hitman"
        description="Hitman is a stealth video game franchise developed by the Danish developer IO Interactive,
         and previously published by Eidos Interactive and Square Enix. IO Interactive remained a subsidiary of
          Square Enix until 2017, when Square Enix started seeking buyers for the studio."
        secondaryText="Released"
        readMoreEnabled={true}
        readMoreCharacterLimit={150}
      />
    </div>
  );
}

export default App;
