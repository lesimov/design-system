import React from 'react';
import './bottom-navigation.css';

export type BottomNavStyle = 'call' | 'media-player';

export interface BottomNavigationProps {
  /** Visual style variant */
  style?: BottomNavStyle;
  /** Mobile layout mode */
  mobile?: boolean;
  /** Call duration display (call style) */
  callDuration?: string;
  /** Song title (media-player style) */
  songTitle?: string;
  /** Artist name (media-player style) */
  artist?: string;
  /** Album art URL (media-player style) */
  albumArt?: string;
  /** Current playback time (media-player style) */
  currentTime?: string;
  /** Total duration (media-player style) */
  totalDuration?: string;
  /** Progress percentage (media-player style, 0-100) */
  progress?: number;
  /** Playing state (media-player style) */
  playing?: boolean;
  /** End call handler (call style) */
  onEndCall?: () => void;
  /** Play/pause toggle handler (media-player style) */
  onPlayPause?: () => void;
  /** Previous track handler (media-player style) */
  onPrevious?: () => void;
  /** Next track handler (media-player style) */
  onNext?: () => void;
  /** Additional class names */
  className?: string;
}

// ========== SVG Icons ==========

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6" stroke="#4A5565" strokeWidth="1.5" />
    <path d="M8 4.5V8l2.5 1.5" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MicrophoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1a3 3 0 0 0-3 3v3a3 3 0 1 0 6 0V4a3 3 0 0 0-3-3Z" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2.5 8a5.5 5.5 0 0 0 11 0" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 14v1" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const VideoCameraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 4.5A1.5 1.5 0 0 1 2.5 3h6A1.5 1.5 0 0 1 10 4.5v7A1.5 1.5 0 0 1 8.5 13h-6A1.5 1.5 0 0 1 1 11.5v-7Z" stroke="#4A5565" strokeWidth="1.5" />
    <path d="M10 6l4-2v8l-4-2" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FaceGrinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6" stroke="#4A5565" strokeWidth="1.5" />
    <path d="M5.5 9.5S6.5 11 8 11s2.5-1.5 2.5-1.5" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="5.5" cy="6" r="0.75" fill="#4A5565" />
    <circle cx="10.5" cy="6" r="0.75" fill="#4A5565" />
  </svg>
);

const PhoneEndIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M17.5 14.5c0 .3-.2.6-.5.8l-2 1c-.3.2-.8.2-1.2 0l-2.5-1.5c-.4-.2-.6-.6-.6-1v-1.5A7.5 7.5 0 0 1 9 6.5V8c0 .4-.2.8-.6 1l-2.5 1.5c-.4.2-.8.2-1.2 0l-2-1c-.3-.2-.5-.5-.5-.8V6.5c0-.3.2-.6.5-.8l2-1c.3-.2.8-.2 1.2 0l2.5 1.5c.4.2.6.6.6 1v1.5a7.5 7.5 0 0 1 3.5 0V7c0-.4.2-.8.6-1l2.5-1.5c.4-.2.8-.2 1.2 0l2 1c.3.2.5.5.5.8v8Z" fill="white" />
  </svg>
);

const ShuffleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M14.5 3.5L17 6l-2.5 2.5M3 14h2.5l4-8H17M3 6h2.5l4 8H17" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BackwardStepIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 4v12M16 4l-8 6 8 6V4Z" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3.5 1.5v11l9-5.5-9-5.5Z" fill="white" />
  </svg>
);

const PauseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="2.5" y="1.5" width="3" height="11" rx="0.5" fill="white" />
    <rect x="8.5" y="1.5" width="3" height="11" rx="0.5" fill="white" />
  </svg>
);

const ForwardStepIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M16 4v12M4 4l8 6-8 6V4Z" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RepeatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M13.5 3.5L16 6l-2.5 2.5M6.5 16.5L4 14l2.5-2.5" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 6H5a2 2 0 0 0-2 2v1M4 14h11a2 2 0 0 0 2-2v-1" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AlbumArtPlaceholder = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect width="40" height="40" rx="8" fill="#F3F4F6" />
    <circle cx="20" cy="20" r="8" stroke="#D1D5DB" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="3" fill="#D1D5DB" />
  </svg>
);

// ========== Action button wrapper ==========

interface ActionBtnProps {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionBtn = ({ children, label, onClick }: ActionBtnProps) => (
  <button
    type="button"
    className="flowbite-bottom-nav__action-btn"
    onClick={onClick}
    aria-label={label}
  >
    {children}
  </button>
);

// ========== Call Style ==========

interface CallViewProps {
  callDuration: string;
  onEndCall?: () => void;
}

const CallView = ({ callDuration, onEndCall }: CallViewProps) => (
  <>
    <div className="flowbite-bottom-nav__section">
      <div className="flowbite-bottom-nav__call-info">
        <ClockIcon />
        <span className="flowbite-bottom-nav__call-duration">{callDuration}</span>
      </div>
    </div>

    <div className="flowbite-bottom-nav__section flowbite-bottom-nav__section--center">
      <ActionBtn label="Mute microphone"><MicrophoneIcon /></ActionBtn>
      <ActionBtn label="Turn off camera"><VideoCameraIcon /></ActionBtn>
      <ActionBtn label="Reactions"><FaceGrinIcon /></ActionBtn>
    </div>

    <div className="flowbite-bottom-nav__section">
      <button
        type="button"
        className="flowbite-bottom-nav__end-call"
        onClick={onEndCall}
        aria-label="End call"
      >
        <PhoneEndIcon />
      </button>
    </div>
  </>
);

// ========== Media Player Style ==========

interface MediaPlayerViewProps {
  songTitle: string;
  artist: string;
  albumArt?: string;
  currentTime: string;
  totalDuration: string;
  progress: number;
  playing: boolean;
  onPlayPause?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

const MediaPlayerDesktop = ({
  songTitle, artist, albumArt,
  currentTime, totalDuration, progress,
  playing, onPlayPause, onPrevious, onNext,
}: MediaPlayerViewProps) => (
  <>
    <div className="flowbite-bottom-nav__section">
      <div className="flowbite-bottom-nav__track-info">
        <div className="flowbite-bottom-nav__album-art">
          {albumArt ? (
            <img src={albumArt} alt={`${songTitle} album art`} className="flowbite-bottom-nav__album-img" />
          ) : (
            <AlbumArtPlaceholder />
          )}
        </div>
        <div className="flowbite-bottom-nav__track-text">
          <span className="flowbite-bottom-nav__song-title">{songTitle}</span>
          <span className="flowbite-bottom-nav__artist">{artist}</span>
        </div>
      </div>
    </div>

    <div className="flowbite-bottom-nav__section flowbite-bottom-nav__section--center">
      <ActionBtn label="Previous track" onClick={onPrevious}><BackwardStepIcon /></ActionBtn>
      <button
        type="button"
        className="flowbite-bottom-nav__play-btn"
        onClick={onPlayPause}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <ActionBtn label="Next track" onClick={onNext}><ForwardStepIcon /></ActionBtn>
    </div>

    <div className="flowbite-bottom-nav__section">
      <div className="flowbite-bottom-nav__progress-wrapper">
        <span className="flowbite-bottom-nav__time">{currentTime}</span>
        <div className="flowbite-bottom-nav__progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="flowbite-bottom-nav__progress-track" />
          <div className="flowbite-bottom-nav__progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="flowbite-bottom-nav__time">{totalDuration}</span>
      </div>
    </div>
  </>
);

const MediaPlayerMobile = ({
  currentTime, totalDuration, progress,
  playing, onPlayPause, onPrevious, onNext,
}: MediaPlayerViewProps) => (
  <div className="flowbite-bottom-nav__mobile-media">
    <div className="flowbite-bottom-nav__mobile-controls">
      <ActionBtn label="Shuffle"><ShuffleIcon /></ActionBtn>
      <ActionBtn label="Previous track" onClick={onPrevious}><BackwardStepIcon /></ActionBtn>
      <button
        type="button"
        className="flowbite-bottom-nav__play-btn"
        onClick={onPlayPause}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <ActionBtn label="Next track" onClick={onNext}><ForwardStepIcon /></ActionBtn>
      <ActionBtn label="Repeat"><RepeatIcon /></ActionBtn>
    </div>

    <div className="flowbite-bottom-nav__progress-wrapper">
      <span className="flowbite-bottom-nav__time">{currentTime}</span>
      <div className="flowbite-bottom-nav__progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="flowbite-bottom-nav__progress-track" />
        <div className="flowbite-bottom-nav__progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="flowbite-bottom-nav__time">{totalDuration}</span>
    </div>
  </div>
);

// ========== Main Component ==========

export const BottomNavigation = ({
  style: navStyle = 'call',
  mobile = false,
  callDuration = '12:43 AM',
  songTitle = 'Song Title',
  artist = 'Artist Name',
  albumArt,
  currentTime = '3:45',
  totalDuration = '5:00',
  progress = 68,
  playing = true,
  onEndCall,
  onPlayPause,
  onPrevious,
  onNext,
  className = '',
}: BottomNavigationProps) => {
  const classNames = [
    'flowbite-bottom-nav',
    `flowbite-bottom-nav--${navStyle === 'media-player' ? 'media-player' : 'call'}`,
    mobile && 'flowbite-bottom-nav--mobile',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={classNames} role="navigation" aria-label={navStyle === 'call' ? 'Call controls' : 'Media player'}>
      {navStyle === 'call' ? (
        <CallView callDuration={callDuration} onEndCall={onEndCall} />
      ) : mobile ? (
        <MediaPlayerMobile
          songTitle={songTitle}
          artist={artist}
          albumArt={albumArt}
          currentTime={currentTime}
          totalDuration={totalDuration}
          progress={progress}
          playing={playing}
          onPlayPause={onPlayPause}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      ) : (
        <MediaPlayerDesktop
          songTitle={songTitle}
          artist={artist}
          albumArt={albumArt}
          currentTime={currentTime}
          totalDuration={totalDuration}
          progress={progress}
          playing={playing}
          onPlayPause={onPlayPause}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
    </nav>
  );
};

export default BottomNavigation;