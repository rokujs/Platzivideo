import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { match, playing } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispachtToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispachtToProps)(Player);
