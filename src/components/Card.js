import "./Card.css";

function Card(props) {
  const realTime = new Date().getFullYear();
  const yearTime = props.data.getFullYear();
  console.log(yearTime);

  return realTime == yearTime ? (
    <div className="container">
      <div className="Card">
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.color}</div>
        <div>{props.data.getFullYear().toString()}</div>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="Card">
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.color}</div>
        <div> {`${realTime - yearTime  } year ago `}</div>
      </div>
    </div>
  );
}
export default Card;
