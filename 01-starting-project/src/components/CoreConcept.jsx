import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concepts) => (
          <CoreConcepts key={concepts.title} {...concepts} />
        ))}
        {/* <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
