import { Pause, Play } from "./Player";
import { usePlayerStore } from "../store/playerStore";

function CardPlayButton({ id }) {
  const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;

        setIsPlaying(true);
        setCurrentMusic({ playlist, songs, song: songs[0] });
      });
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-[#1FDF64] p-4"
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}

export default CardPlayButton;
