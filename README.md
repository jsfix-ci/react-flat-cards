# React Flat Cards
A react-based component for displaying sheet cards.

[![N|Solid](/logo192.png?raw=true)](https://github.com/Oz-Hershco/react-flat-cards)

## Basic Usage
```js
import SheetCard from './Components/SheetCard/SheetCard';
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
      />
    </div>
  );
}
```

![N|Solid](/example1.png?raw=true)

## Props
| Name | Type | Default | Description | 
| ------ | ------ | ------ | ------ |
| thumbnail | string | Required | Should include a source of an image. |
| title | string | Required | Should include the title text you would like to display on the card. |
| description | string | Required | Should include the detailed text description of the card. |
| secondaryText | string | undefined | Should include the text you wish to include on the top right side of the card.|
| className | string | undefined | A class name that will be assigned to the main div of the flat card component.|
| thumbnailClass | string | undefined | A class name that will be assigned to the thumbnail of the flat card component.|
| contentWrapperClass | string | undefined | A class name that will be assigned to the content container of the flat card component.|
| contentHeaderClass | string | undefined | A class name that will be assigned to the content header container of the flat card component.|
| secondaryContainer | React component / JSX | undefined | Custom React component/JSX expression that replaces the existing secondary container. *If added, secondaryText will be ignored.|
| readMoreEnabled | boolean | false | Enables the option to limit description text to a certain amount of characters, presenting the user with the option to read more or less of the description.|
| readMoreCharacterLimit | number | 100 | Define the amount of description characters to limit from view. *Ignored is readMoreEnabled is set to false|
