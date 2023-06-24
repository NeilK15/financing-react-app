import '../app.css';

type Props = {
  value: number;
};

const MoneyValue = ({ value }: Props) => {
  const processValue = (val: number) => {
    let strVal = val.toString();

    // 111,000,000   len=9

    for (let i = strVal.length - 4; i >= 0; i -= 3) {
      strVal = strVal.slice(0, i + 1) + ',' + strVal.slice(i + 1, strVal.length);
    }

    return `$ ${strVal}`;
  };

  return <span className="money-value">{processValue(value)}</span>;
};

export default MoneyValue;
