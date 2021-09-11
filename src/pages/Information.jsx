import "./Information.scss";
import useSWR from "swr";
import loadingImg from "../assets/loading.gif";
import { useState } from "react";

export const InformationData = (props) => {
  return (
    <>
      <div class="information__data">
        <a href={props.url}>
          <p class="information__data--title">{props.title}</p>
          <p class="information__data--detail">{props.detail}</p>
        </a>
      </div>
    </>
  );
};

export const Information = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://script.google.com/macros/s/AKfycbzwMWWl08pWwoIjube6QKlPyiSm6FTRoWu0cGyM_UdnzuddjejxUXW4dLyIntmKpa4FGA/exec",
    fetcher
  );

  const currentTime = new Date();
  const [year, setYear] = useState(String(currentTime.getFullYear()));
  if (error) return <div>failed to load</div>;

  const Loading = <img alt="" src={loadingImg} />;
  if (!data)
    return (
      <div className="information">
        <div className="information__container">{Loading}</div>
      </div>
    );
  console.log(data);
  return (
    <>
      <div className="information">
        <div className="information__container">
          <div className="information__year">
            {Object.keys(data).map((key) => {
              return (
                <button
                  onClick={() => setYear(key)}
                  className={year === key ? "active" : ""}
                >
                  {key}
                </button>
              );
            })}
          </div>
          <div className="information__content">
            <div className="information__content--comp">
              {data[year].map((datum) => {
                return (
                  <InformationData
                    url={datum.url}
                    title={datum.title}
                    detail={datum.detail}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
