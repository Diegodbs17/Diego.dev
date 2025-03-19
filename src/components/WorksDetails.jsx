import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const WorksDetails = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorksDetails = async () => {
      try {
        const response = await fetch("/works.json");
        if (!response.ok) {
          throw new Error(`Erreur lors du chargement : ${response.status}`);
        }
        const data = await response.json();
        const workDetails = data.find((item) => item.id === Number(id));
        if (!workDetails) {
          navigate("/error", { replace: true });
          return;
        }
        setWork(workDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorksDetails();
  }, [id, navigate]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  if (!work) return null;

  return (
    <>
      <section className="works-details">
        <div className="container">
            <div className="works-details-content">
                <div className="works-details-left">
                    <h2 className="section-title">{work.title}</h2>
                    {work.link && (
                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="works-details-btn">Voir le projet</a>
                    )}
                </div>
                <div className="works-details-right">
                    <img src={work.image} alt={work.title} />
                    <p className="works-details-para">{work.description}</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default WorksDetails;
