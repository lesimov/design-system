import React from 'react';
import { Icon } from '../Icon';
import './chat-bubble.css';

export type BubbleDirection = 'left' | 'right';
export type BubbleContentType = 'text' | 'file' | 'image' | 'link' | 'audio';

export interface ChatBubbleProps {
  /** Direction: left (incoming) or right (outgoing) */
  direction?: BubbleDirection;
  /** Explicit content type. Inferred from props when omitted. */
  type?: BubbleContentType;
  /** Sender name shown in the header */
  senderName?: string;
  /** Timestamp shown in the header */
  time?: string;
  /** Delivery status, e.g. "Delivered" */
  status?: string;
  /** Avatar image source */
  avatarSrc?: string;
  /** Avatar image alt text */
  avatarAlt?: string;
  /** Text message content (type="text") */
  message?: string;
  /** File name (type="file") */
  fileName?: string;
  /** File size, e.g. "18 MB" (type="file") */
  fileSize?: string;
  /** File pages, e.g. "12 Pages" (type="file") */
  filePages?: string;
  /** File format, e.g. "PDF" (type="file") */
  fileFormat?: string;
  /** Image source (type="image" or "link") */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image caption / title (type="image") */
  caption?: string;
  /** Domain shown under image caption (type="image") */
  imageDomain?: string;
  /** Link URL text (type="link") */
  linkUrl?: string;
  /** Link preview title (type="link") */
  linkTitle?: string;
  /** Link preview domain (type="link") */
  linkDomain?: string;
  /** Intro text before the link (type="link") */
  linkIntro?: string;
  /** Audio duration, e.g. "0:34" (type="audio") */
  audioDuration?: string;
  /** Custom content overrides all built-in types */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
}

/* ---------- Helpers ---------- */

function inferType(props: ChatBubbleProps): BubbleContentType {
  if (props.fileName) return 'file';
  if (props.linkUrl || props.linkTitle) return 'link';
  if (props.imageSrc && props.linkTitle) return 'link';
  if (props.imageSrc) return 'image';
  if (props.audioDuration) return 'audio';
  return 'text';
}

/* ---------- Content renderers ---------- */

const TextContent = ({ message }: { message?: string }) => (
  <div className="flowbite-chat-bubble__message">{message}</div>
);

const FileContent = ({
  fileName,
  fileSize,
  filePages,
  fileFormat,
}: Pick<
  ChatBubbleProps,
  'fileName' | 'fileSize' | 'filePages' | 'fileFormat'
>) => {
  const meta = [filePages, fileSize, fileFormat].filter(Boolean);
  return (
    <div className="flowbite-chat-bubble__file">
      <div className="flowbite-chat-bubble__file-row">
        <div className="flowbite-chat-bubble__file-info">
          <span className="flowbite-chat-bubble__file-icon">
            <Icon name="file-lines" size={20} />
          </span>
          <span className="flowbite-chat-bubble__file-name">{fileName}</span>
        </div>
        <button
          type="button"
          className="flowbite-chat-bubble__file-download"
          aria-label={`Download ${fileName ?? 'file'}`}
        >
          <Icon name="download" size={20} />
        </button>
      </div>
      {meta.length > 0 && (
        <div className="flowbite-chat-bubble__file-meta">
          {meta.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="flowbite-chat-bubble__meta-dot" />}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

const ImageContent = ({
  imageSrc,
  imageAlt,
  caption,
  imageDomain,
}: Pick<ChatBubbleProps, 'imageSrc' | 'imageAlt' | 'caption' | 'imageDomain'>) => (
  <>
    <img
      className="flowbite-chat-bubble__image"
      src={imageSrc}
      alt={imageAlt ?? caption ?? ''}
    />
    {(caption || imageDomain) && (
      <div className="flowbite-chat-bubble__link-preview">
        {caption && <span className="flowbite-chat-bubble__link-title">{caption}</span>}
        {imageDomain && (
          <span className="flowbite-chat-bubble__link-domain">{imageDomain}</span>
        )}
      </div>
    )}
  </>
);

const LinkContent = ({
  linkUrl,
  linkTitle,
  linkDomain,
  linkIntro,
  imageSrc,
  imageAlt,
}: Pick<
  ChatBubbleProps,
  'linkUrl' | 'linkTitle' | 'linkDomain' | 'linkIntro' | 'imageSrc' | 'imageAlt'
>) => (
  <>
    {linkIntro && (
      <div className="flowbite-chat-bubble__link-intro">{linkIntro}</div>
    )}
    {linkUrl && (
      <a
        className="flowbite-chat-bubble__link-url"
        href={linkUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        {linkUrl}
      </a>
    )}
    {(linkTitle || imageSrc) && (
      <div className="flowbite-chat-bubble__link-preview">
        {imageSrc && (
          <img
            className="flowbite-chat-bubble__link-image"
            src={imageSrc}
            alt={imageAlt ?? linkTitle ?? ''}
          />
        )}
        {linkTitle && (
          <span className="flowbite-chat-bubble__link-title">{linkTitle}</span>
        )}
        {linkDomain && (
          <span className="flowbite-chat-bubble__link-domain">{linkDomain}</span>
        )}
      </div>
    )}
  </>
);

const AudioContent = ({
  audioDuration,
}: Pick<ChatBubbleProps, 'audioDuration'>) => {
  const bars = [10, 16, 22, 14, 20, 8, 18, 12, 24, 16, 10, 20, 14, 8, 18];
  return (
    <div className="flowbite-chat-bubble__audio">
      <button
        type="button"
        className="flowbite-chat-bubble__audio-play"
        aria-label="Play audio"
      >
        <Icon name="play" size={14} variant="solid" />
      </button>
      <div className="flowbite-chat-bubble__audio-wave">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flowbite-chat-bubble__audio-bar"
            style={{ height: h }}
          />
        ))}
      </div>
      {audioDuration && (
        <span className="flowbite-chat-bubble__audio-duration">{audioDuration}</span>
      )}
    </div>
  );
};

/* ---------- Main component ---------- */

export const ChatBubble = ({
  direction = 'left',
  type,
  senderName,
  time,
  status,
  avatarSrc,
  avatarAlt,
  message,
  fileName,
  fileSize,
  filePages,
  fileFormat,
  imageSrc,
  imageAlt,
  caption,
  imageDomain,
  linkUrl,
  linkTitle,
  linkDomain,
  linkIntro,
  audioDuration,
  children,
  className = '',
}: ChatBubbleProps) => {
  const contentType = type ?? inferType({
    fileName,
    linkUrl,
    linkTitle,
    imageSrc,
    audioDuration,
  });

  const rootClass = [
    'flowbite-chat-bubble',
    `flowbite-chat-bubble--${direction}`,
    !avatarSrc && direction === 'right' ? 'flowbite-chat-bubble--no-avatar' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderContent = () => {
    if (children !== undefined) return children;
    switch (contentType) {
      case 'text':
        return <TextContent message={message} />;
      case 'file':
        return (
          <FileContent
            fileName={fileName}
            fileSize={fileSize}
            filePages={filePages}
            fileFormat={fileFormat}
          />
        );
      case 'image':
        return (
          <ImageContent
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            caption={caption}
            imageDomain={imageDomain}
          />
        );
      case 'link':
        return (
          <LinkContent
            linkUrl={linkUrl}
            linkTitle={linkTitle}
            linkDomain={linkDomain}
            linkIntro={linkIntro}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
          />
        );
      case 'audio':
        return <AudioContent audioDuration={audioDuration} />;
      default:
        return <TextContent message={message} />;
    }
  };

  return (
    <div className={rootClass}>
      {avatarSrc && (
        <img
          className="flowbite-chat-bubble__avatar"
          src={avatarSrc}
          alt={avatarAlt ?? senderName ?? ''}
        />
      )}
      <div className="flowbite-chat-bubble__container">
        <div className="flowbite-chat-bubble__frame">
          {(senderName || time) && (
            <div className="flowbite-chat-bubble__header">
              {senderName && (
                <span className="flowbite-chat-bubble__name">{senderName}</span>
              )}
              {time && <span className="flowbite-chat-bubble__time">{time}</span>}
            </div>
          )}
          {renderContent()}
          {status && (
            <span className="flowbite-chat-bubble__status">{status}</span>
          )}
        </div>
        <button
          type="button"
          className="flowbite-chat-bubble__dots"
          aria-label="More options"
        >
          <Icon name="dots-vertical" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBubble;
