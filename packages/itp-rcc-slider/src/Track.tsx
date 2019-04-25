import * as React from 'react';
import { GetTrackProps } from 'react-compound-slider/Tracks/Tracks';
import { SliderItem } from 'react-compound-slider';

export interface TrackStyles {
  Track?: string;
}

export interface TrackProps {
  key?: string;
  getTrackProps: GetTrackProps;
  prefixCss?: string;
  styles?: TrackStyles;
  source: SliderItem;
  target: SliderItem;
}

const Track = ({
  getTrackProps,
  prefixCss,
  source,
  styles,
  target,
}: TrackProps) => {
  const className = styles ? styles.Track : `${prefixCss}__Track`;

  return (
    <div
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      className={className}
      {...getTrackProps()}
    />
  );
};

export default Track;
