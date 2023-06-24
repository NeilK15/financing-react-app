import "./tile.css";

type Props = {
  name: string;
  margin?: string;
  additionalCss?: string;
  content?: JSX.Element;
};

const Tile = ({
  name,
  margin = "auto",
  additionalCss = "",
  content,
}: Props) => {
  return (
    <div className={`tile m-${margin} ${additionalCss}`}>
      <h2>{name}</h2>
      {content}
    </div>
  );
};

export default Tile;
