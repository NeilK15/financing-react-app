import '../app.css';

type Props = {
  name: string;
  additionalClass?: string;
  children?: JSX.Element;
};

const Tile = ({ name, additionalClass = '', children }: Props) => {
  return (
    <div className={`tile ${additionalClass}`}>
      <h2 className="tile__title">{name}</h2>
      <div className="tile__content">{children}</div>
    </div>
  );
};

export default Tile;
