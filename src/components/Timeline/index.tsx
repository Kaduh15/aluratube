import React from "react";
import { IVideo } from "../../../types";
import config from "../../../config.json";
import { StyledTimeline } from "./styles";

// import { Container } from './styles';
interface IProps {
  playlists: typeof config.playlists;
}

type TKey = keyof typeof config.playlists

const Timeline: React.FC<IProps> = ({ playlists }) => {
  const playlistNames = Object.keys(playlists) as TKey[];

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos: IVideo[] = playlists['back-end'];
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => (
                <a href={video.url} key={video.url}>
                  <img src={video.thumb} />
                  <span>
                    {video.title}
                  </span>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
};

export default Timeline;
