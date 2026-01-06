const Card = ({ title, content, footer }) => {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

window.Card = Card;
