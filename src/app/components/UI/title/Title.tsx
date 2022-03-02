import "./Title.scss";

interface IPropsTitle {
  text: string;
}

function Title(props: IPropsTitle) {
  return (
    <div className="title-bar Text-Style-9">
      <h1></h1>
    </div>
  );
}

export default Title;
