import React from 'react';
import { Icon } from '../Icon';
import './card.css';

export type CardVariant =
  | 'default'
  | 'withImage'
  | 'ecommerce'
  | 'pricing'
  | 'cta'
  | 'testimonial'
  | 'userProfile'
  | 'loginForm';

export interface CardStat {
  label: string;
  value: string | number;
}

export interface CardProps {
  /** Which card layout to render */
  variant?: CardVariant;
  /** Heading text (default / withImage / cta / ecommerce / loginForm / userProfile name) */
  heading?: string;
  /** Body paragraph (default / withImage / cta / userProfile role) */
  body?: string;
  /** Button label */
  buttonText?: string;
  /** Image source for withImage / ecommerce */
  imageSrc?: string;
  imageAlt?: string;
  /** E-commerce rating value shown in the badge */
  rating?: number;
  /** E-commerce price, e.g. "$599" */
  price?: string;
  /** Pricing plan name, e.g. "Standard plan" */
  planName?: string;
  /** Pricing price value, e.g. "$49" */
  priceValue?: string;
  /** Pricing period suffix, e.g. "/month" */
  pricePeriod?: string;
  /** Pricing enabled feature list */
  features?: string[];
  /** Pricing disabled (greyed) feature list */
  disabledFeatures?: string[];
  /** Testimonial quote */
  quote?: string;
  /** Testimonial / userProfile author name */
  authorName?: string;
  /** Testimonial author role */
  authorRole?: string;
  /** Avatar image source (testimonial / userProfile) */
  avatarSrc?: string;
  /** UserProfile stats row */
  stats?: CardStat[];
  /** Login form email field label */
  emailLabel?: string;
  /** Login form password field label */
  passwordLabel?: string;
  /** Button click handler */
  onClick?: () => void;
  /** Extra class names */
  className?: string;
  /** Custom content (replaces nothing; rendered after variant content) */
  children?: React.ReactNode;
}

/** Small avatar with image fallback to the user icon. */
const Avatar = ({ src, size }: { src?: string; size: 'sm' | 'lg' }) => (
  <div className={`flowbite-card__avatar flowbite-card__avatar--${size}`}>
    {src ? (
      <img src={src} alt="" />
    ) : (
      <Icon name="user" size={size === 'lg' ? 32 : 16} />
    )}
  </div>
);

/** Primary in-card button with optional leading icon. */
const CardButton = ({
  label,
  variant = 'primary',
  block = false,
  icon,
  onClick,
}: {
  label: string;
  variant?: 'primary' | 'alt';
  block?: boolean;
  icon?: string;
  onClick?: () => void;
}) => (
  <button
    type="button"
    className={[
      'flowbite-card__btn',
      variant === 'alt' ? 'flowbite-card__btn--alt' : '',
      block ? 'flowbite-card__btn--block' : '',
    ]
      .filter(Boolean)
      .join(' ')}
    onClick={onClick}
  >
    {icon && <Icon name={icon} size={16} />}
    {label}
  </button>
);

/** E-commerce rating: five filled stars + score badge. */
const Rating = ({ rating }: { rating: number }) => (
  <div className="flowbite-card__rating">
    <div className="flowbite-card__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" variant="solid" size={20} />
      ))}
    </div>
    <span className="flowbite-card__rating-badge">{rating} out of 5</span>
  </div>
);

/** Pricing feature list with disabled (greyed) trailing items. */
const FeatureList = ({
  features = [],
  disabledFeatures = [],
}: {
  features?: string[];
  disabledFeatures?: string[];
}) => (
  <ul className="flowbite-card__features">
    {features.map((f, i) => (
      <li key={`f-${i}`} className="flowbite-card__feature">
        <Icon name="check-circle" size={20} />
        <span>{f}</span>
      </li>
    ))}
    {disabledFeatures.map((f, i) => (
      <li key={`d-${i}`} className="flowbite-card__feature flowbite-card__feature--disabled">
        <Icon name="check-circle" size={20} />
        <span>{f}</span>
      </li>
    ))}
  </ul>
);

const renderDefault = (p: CardProps) => (
  <>
    {p.heading && (
      <h3 className="flowbite-card__heading flowbite-card__heading--lg">{p.heading}</h3>
    )}
    {p.body && <p className="flowbite-card__body">{p.body}</p>}
    {p.buttonText && (
      <CardButton label={p.buttonText} icon="arrow-right" onClick={p.onClick} />
    )}
  </>
);

const renderWithImage = (p: CardProps) => (
  <>
    <div className="flowbite-card__image">
      {p.imageSrc && <img src={p.imageSrc} alt={p.imageAlt ?? ''} />}
    </div>
    {p.heading && (
      <h3 className="flowbite-card__heading flowbite-card__heading--lg">{p.heading}</h3>
    )}
    {p.body && <p className="flowbite-card__body">{p.body}</p>}
    {p.buttonText && (
      <CardButton label={p.buttonText} variant="alt" icon="arrow-right" onClick={p.onClick} />
    )}
  </>
);

const renderEcommerce = (p: CardProps) => (
  <>
    <div className="flowbite-card__image">
      {p.imageSrc && <img src={p.imageSrc} alt={p.imageAlt ?? ''} />}
    </div>
    <Rating rating={p.rating ?? 5} />
    {p.heading && (
      <h3 className="flowbite-card__heading flowbite-card__heading--sm">{p.heading}</h3>
    )}
    <div className="flowbite-card__price-row">
      <span className="flowbite-card__price">{p.price}</span>
      <CardButton label={p.buttonText ?? 'Add to cart'} icon="cart" onClick={p.onClick} />
    </div>
  </>
);

const renderPricing = (p: CardProps) => (
  <>
    {p.planName && <div className="flowbite-card__plan">{p.planName}</div>}
    <div className="flowbite-card__price-wrap">
      {p.priceValue && <span className="flowbite-card__price flowbite-card__price--xl">{p.priceValue}</span>}
      {p.pricePeriod && <span className="flowbite-card__period">{p.pricePeriod}</span>}
    </div>
    {(p.features?.length || p.disabledFeatures?.length) && (
      <FeatureList features={p.features} disabledFeatures={p.disabledFeatures} />
    )}
    <CardButton label={p.buttonText ?? 'Add to cart'} block icon="cart" onClick={p.onClick} />
  </>
);

const renderCta = (p: CardProps) => (
  <>
    <div className="flowbite-card__cta-text">
      {p.heading && (
        <h3 className="flowbite-card__heading flowbite-card__heading--lg">{p.heading}</h3>
      )}
      {p.body && <p className="flowbite-card__body">{p.body}</p>}
    </div>
    {p.buttonText && <CardButton label={p.buttonText} icon="arrow-right" onClick={p.onClick} />}
  </>
);

const renderTestimonial = (p: CardProps) => (
  <>
    {p.quote && <p className="flowbite-card__quote">{p.quote}</p>}
    <div className="flowbite-card__author">
      <Avatar src={p.avatarSrc} size="sm" />
      <div className="flowbite-card__author-info">
        {p.authorName && <span className="flowbite-card__author-name">{p.authorName}</span>}
        {p.authorRole && <span className="flowbite-card__author-role">{p.authorRole}</span>}
      </div>
    </div>
  </>
);

const renderUserProfile = (p: CardProps) => (
  <>
    <Avatar src={p.avatarSrc} size="lg" />
    <div className="flowbite-card__profile-info">
      {p.heading && <span className="flowbite-card__profile-name">{p.heading}</span>}
      {p.body && <span className="flowbite-card__profile-role">{p.body}</span>}
    </div>
    {p.stats?.length ? (
      <div className="flowbite-card__stats">
        {p.stats.map((s, i) => (
          <div key={i} className="flowbite-card__stat">
            <span className="flowbite-card__stat-value">{s.value}</span>
            <span className="flowbite-card__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    ) : null}
  </>
);

const renderLoginForm = (p: CardProps) => (
  <>
    {p.heading && (
      <h3 className="flowbite-card__heading flowbite-card__heading--sm">{p.heading}</h3>
    )}
    <div className="flowbite-card__field">
      {p.emailLabel && <label className="flowbite-card__label">{p.emailLabel}</label>}
      <input className="flowbite-card__input" type="email" placeholder="name@flowbite.com" />
    </div>
    <div className="flowbite-card__field">
      {p.passwordLabel && <label className="flowbite-card__label">{p.passwordLabel}</label>}
      <input className="flowbite-card__input" type="password" placeholder="••••••••" />
      <a className="flowbite-card__link" href="#" onClick={(e) => e.preventDefault()}>
        Forgot password?
      </a>
    </div>
    <label className="flowbite-card__checkbox">
      <input type="checkbox" /> Remember me
    </label>
    <CardButton label={p.buttonText ?? 'Sign in'} block onClick={p.onClick} />
  </>
);

const variantRenderers: Record<CardVariant, (p: CardProps) => React.ReactNode> = {
  default: renderDefault,
  withImage: renderWithImage,
  ecommerce: renderEcommerce,
  pricing: renderPricing,
  cta: renderCta,
  testimonial: renderTestimonial,
  userProfile: renderUserProfile,
  loginForm: renderLoginForm,
};

export const Card = ({
  variant = 'default',
  className = '',
  children,
  ...rest
}: CardProps) => {
  const render = variantRenderers[variant];
  const classNames = ['flowbite-card', `flowbite-card--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {render(rest as CardProps)}
      {children}
    </div>
  );
};

export default Card;
