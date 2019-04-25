import { default as React, Fragment} from 'react';
import {
  Slider as RCSlider,
  Rail as RCRail,
  Handles as RCHandles,
  Tracks as RCTracks
} from 'react-compound-slider';
import { SliderProps } from 'react-compound-slider/Slider/Slider';
import Handle from './Handle';
import Track from './Track';

export interface SliderStylesInterface {
  Slider?: string;
  Rail?: string;
  Track?: string;
  Handle?: string;
  isHandleActive?: string;
}

export interface SliderPropsInterface extends Partial<SliderProps> {
  prefixCss?: string;
  styles?: SliderStylesInterface;
  left?: boolean;
  right?: boolean;
}

const Slider = ({
  left = false,
  prefixCss = 'slider',
  right = false,
  styles,
  values,
  ...sliderProps
}: SliderPropsInterface) => {
  const sliderClassName = styles ? styles.Slider : prefixCss;
  const railClassName = styles ? styles.Rail : `${prefixCss}__Rail`;

  return (
    <RCSlider
      className={sliderClassName}
      values={values}
      {...sliderProps}
    >
      <RCRail>
        {({ getRailProps }) => (
          <div className={railClassName} {...getRailProps()} />
        )}
      </RCRail>
      <RCHandles>
        {({ activeHandleID, handles, getHandleProps }) => (
          <Fragment>
            {handles.map(({ id, percent }) => (
              <Handle
                key={id}
                activeHandleID={activeHandleID}
                getHandleProps={getHandleProps}
                id={id}
                percent={percent}
                prefixCss={prefixCss}
                styles={styles}
              />
            ))}
          </Fragment>
        )}
      </RCHandles>
      <RCTracks left={left} right={right}>
        {({ tracks, getTrackProps }) => (
          <Fragment>
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                getTrackProps={getTrackProps}
                prefixCss={prefixCss}
                source={source}
                styles={styles}
                target={target}
              />
            ))}
          </Fragment>
        )}
      </RCTracks>
    </RCSlider>
  );
};

export default Slider;
