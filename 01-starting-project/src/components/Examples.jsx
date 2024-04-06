import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";

export default function Examples() {
  const [tabContent, setTabContent] = useState();
  function HandleClick(Selectedbutton) {
    setTabContent(Selectedbutton);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={tabContent == "components"}
          onSelect={() => HandleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContent == "jsx"}
          onSelect={() => HandleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent == "props"}
          onSelect={() => HandleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContent == "state"}
          onSelect={() => HandleClick("state")}
        >
          State
        </TabButton>
      </menu>
      {!tabContent && <p>please select a topic</p>}
      {tabContent && (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
