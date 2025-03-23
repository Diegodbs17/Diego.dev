import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const ProjectSection = () => {
  const [works, setWorks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/Diegodbs17/Diego.dev/refs/heads/gh-pages/works.json");
        if (!response.ok) {
          throw new Error(`Erreur lors du chargement : ${response.status}`);
        }
        const data = await response.json();
        setWorks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorks();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <section className="project-section" id="works">
        <div className="container">
            <h2 className="section-title">Projets</h2>
            <div className="project-content">
                {works.map((work, index) => (
                <Link key={work.id} to={`/Work/${work.id}`}>
                    <div className="project-card">
                        <div className="card-content">
                            <div className="number-card">
                                <h2 className="project-number">{work.number}</h2>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{work.title}</h3>
                            </div>
                            <div className="img-card">
                                <img src={work.image} alt={work.title} className="project-image" />
                            </div>
                            <i class="fa-solid fa-arrow-right icon-responsive-project"></i>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ProjectSection;