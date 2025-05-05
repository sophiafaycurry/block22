
function ShowSelection({ shows, setSelectedShow }) {
    return (
      <nav>
        {shows.map((show) => (
          <a
            key={show.name}
            className="show"
            onClick={() => setSelectedShow(show)}
          >
            {show.name}
          </a>
        ))}
      </nav>
    );
  }
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <EpisodeList
        episodes={show.episodes}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </>
  );
  function EpisodeList({ episodes, setSelectedEpisode }) {
    return (
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id} onClick={() => setSelectedEpisode(ep)}>
            {ep.name}
          </li>
        ))}
      </ul>
    );
  }
  function EpisodeDetails({ episode }) {
    if (!episode) return <p>Select an episode to see the details.</p>;
    return (
      <div>
        <h2>{episode.name}</h2>
        <p>{episode.description}</p>
      </div>
    );
  }  