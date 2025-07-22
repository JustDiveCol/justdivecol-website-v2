import React from 'react';
import { ExperienceProvider, useExperiences } from '@/data/content/experiences/DataProvider';

function TestExperienceContent() {
  const { experiences } = useExperiences();

  return (
    <div>
      <h1>Listado de Experiencias y Sesiones</h1>
      {experiences.map((exp) => (
        <section key={exp.id} style={{ marginBottom: 40 }}>
          <h2>
            {exp.titleKey} (<code>{exp.seo.url}</code>)
          </h2>
          <p>Destino: {exp.destinationId}</p>
          <p>Certificaciones: {exp.certificationIds.join(', ')}</p>
          <ul>
            {exp.sessions.map((s) => (
              <li key={s.id}>
                <strong>Sesión:</strong> {s.slug} — <code>{s.url}</code> — Fechas: {s.startDate} →{' '}
                {s.endDate} — Disponibilidad: {s.availability} ({s.seatsAvailable} de {s.capacity})
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

const TestPage = () => {
  return (
    <div className="text-white">
      <ExperienceProvider>
        <TestExperienceContent />
      </ExperienceProvider>
    </div>
  );
};

export default TestPage;
