import useSWR from "swr";
import "./Work.scss";
import workImg from "../assets/work.jpg";
import loadingImg from "../assets/loading.gif";

export const Work = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://script.google.com/macros/s/AKfycbxmBMU_7QPIeeNme7ve-IC425-JjrRRiL0m-IbRlkiUvEppG4Mhu_qo0Iu3L0X3ALo4bg/exec",
    fetcher
  );
  if (error) return <div>failed to load</div>;

  const Loading = <img alt="" src={loadingImg} />;

  return (
    <>
      <div class="work">
        <div class="work__container">
          <div class="work__content">
            <h3>共演アーティスト</h3>
            {data ? (
              <p className="h7">
                {data.artists.map((artist) => artist.name).join(", ")}
              </p>
            ) : (
              Loading
            )}
          </div>
          <div class="work__content">
            <h3>Live & Tour</h3>
            {data
              ? data.lives.map((live) => {
                  return (
                    <>
                      <p className="h7">
                        {live.title} <span className="h8">({live.period})</span>
                      </p>
                    </>
                  );
                })
              : Loading}
          </div>
          <div class="work__content">
            <h3>Recording</h3>
            {data
              ? data.recordings.map((recording) => {
                  return (
                    <>
                      <p className="h7">
                        {recording.artist} {recording.title}
                      </p>
                    </>
                  );
                })
              : Loading}
          </div>
          <div class="work__content">
            <h3>DVD</h3>
            {data
              ? data.dvds.map((dvd) => {
                  return (
                    <>
                      <p className="h7">
                        {dvd.artist} {dvd.title}
                      </p>
                    </>
                  );
                })
              : Loading}
          </div>
          <div class="work__content">
            <h3>Game</h3>
            {data
              ? data.games.map((game) => {
                  return (
                    <>
                      <p className="h7">{game.title}</p>
                    </>
                  );
                })
              : Loading}
          </div>
          <div class="work__content">
            <h3>TV</h3>
            {data
              ? data.tvs.map((tv) => {
                  return (
                    <>
                      <p className="h7">
                        {tv.title} {tv.artist}
                      </p>
                    </>
                  );
                })
              : Loading}
          </div>
          <div class="work__img">
            <img alt="" src={workImg} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Work;
