import PropTypes from "prop-types";

const MyComponents = ({ name, children }) => {
  return (
    <div>
      <div>이름은 {name} 입니다.</div>
      <p>{children}</p>
    </div>
  );
};

MyComponents.defaultProps = {
  name: "홍길동",
};

MyComponents.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponents;
